import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        {
          id: 'asdf12', name: 'Max',
          age: 22
        },
        {
          id: 'ffeew1', name: 'George',
          age: 24
        },
        {
          id: '123f3', name: 'Isa',
          age: 18
        }
      ],
      otherState: 'Other value',
      showPersons: false,
      showCockpit: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDErivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMoount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id
    })
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
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
    console.log('[Aoo.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons persons={this.state.persons}
            clicked={this.deltePersonHandler}
            changed={this.nameChangedHandler} />
    }

    return ( // Return JSX not HTML
      <div className={classes.App}>
        <button onClick={() => this.setState({showCockpit: !this.state.showCockpit})}>Remove Cock</button>
        { this.state.showCockpit ? <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler}/> : null}
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App!!!!'));
  }
}

export default App;
