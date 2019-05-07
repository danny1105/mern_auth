import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        // Applying Authorization Header to every request if logged in
        axios.defaults.headers.common["Authorization"] = token;
    } else {
        // Delete Auth Header
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;