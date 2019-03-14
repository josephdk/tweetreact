import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import TweetStream from './components/TweetStream/TweetStream';
import Copyright from './components/Copyright/Copyright';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <div className="main-grid">
            <Profile />
            <TweetStream />
            <Copyright />
          </div>
        </div>
        {/* <SignIn />
        <Register /> */}
        
      </div>
    );
  }
}

export default App;
