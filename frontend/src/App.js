import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'

import { Container } from 'react-bootstrap'
import { Navigation } from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './HomePage'

import HikeFinder from './HikeFinder'
import SinglePage from './SinglePage'
import ReviewPage from './ReviewPage'

import Login from './LoginPage'
import Signup from './SignupPage'
import SignupSuccess from './components/SignupSuccess'
import ProfilePage from './ProfilePage'

function App () {
  const [appState, setAppState] = useState({
    baseHikeData: [],
    filteredDataIndexes: new Set(),
    filters: new Set()
  })

  async function fetchAll () {
    try {
      const response = await axios.get('http://localhost:3001/hike')
      return response.data
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  useEffect(() => {
    fetchAll().then((result) => {
      if (result) {
        setAppState({
          filteredDataIndexes: new Set([...Array(result.length).keys()]),
          filters: appState.filters,
          baseHikeData: result
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <title>SLO Hikes</title>
      <div className="App" style={{ margin: 'auto' }}>
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
            <HikeFinder
              hikeList={appState.baseHikeData}
            />
          </Route>
          <Route exact path="/singlepage">
            <SinglePage />
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
            <ProfilePage />
          </Route>
        </Switch>
        <Container style={{ marginTop: '7vw' }}></Container>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
