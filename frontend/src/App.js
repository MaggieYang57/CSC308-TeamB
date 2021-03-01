import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import './css/App.css';

import NavBar from './components/NavBar'
import Table from './components/Table';
import SinglePage from './components/SinglePage';
import FilterBar from './components/FilterBar';

function App() {
  const [message, setMessage] = useState([]);
  const [filteredHikes, setHikes] = useState([]);
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
      });
  }, [] );

  return (
    <BrowserRouter>
      <title>SLO Hikes</title>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/hike">Sup mofos</Route>
          <Route exact path="/singlepage">
            <SinglePage />
          </Route>
          <Route exact path="/hikeFinder">
            <FilterBar />
            <Table hikeList={message} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
