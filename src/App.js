import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = (props) => {
  const [personState, setPersonsState] = useState({
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
  })

  const switchNameHandler = () => {
    setPersonsState(
      {
        persons: [
          {
            name: 'Maxon',
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
        otherState: personState.otherState
      }
    )
  }

  const [otherState, setOtherState] = useState(
    'some random value')

  console.log(personState, otherState);

  return ( // Return JSX not HTML
    <div className="App">
      <h1>I am a React App!!!</h1>
      <h2>This is really working!</h2>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />

    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I am a React App!!!!'));

}

export default App;
