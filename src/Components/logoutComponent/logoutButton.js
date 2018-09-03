import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
// import SpotifyIcon from './SpotifyIcon';

class LogoutButton extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Button onClick={this.props.onClick}>
        Logout
      </Button>
    );
  }
}

export default LogoutButton;