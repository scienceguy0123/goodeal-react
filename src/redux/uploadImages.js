import * as ActionTypes from './actionTypes';

export const UploadImages = (state ={
    images:[]
}, action) => {
    switch(action.type) {
        case ActionTypes.UPLOAD_IMAGE:
            return {...state,
                images:state.images.concat(action.payload)
            };

            default:
                return state
    }
}
