import React, { Component } from 'react';

import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import TweetStream from './components/TweetStream/TweetStream';
import TweetField from './components/TweetField/TweetField';
import Copyright from './components/Copyright/Copyright';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <div className="main-grid">
            <Profile />
            <React.Fragment>
              <div className="grid-col test">
                <TweetField />
                <TweetStream tweets={this.state.tweets} />
              </div>
            </React.Fragment>
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
