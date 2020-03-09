import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      {username : 'rachita'},
      {username : 'rashi'},
      {username : 'rashu'}
    ]
  };
  switchUserhandler = () => {
    this.setState({
      usernames: [
        {username : 'Rachita'},
        {username : 'Rashi'},
        {username : 'Rashu'}
      ]
    });
  };
  inputChangedhandler = (event) => {
    this.setState({
      usernames: [
        {username : 'Rachita!'},
        {username : event.target.value},
        {username : 'Rashu!'}
      ]
    });
  };

  style = {
    backgroundColor: 'lightgrey',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 1 - The Base Syntax</h1>
        <hr></hr>
        <UserInput changed={this.inputChangedhandler} username = {this.state.usernames[1].username}/>
        <button onClick={this.switchUserhandler} style={this.style}>Switch User</button>
        <UserOutput username = {this.state.usernames[0].username}/>
        <UserOutput username = {this.state.usernames[1].username}/>
        <UserOutput username = {this.state.usernames[2].username}/>
      </div>
    );
  }
}

export default App;
