import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { Navigation } from './components/Navigation'
import Table from './components/Table';
import SinglePage from './SinglePage';
import HikeFinder from './HikeFinder';
import HomePage from './HomePage';

function App() {
  const [message, setMessage] = useState([]);
  async function fetchAll(){
     try {
        const response = await axios.get('http://localhost:3001/hike');
        return response.data;     
     }
     catch (error){
        //We're not handling errors. Just logging into the console.
        console.log(error); 
        return false;         
     }
  }


  useEffect(() => {
      fetchAll().then( result => {
         if (result)
            setMessage(result);
            console.log(result);
      });

  }, [] );

  return (
    <BrowserRouter>
      <title>SLO Hikes</title>
      <div className="App" style={{margin: "auto"}}>
        <Navigation />
        <Switch>
          <Route exact path ="/">
            <HomePage />
          </Route>
          <Route exact path="/hike">Test</Route>

          <Route exact path="/hike/:id" component={SinglePage} />          
          
          <Route exact path="/singlepage">
            <SinglePage />
          </Route>
          <Route exact path="/hikeFinder">
            <HikeFinder />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
