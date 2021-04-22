/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./components/navbars/Navigation";
import { Footer } from "./components/Footer";
import HomePage from "./HomePage";

import FilterBar from "./components/FilterBar";
import HikeFinder from "./HikeFinder";
import SinglePage from "./SinglePage";
import ReviewPage from "./ReviewPage";

import Login from "./LoginPage";
import Signup from "./SignupPage";
import SignupSuccess from "./components/SignupSuccess";
import LogoutSuccess from "./components/LogoutSuccess";
import ProfilePage from "./ProfilePage";

function App() {
  const [appState, setAppState] = useState({
    baseHikeData: [],
    filteredDataIndexes: new Set(),
    filters: new Set(),
  });

  async function fetchAll() {
    try {
      const response = await axios.get("http://localhost:3001/hike");
      return response.data;
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetchAll().then((result) => {
      if (result)
        setAppState({
          filteredDataIndexes: new Set([...Array(result.length).keys()]),
          filters: appState.filters,
          baseHikeData: result,
        });
    });
  }, []);

  function addFilter(filter) {
    const hikeData = appState.baseHikeData;
    const filters = new Set([...appState.filters]);
    filters.add(filter);
    let indices = new Set([...appState.filteredDataIndexes]);
    if (filters.size === 1) {
      indices = new Set();
    }
    for (let i = 0; i < hikeData.length; i++) {
      if (hikeData[i][filter] === true) {
        indices.add(i);
      }
    }

    setAppState({
      filteredDataIndexes: indices,
      filters,
      baseHikeData: appState.baseHikeData,
    });
  }

  function removeFilter(filter) {
    const hikeData = appState.baseHikeData;
    const filters = new Set([...appState.filters]);
    filters.delete(filter);
    let indices = new Set();
    if (filters.size > 0) {
      for (let i = 0; i < hikeData.length; i++) {
        for (const filterOpt of filters) {
          if (hikeData[i][filterOpt] === true) {
            indices.add(i);
          }
        }
      }
    } else {
      indices = new Set([...Array(appState.baseHikeData.length).keys()]);
    }

    setAppState({
      filteredDataIndexes: indices,
      filters: filters,
      baseHikeData: appState.baseHikeData,
    });
  }

  const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  function sortByDifficulty(a, b) {
    return average(b.difficulty) - average(a.difficulty);
  }

  function handleDifficultyChange(diff) {
    const diffNum = parseInt(diff, 10);
    const hikeData = appState.baseHikeData.filter((_, i) =>
      appState.filteredDataIndexes.has(i)
    );
    let indices = new Set();
    if (hikeData.length > 0 && diffNum !== 0) {
      let sortedHikes;
      if (diffNum === 1) {
        sortedHikes = hikeData.sort(sortByDifficulty);
      } else if (diffNum === 2) {
        sortedHikes = hikeData.sort(sortByDifficulty).reverse();
      }
      for (let i = 0; i < sortedHikes.length; i++) {
        indices.add(appState.baseHikeData.indexOf(sortedHikes[i]));
      }
    } else if (diffNum === 0) {
      indices = new Set([...appState.filteredDataIndexes]);
    }

    setAppState({
      filteredDataIndexes: indices,
      filters: appState.filters,
      baseHikeData: appState.baseHikeData,
    });
  }

  function handleFilterChange(newFilter) {
    if (appState.filters.has(newFilter)) {
      removeFilter(newFilter);
    } else {
      addFilter(newFilter);
    }
  }

  return (
    <BrowserRouter>
      <title>SLO Hikes</title>
      <div className="App" style={{ margin: "auto" }}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage hikeList={appState.baseHikeData} />
          </Route>
          <Route exact path="/hike">
            Test
          </Route>

          <Route exact path="/hike/:id" component={SinglePage} />

          <Route exact path="/hikeFinder">
            <FilterBar
              onChange={handleFilterChange}
              onDiff={handleDifficultyChange}
            />
            <HikeFinder
              hikeList={[...appState.filteredDataIndexes].map(
                (i) => appState.baseHikeData[i]
              )}
            />
          </Route>
          <Route exact path="/review/:id" component={ReviewPage} />
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signupSuccess">
            <SignupSuccess />
          </Route>
          
          <Route exact path="/profile">
            <Redirect to = "/profile/:id"/>
          </Route>

          <Route exact path="/profile/:id" component={ProfilePage} />

          <Route exact path="/logout">
            <LogoutSuccess />
          </Route>
        </Switch>
        <Container style={{ marginTop: "7vw" }}></Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
