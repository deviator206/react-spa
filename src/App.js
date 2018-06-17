import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainContentComponent from './MainComponent';


class App extends Component {
 
  render() {
    return (
      <div className="container-fluid">
        <MainContentComponent />
      </div>
    );
  }
}

export default App;
