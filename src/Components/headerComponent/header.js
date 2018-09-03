import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <header>

        <div className = 'logo'>
          ListenApp
        </div>

        <nav>
          <ul>
            <li className="first">
              {this.props.token ? <Link to='/Dashboard'>Dashboard</Link> : <Link to='/'>Home</Link> }
            </li>
            <li>
              <Link to={'/Playlists?token=' + this.props.token}>Playlists</Link>
            </li>
            <li>
              <Link to={'/Party?token=' + this.props.token}>Party</Link>
            </li>
            <li>
              <Link to={'/Player?token=' + this.props.token}>Player</Link>
            </li>
            <li className="last">
              {this.props.token ? <Link to='/'>Logout</Link> : <Link to='/'>Log In</Link>}
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
