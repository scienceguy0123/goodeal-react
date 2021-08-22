import * as ActionTypes from './actionTypes';

export const Items = ( state = {
    isLoading: false,
    items : [],
    errMess : null
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ITEM:
            let item = action.payload;
            return {...state,items:state.items.concat(item), errMess: null};

        case ActionTypes.ITEM_FAILED:
            return {...state, isLoading:false, items:state.items, errMess:action.payload};

        default:
            return state
    }
}