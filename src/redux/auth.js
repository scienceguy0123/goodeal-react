import * as ActionTypes from './actionTypes';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export const Auth = (state = {
        isLoading: false,
        isAuthenticated: localStorage.getItem('token') ? true : false,
        token: localStorage.getItem('token'),
        user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
        errMess: null
    }, action) => {
        switch(action.type) {
            case ActionTypes.LOGIN_REQUEST:
                return {...state,
                    isLoading: true,
                    isAuthenticated: false,
                    user: action.creds,
                    errMess: null
                };
            case ActionTypes.LOGIN_SUCCESS:
                return {...state,
                    isLoading: false,
                    isAuthenticated: true,
                    errMess: null,
                    token: action.token
                };
            case ActionTypes.LOGIN_FAILURE:
                return {...state,
                    isLoading: false,
                    isAuthenticated: false,
                    errMess: action.message
                };

            case ActionTypes.LOGOUT_REQUEST:
                return {...state,
                    isLoading: true,
                    isAuthenticated: true,
                    errMess: null
                };
            
            case ActionTypes.LOGOUT_SUCCESS:
                return {...state,
                    isLoading: false,
                    isAuthenticated: false,
                    token: '',
                    user: null,
                    errMess:null
                };
            
            case ActionTypes.LOGOUT_FAILURE:
                return {...state,
                    isLoading:false,
                    errMess:action.message
                };

            default:
                return state
        }
    }