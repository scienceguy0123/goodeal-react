import * as ActionTypes from './actionTypes';

export const Register = (  state = {
    isLoading: false,
    user:null,
    errMess: null,
    isRegistered: false
}, action) => {
    switch(action.type) {
        case ActionTypes.REGISTER_REQUEST:
            return {...state,
                isLoading: true,
                isRegistered: false,
                errMess:null,
                user: action.creds
            };
        case ActionTypes.REGISTER_SUCCESS:
            return {...state,
                isLoading: false,
                isRegistered: true,
                errMess: null,
                token: action.token
            };
        case ActionTypes.REGISTER_FAILURE:
            return {...state,
                isLoading: false,
                isRegistered: false,
                errMess: action.message
            };
        default:
            return state
    }
}