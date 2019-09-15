import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecipesList from '../../containers/recipes';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* <Router>
        <Route exact path="/" component={RecipesList} />
      </Router>
      <RecipesList /> */}

      <RecipesList />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
