import React, { Component } from "react";
import logo from '../logo.jpg';

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    <span><img src={logo_resized} className="App-logo col-md-12 col-xs-12" alt="logo_resized" /></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#about"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{"  "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
