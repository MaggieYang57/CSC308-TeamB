import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {

  const message = fetchAll()

  async function fetchAll(){
     try {
        const response = await axios.get('http://localhost:3001/');
        return response.data;     
     }
     catch (error){
        //We're not handling errors. Just logging into the console.
        console.log(error); 
        return false;         
     }
  }

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
    </div>
  );
}

export default App;
