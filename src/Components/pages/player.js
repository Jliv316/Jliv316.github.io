import React, { Component } from 'react';
import Playlist from '../playlistComponent/Playlist';
import PlayerService from '../playerComponent/playerService';
import { getQueryParams } from '../../utils';

class Player extends Component {
  constructor(props) {
    super(props);
    const params = getQueryParams();
    this.state = { 
      token: params.token,
      access_token: 'BQDwPYe2UpdMiPbkD8QnxOhvlRiNbVVt9wd0tzSWBMq2_0iEwuahhql486sme3F3jiHB7YbvFBm7QPl0J3h38Y2WH-wdMtrKoTQstoU06tJfPfnQoFN_STn4N75rx363WkEg-MmrrrrxdQqhRLgR7gIQCfZR'
    };
    this.playerCheckInterval = null;
  }

  render() {
    return (
      <PlayerService token={this.state.token} />
    );
  }
}

export default Player;
