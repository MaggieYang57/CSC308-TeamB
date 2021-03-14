
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { Navigation } from './components/Navigation';
import SinglePage from './SinglePage';
import HikeFinder from './HikeFinder';
import HomePage from './HomePage';
import Login from './LoginPage';
import Signup from './SignupPage';
import FilterBar from './components/FilterBar'

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
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetchAll().then((result) => {
      if (result) setAppState({ filteredDataIndexes: new Set([...Array(result.length).keys()]), filters: appState.filters, baseHikeData: result })
    });
  }, []);

  function addFilter(filter) {
    const hikeData = appState.baseHikeData;
    const filters = new Set([...appState.filters]);
    filters.add(filter);
    let indices = new Set([...appState.filteredDataIndexes]);
    if (filters.size === 1) {
      indices = new Set()
    }
    for (var i = 0; i < hikeData.length; i++) {
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
      for (var i = 0; i < hikeData.length; i++) {
        for (const filterOpt of filters) {
          if (hikeData[i][filterOpt] === true) {
            indices.add(i);
          }
        }
      }
  }

    else {
      indices = new Set([...Array(appState.baseHikeData.length).keys()]);
    }

    setAppState({
      filteredDataIndexes: indices,
      filters: filters,
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
      <div className="App" style={{margin: "auto"}}>
        <Navigation />
        <Switch>
          <Route exact path ="/">
            <HomePage/>
          </Route>
          <Route exact path="/hike">Test</Route>

          <Route exact path="/hike/:id" component={SinglePage} />          
          
          <Route exact path="/singlepage">
            <SinglePage />
          </Route>
          <Route exact path="/hikeFinder">
            <FilterBar onChange={handleFilterChange}/>
            <HikeFinder hikeList={appState.baseHikeData.filter((_, i) => appState.filteredDataIndexes.has(i))} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
