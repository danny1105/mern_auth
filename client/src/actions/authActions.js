import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios 
        .post("/api/users/register", userData)
        .then(res => history.push("/login"))  // redirect to login on successful register
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login - get User token
export const loginUser = userData => dispatch => {
    axios
        .post("/api/users/login", userData)
        .then(res => {
            console.log(res);
            // Save to local storage
            // Set token to local storage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set Token to Auth HEader
            setAuthToken(token);
            // Decode token to get User data
            const decoded = jwt_decode(token);
            // Set current User
            dispatch(setCurrentUser(decoded)); 
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        );
};

// Set logged in User
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User loading
export const setUserLoading = () => {
    return {
      type: USER_LOADING
    };
};

// Log User out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove Auth header from future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};