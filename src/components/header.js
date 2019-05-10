import React, { Component } from "react";
import "./header.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faYoutube, faInstagram, faFacebookF);

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="vw-top-bar">
          <div className="container">
            <div className="row2">
              <div className="col-sm-12">
                <div className="vw-top-bar-left">
                  <nav className="vw-menu-top-wrapper">
                    <ul
                      style={{
                        margin: "0px",
                        padding: "0px"
                      }}
                      className="vw-menu vw-menu-location-top vw-menu-type-text clearfix sf-js-enabled sf-arrows"
                    >
                      <li className="utility-link">
                        <a
                          className="utility-linka"
                          href="https://silviurdr.github.io/my-concerts-archive/#/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="utility-link">
                        <a className="utility-linka" href="/timeline">
                          Timeline
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="vw-top-bar-right">
                  <span className="social">
                    <a className="social-link">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="social-link">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a className="social-link">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a className="social-link-facebook">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header">
          <img className="header-image" />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
