import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import './css/App.css';

import NavBar from './components/NavBar'
import Table from './components/Table';
import SinglePage from './components/SinglePage';

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
      });
  }, [] );

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path ="/">
            <Table hikeList={message} />
          </Route>
          <Route exact path ="/singlepage">
            <SinglePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
