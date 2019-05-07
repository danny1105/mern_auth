/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh"}} className="container valign-wrapper">
          <div className="row">
             <div className="col s12 center-align">
                <h4>
                    <b>Build</b> a login/auth app with the{" "}
                    <span style={{ fontFamily: "monospace"}}>MERN</span> from scratch
                </h4>
                <p className="flow-text grey-text text-darken-1">
                  Created a minimal Authentication App with MERN stack
                </p>
                <br />
                <a style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                <Link to="/register">
                Register
                </Link>
                </a>
                <a style={{
                    marginLeft: "2rem",
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect white hoverable black-text"
                >
                <Link to="/login">
                Log In
                </Link>
                </a>
             </div>
          </div>
      </div>
    );
  }
}

export default Landing;
