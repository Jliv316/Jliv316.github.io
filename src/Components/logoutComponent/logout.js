import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import axios from 'axios';
import LogoutButton from './logoutButton';
import Main from '../../Main';
// import SpotifyIcon from './SpotifyIcon';

class Logout extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    <Redirect to='/Products' />
    // document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  }


  render() {
    return (
      <div>
        <LogoutButton onClick={this.handleClick} />
        <Route exact path='/' component={Main} />
      </div>
    );
  }
}

export default Logout;