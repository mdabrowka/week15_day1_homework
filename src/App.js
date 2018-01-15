import React, { Component } from 'react';
import OpeningsBox from './components/OpeningsBox.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <OpeningsBox title ="UK Openings this week" />
    );
  }
}

export default App;
