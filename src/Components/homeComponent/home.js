import React, { Component } from 'react';

import LoginButton from '../loginComponent/loginButton';
import Location from '../locationComponent/location';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="pimg1">
          <div className="ptext">
            <span className="head_border">
              <div className="Login-buttons">
                <LoginButton />
              </div>
            </span>
          </div>
        </div>

        <section className="section section-light">
          <h2>Get our free app</h2>
          <p>
            Seamlessly listen to music you love. Download the ListenApp for your computer.
          </p>
        </section>

        <div className="pimg2">
          <div className="ptext">
            <span className="border trans">
            </span>
          </div>
        </div>

        <section className="section section-dark">
          <h2>Listen on the web</h2>
          <p>
            To play and share music without the app, all within your browser, go to play.ListenApp.com.
          </p>
        </section>

        <div className="pimg3">
          <div className="ptext">
            <span className="border trans">
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
