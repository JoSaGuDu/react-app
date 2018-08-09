import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const user = {
      firstName: 'Cocosette',
      lastName: 'Silva',
      description: 'Es la coco bonita'
    };
    const userName =  (user) => `${user.firstName} ${user.lastName}`;
    const helloWorld = `Welcome ${userName(user)} to react learning road`;
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
      </div>
    );
  }
}

export default App;
