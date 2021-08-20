import * as ActionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            console.log(response);
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            console.log(response);
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}


export const registerUser = (creds) => (dispatch) => {
    dispatch(requestRegister(creds))

    return fetch(baseUrl + 'users/register', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            console.log(response);
            return response
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        }
    )
    .then(response => response.json())
    .then(response => {
        if (response.success){
            console.log(response);
            dispatch(receiveRegister(response));
        }
    })
    .catch(error => dispatch(registerError(error.message)))
}

export const requestRegister = (creds) => {
    return {
        type: ActionTypes.REGISTER_REQUEST,
        creds
    }
}
  
export const receiveRegister = (response) => {
    return {
        type: ActionTypes.REGISTER_SUCCESS,
        token: response.token
    }
}
  
export const registerError = (message) => {
    return {
        type: ActionTypes.REGISTER_FAILURE,
        message
    }
}