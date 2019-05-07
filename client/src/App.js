import React, { Component } from 'react';
import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep User logged In
if(localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and expiry 
  const decoded  =  jwt_decode(token);
  // Set USer and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired Token
  const currentTime = Date.now() / 1000; // to get in miliseconds
  if(decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());
    //Redirect To login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
      </Router>
      </Provider>
    );
  }
}

export default App;