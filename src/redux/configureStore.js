import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from './auth';
import { Register } from './register';
import {PostItems} from './postItems';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth:Auth,
            register:Register,
            postItems: PostItems

        }),
        applyMiddleware(thunk, logger)
    );
    return store;
} 