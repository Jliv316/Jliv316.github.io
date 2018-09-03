import React, { Component } from 'react';
import Home from './Components/homeComponent/home';
import Dashboard from './Components/pages/dashboard';
import { getQueryParams } from './utils';

class Main extends Component {
  constructor() {
    super();
    const params = getQueryParams();
    this.state = { token: params.token }
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  checkForPlayer() {
    const { token } = this.state;

    if (window.Spotify !== null) {
      this.player = new window.Spotify.Player({
        name: "Matt's Spotify Player",
        getOAuthToken: cb => { cb(token); },
      });
      // this.createEventHandlers();

      // finally, connect!
      this.player.connect();
    }
  }


  render() {
    let page = this.state.token ? <Dashboard token={this.state.token}/> : <Home />; 
    return (
        <div>{page}</div>
    );
  }
}

export default Main;
