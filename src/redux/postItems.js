import * as ActionTypes from './actionTypes';

export const PostItems = ( state = {
    isLoading: false,
    postItems : [],
    errMess : null
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_POST_ITEM:
            let item = action.payload;
            return {...state,items:state.postItems.concat(item), errMess: null};

        case ActionTypes.POST_ITEM_FAILED:
            return {...state, isLoading:false, items:state.postItems, errMess:action.payload};

        default:
            return state
    }
}