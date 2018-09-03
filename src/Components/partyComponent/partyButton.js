import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
// import SpotifyIcon from './SpotifyIcon';

class PartyButton extends Component {
  render() {
    return (
      <Button onClick={this.props.onClick}>
        Start a Party!
      </Button>
    );
  }
}

export default PartyButton;