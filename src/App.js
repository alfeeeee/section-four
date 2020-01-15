import React, { Component } from 'react';
import './App.css';

import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    "name": "please log in"
  }

  showNameHandler = (event) => {
    this.setState({
      "name" : event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.name}/>
        <UserInput name={this.state.name} changed={this.showNameHandler}/>
    </div>
    );
  }
}

export default App;
