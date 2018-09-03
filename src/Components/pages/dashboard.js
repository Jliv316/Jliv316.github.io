import React, { Component } from 'react';
import Location from '../locationComponent/location';
import { getQueryParams } from '../../utils';
import Logout from '../logoutComponent/logout';

class Dashboard extends Component {
  constructor(props){
    super(props);
    const params = getQueryParams();
    this.state = { token: params.token }
  }
  render() {
    return (
      <div className="homeContainer">
        <div className="pimg1">
          <div className="ptext">
            <span className="border trans">
              <div className="Login-buttons">
                <Location token={this.state.token} />
                <Logout token={this.state.token} />
              </div>
              </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;