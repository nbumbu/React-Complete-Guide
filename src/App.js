import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 22
      },
      {
        name: 'George',
        age: 24
      },
      {
        name: 'Isa',
        age: 18
      }
    ],
    otherState: 'Other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!')
    // DO NOT MUTATE THE STATE DIRECTLY this.state.persons[0].name = 'Jorjio';
    this.setState({
      persons: [
        {
          name: 'Maxim',
          age: 22
        },
        {
          name: 'George',
          age: 24
        },
        {
          name: 'Isa',
          age: 30
        }
      ]});
  }

  render() {
    return ( // Return JSX not HTML
      <div className="App">
        <h1>I am a React App!!!</h1>
        <h2>This is really working!</h2>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App!!!!'));
  }
}

export default App;
