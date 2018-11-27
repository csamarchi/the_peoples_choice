import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BarChart} from 'react-easy-chart';
import LandingPage from './LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
