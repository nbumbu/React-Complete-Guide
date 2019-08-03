import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

    let btnClass = '';

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name} 
                  age={person.age}
                  click={() => this.deltePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
              </ErrorBoundary>
              )
            })
          }
      </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    


    return ( // Return JSX not HTML
        <div className={classes.App}>
          <h1>I am a React App!!!</h1>
          <h2 className={assignedClasses.join(' ')}>This is really working!</h2>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App!!!!'));
  }
}

export default App;
