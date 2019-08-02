import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return ( // Return JSX not HTML
      <div className="App">
        <h1>I am a React App!!!</h1>
        <h2>This is really working!</h2>
        <Person/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App!!!!'));
  }
}

export default App;
