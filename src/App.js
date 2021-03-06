import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asf', name: 'Max', age: 28 },
      {id: 'gds', name: 'Manu', age: 29 },
      {id: 'hdf', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    /*
      ALTERNATIVE
      const person = Object.assign({}, this.state.persons[personIndex]);
    */
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    //FLAW: Actually affects the array persons refers to: const persons = this.state.persons
    //Affects a copy of the original array: const persons = this.state.persons.slice();
    //Below is the same as above, only the copy is being affected
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            // click={this.deletePersonHandler.bind(this, index)}
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Hide names</button>
          
        {persons}

{/*         {this.state.showPersons ? 
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Max!')}
              changed={this.nameChangeHandler} >
              My hobbies: Racing
          </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age} />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null} */}
      </div>
    );
  }
}

export default App;
