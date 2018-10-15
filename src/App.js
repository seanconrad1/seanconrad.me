import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent'
import Navbar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App"  style={{
          backgroundColor: 'white',
          minHeight: window.innerHeight / 2,
          minWidth: window.innerWidth,
        }}>

        </div>
        <div className="App"  style={{
          backgroundColor: 'black',
          minHeight: window.innerHeight / 2,
          minWidth: window.innerWidth,
        }}>
        <Header/>
        <Navbar/>
        </div>
      </div>
    )
  }
}

export default App;
