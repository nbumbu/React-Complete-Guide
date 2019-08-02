import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import { inherits } from 'util';

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

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DO NOT MUTATE THE STATE DIRECTLY this.state.persons[0].name = 'Jorjio';
    this.setState({
      persons: [
        {
          name: newName,
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Max',
          age: 22
        },
        {
          name: event.target.value,
          age: 24
        },
        {
          name: 'Isa',
          age: 30
        }
      ]});
  }

  render() {
    const style = {
      backgroundColor: 'red',
      font: inherits,
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return ( // Return JSX not HTML
      <div className="App">
        <h1>I am a React App!!!</h1>
        <h2>This is really working!</h2>
        <button onClick={() => this.switchNameHandler('Bro')} style={style    }>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'No Bro')}
        changed={this.nameChangedHandler}>My hobbies: racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App!!!!'));
  }
}

export default App;
