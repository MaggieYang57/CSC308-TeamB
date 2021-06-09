import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import { Container } from "react-bootstrap";
import Navigation from "./components/navbars/Navigation";
import { Footer } from "./components/Footer";
import HomePage from "./HomePage";

import HikeFinder from "./HikeFinder";
import SinglePage from "./SinglePage";
import ReviewPage from "./ReviewPage";

import Login from "./LoginPage";
import Signup from "./SignupPage";
import SignupSuccess from "./components/SignupSuccess";
import LogoutSuccess from "./components/LogoutSuccess";
import ReviewSuccess from "./components/ReviewSuccess";
import ProfilePage from "./ProfilePage";
import ManagePage from "./ManagePage";

require('dotenv').config()
const backendHostURL = process.env.REACT_APP_BACKEND_HOST_URL

function App() {
  const [appState, setAppState] = useState({
    baseHikeData: [],
  });
  const [userState, setUserState] = useState({
    user: localStorage.getItem("user_type")
  });

  async function fetchAll() {
    try {
      const response = await axios.get(`${backendHostURL}/hike`)
      return response.data
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  useEffect(() => {
    fetchAll().then((result) => {
      if (result)
        setAppState({
          baseHikeData: result,
        });

    });

  }, []);

  // added to ensure nav reloads immediately after successful login
  function handleUserChange(user) {
    setUserState({
      user: user
    })
  }

  let hikeIdPath;
  if (backendHostURL === "http://localhost:3001")
    hikeIdPath = window.location.pathname.split('/')[2]
  else if (backendHostURL === "https://slo-hikes-backend.herokuapp.com")
    hikeIdPath = window.location.href.split('/')[4]

  return (
    <BrowserRouter>
      <title>SLO Hikes</title>
      <div className="App" style={{ margin: "auto" }}>
        <Navigation userType={userState.user} />
        <Switch>
          <Route exact path="/">
            <HomePage hikeList={appState.baseHikeData} />
          </Route>
          <Route exact path="/hike">
            Test
          </Route>

          <Route exact path="/hike/:id" component={SinglePage} />

          <Route exact path="/hikeFinder">
            <HikeFinder
              hikeList={appState.baseHikeData}
            />
          </Route>
          <Route exact path="/singlepage">
            <SinglePage />
          </Route>
          <Route exact path="/review/:id" component={localStorage.getItem("isLoggedIn") === "true" ? ReviewPage : Login } />
          <Route exact path="/login">
            <Login onUserChange={handleUserChange} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signupSuccess">
            <SignupSuccess />
          </Route>

          <Route exact path="/manage">
            <ManagePage />
          </Route>

          <Route exact path="/profile" component={ProfilePage} />

          <Route exact path="/logout">
            <LogoutSuccess />
          </Route>
          {/* <Route exact path="/hike/:id" component={SinglePage} /> */}
          <Route exact path="/reviewSuccess/:id">
            <ReviewSuccess hikeid={hikeIdPath} />
          </Route>
        </Switch>
        <Container style={{ marginTop: "7vw" }}></Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App
