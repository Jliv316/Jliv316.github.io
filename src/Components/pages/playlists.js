import React, { Component } from 'react';
import Playlist from '../playlistComponent/Playlist';
import { getQueryParams } from '../../utils';

class Playlists extends Component {
  constructor(props) {
    super(props);
    const params = getQueryParams();
    this.state = { token: params.token }
    debugger;
  }
  render() {
    return (
      <div className="homeContainer">
        <div className="pimg1">
          <div className="ptext">
              <span className="border trans">
                Your Personal Playlists!!
              </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>Section One</h2>
          <p>
            <Playlist token={this.state.token} />
          </p>
        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border trans">
              Image Two Text
            </span>
          </div>
        </div>
      </div>
    );
  }
}


export default Playlists;