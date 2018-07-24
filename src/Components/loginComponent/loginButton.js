import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
// import SpotifyIcon from './SpotifyIcon';


const authorizeUrl = 'https://accounts.spotify.com/authorize'
const clientId = 'd759774253a14825af09f813f6982145'
const scope = 'playlist-read-private user-read-private user-read-email user-library-read user-top-read playlist-read-private user-top-read user-read-birthdate'
const redirectURI = 'http://localhost:3166/auth/spotify/callback'
const responseType = "code"

class LoginButton extends Component {
  render() {
    return (
      <Button
        raised
        accent
        href={`${authorizeUrl}?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}&scope=${scope}`}
      >
        {/* <SpotifyIcon /> */}
        {' '}
        Login with Spotify
      </Button>
    );
  }
}

export default LoginButton;