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
    // .then(response => {
    //     if (response.ok) {
    //         console.log(response);
    //         return response;
    //     } else {
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //     }
    //     },
    //     error => {
    //         throw error;
    //     })
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
            console.log(response);
            var error = new Error('Error ' + response.err.message);
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
    // .then(response => {
    //     if (response.ok) {
    //         // console.log(response);
    //         return response
    //     } else {
    //         console.log(response);
            
    //         var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         throw error;
    //     }
    //     },
    //     error => {
    //         throw error;
    //     }
    // )
    .then(response => response.json())
    .then(response => {
        if (response.success){
            console.log(response);
            dispatch(receiveRegister(response));
        }else{
            console.log(response);
            let error = new Error('Error: ' + response.err.message);
            error.response = response;
            throw error;
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


export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout())
}


export const postItem = (info) => (dispatch) => {
    return fetch(baseUrl + 'items', {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }

        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(info => dispatch(addPostItem(info)))
        .catch(error => {
            dispatch(postItemFailed(error.message));
            alert('Your item could not be posted \nError: ' + error.message); })
}

export const addPostItem = (info) => ({
    type: ActionTypes.ADD_POST_ITEM,
    payload: info
});

export const postItemFailed = (errMess) => ({
    type: ActionTypes.POST_ITEM_FAILED,
    payload: errMess
})


export const uploadImages = (images) => ({
    type: ActionTypes.UPLOAD_IMAGE,
    payload: images
})