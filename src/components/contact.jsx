import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          
          <div className="container">

            <div className="col-md-8">
              <div className="row">
                <h1>Get in touch
                  <i className="fa fa-phone-square"></i>&nbsp;
                  <i className="fa fa-envelope"></i>&nbsp;
                  <i className="fa fa-map-marker"></i>
                </h1>
              </div>
              <div className="row">
                <h1>Follow us on
                  &nbsp;
                  <a aria-label="facebook" href="https://www.facebook.com/SLDElectrical.ie/" className="fa fa-facebook social-media-icon"></a>&nbsp;
                  <a aria-label="linkedin" href="https://www.linkedin.com/in/sean-deery-7b1616209/?originalSubdomain=ie" className="fa fa-linkedin social-media-icon"></a>&nbsp;
                  <a aria-label="instagram" href="https://www.instagram.com/sldelectrical.ie" className="fa fa-instagram social-media-icon"></a>&nbsp;
                </h1>
              </div>
              <div className="row">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSLDElectrical.ie%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="340" height="500"  scrolling="no" frameBorder="0"
                    allowFullScreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                </iframe>
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
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; SLD Electrical-Engineered by Anya Technologies Ltd - https://www.anyatechnologies.ie/
 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
