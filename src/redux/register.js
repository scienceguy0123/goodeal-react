import * as ActionTypes from './actionTypes';

export const Register = (  state = {
    isLoading: false,
    user:null,
    errMess: null
}, action) => {
    switch(action.type) {
        case ActionTypes.REGISTER_REQUEST:
            return {...state,
                isLoading: true,
                isAuthenticated: false,
                errMess:null,
                user: action.creds
            };
        case ActionTypes.REGISTER_SUCCESS:
            return {...state,
                isLoading: false,
                isAuthenticated: true,
                errMess: null,
                token: action.token
            };
        case ActionTypes.REGISTER_FAILURE:
            return {...state,
                isLoading: false,
                isAuthenticated: false,
                errMess: action.message
            };
        default:
            return state
    }
}