import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import carouselAnimating from './carouselAnimating';
import carouselActiveIndex from './carouselActiveIndex';
import tables from './tables';
import users from './users';

export const configureStore=()=>{
    const store=createStore(
        combineReducers({
            carouselAnimating,
            carouselActiveIndex,
            tables,
            users
        }),
        applyMiddleware(thunk,logger)
    )
    return store;
}