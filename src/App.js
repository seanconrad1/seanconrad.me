import React, { Component } from 'react';
import './App.css';
import header from './components/HeaderComponent'

class App extends Component {
  render() {
    return (
    <center>
      <div className="App"  style={{
        backgroundColor: 'white'
      }}>Sean Conrad
          <ul>
            <li><a href="https://github.com/seanraad123" target="blank">code</a></li>
            <li><div className="dot"/></li>
            <li><a href="https://www.linkedin.com/in/sean-conrad-42375ab4/" target="blank">linkedin</a> </li>
            <li><div className="dot"/></li>
            <li><a href="https://www.youtube.com/channel/UCLIBeUsRF7y8ujq8NsDm7vw?view_as=subscriber" target="blank">skateboarding</a> </li>
            <li><div className="dot"/></li>
            <li><a href="mailto:seanconrad123@gmail.com">contact</a></li>
          </ul>
      </div>
    </center>
    );
  }
}

export default App;
