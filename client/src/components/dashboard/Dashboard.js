/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable react/no-typos */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

export class Dashboard extends Component {
  onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
  };
  
  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
            <div className="col s12 center-align">
                <h4>
                    <b>Hey, </b>{user.first_name}
                    <p className="flow-text grey-text text-darken-1">
                      You are logged into a full stack{" "}
                      <span style={{ fontFamily: "monospace"}}>MERN</span>app
                    </p>
                </h4>
                <button
                    style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"    
                    }}
                    onClick={this.onLogoutClick}
                    className="btn btn-large waves-effect waves-light hoverbale blue accent-3"                
                >
                Logout    
                </button>
            </div>
        </div>
      </div>
    );
  }
}

Dashboard.PropTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
     
