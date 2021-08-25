import * as ActionTypes from './actionTypes';

export const Items = (state = {
        isLoading: true,
        errMess: null,
        items: [],
        
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ITEMS:
            return {...state, isLoading: false, errMess: null, items: state.items.concat(action.payload)};

        case ActionTypes.ITEMS_LOADING:
            return {...state, isLoading: true, errMess: null, items: []};

        case ActionTypes.ITEMS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, items: []};

        default:
            return state;
    }
}