import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          
          <div className="container">
        
            <div className="col-md-8">
              <div className="row">
              <h1>Get in touch  <i className="fa fa-phone-square"></i>&nbsp;<i className="fa fa-envelope"></i>&nbsp;<i className="fa fa-map-marker"></i></h1> 
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.instagram : "/"}
                      >
                        <i className="fa fa-fa-instagram"></i>
                      </a>
                    </li>
 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2021 SLD Electrical. 
 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
