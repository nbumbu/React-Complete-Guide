import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        id:'asdf12', name: 'Max',
        age: 22
      },
      {
        id:'ffeew1', name: 'George',
        age: 24
      },
      {
        id:'123f3', name: 'Isa',
        age: 18
      }
    ],
    otherState: 'Other value',
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow  = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deltePersonHandler = (personIndex) => {
    // Change the state in an imutable way
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // create a copy of a state
    console.log(persons)
    persons.splice(personIndex, 1); // modify the copy of the state
    this.setState({ // update the original state
      persons: persons
    })
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
              name={person.name} 
              age={person.age}
              click={() => this.deltePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })
          }
      </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }




    return ( // Return JSX not HTML
      <StyleRoot>
        <div className="App">
          <h1>I am a React App!!!</h1>
          <h2 className={classes.join(' ')}>This is really working!</h2>
          <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App!!!!'));
  }
}

export default Radium(App);
