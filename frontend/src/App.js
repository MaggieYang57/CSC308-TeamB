import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Table from './Table';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="demo" onClick={async () => document.getElementById("demo").innerHTML = await fetchAll()}>Click me (innerHTML).</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <Table hikeList={message} />
    </div>
  );
}

export default App;
