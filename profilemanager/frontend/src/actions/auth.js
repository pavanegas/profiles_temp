import axios from 'axios';
import { returnErrors } from './messages'

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types'

//Check the tokens and load the user. 
export const loadUser = () => (dispatch, getState) => {
    //Set user loading first.
    dispatch({ type: USER_LOADING });

    //Grab the token
    const token = getState().auth.token;

    //Send headers with request using axios.
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    //If token's good, add headers to the config.
    if(token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios.get('/api/auth/user', config)
    .then(res =>{
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
}

//Login
export const login = (username, password) => dispatch => {
    //Send headers with request using axios.
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    //Request body.
    const body = JSON.stringify({ username, password });

    axios.post('/api/auth/login', body, config)
    .then(res =>{
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: LOGIN_FAIL
        });
    });
}

//Logout