import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
// import SpotifyIcon from './SpotifyIcon';

class GeoButton extends Component {
  render() {
    return (
      <Button onClick={this.props.onClick}>
        Get My Location
      </Button>
    );
  }
}

export default GeoButton;