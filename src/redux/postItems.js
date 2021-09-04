import * as ActionTypes from './actionTypes';

export const PostItems = ( state = {
    isLoading: false,
    items : [],
    errMess : null
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_POST_ITEM:
            let item = action.payload;
            return {...state, isLoading:false, items:state.items.concat(item), errMess: null};

        case ActionTypes.POST_ITEM_FAILED:
            return {...state, isLoading:false, items:state.items, errMess:action.payload};

        case ActionTypes.LOAD_POST_ITEM:
            return {...state, isLoading:true, items:state.items, errMess: null};

        default:
            return state
    }
}