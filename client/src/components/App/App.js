import React from 'react';
import './App.css';
import RecipesList from '../../containers/recipes';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Col } from 'antd';

function App() {
  return (
    <div>
      <img src="images/persian2.jpg" alt="Ingredients" />

      <h1 style={{ color: '#3b064d', marginLeft: '10px' }}>Welcome to Awesome Recipes</h1>
      <div style={{ padding: "10px" }}>
        <Row>
          <Col span={24}>
            <Router><Route path="/" component={RecipesList} /></Router>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
