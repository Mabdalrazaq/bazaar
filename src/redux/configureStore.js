import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import carouselAnimating from './carouselAnimating';
import carouselActiveIndex from './carouselActiveIndex';
export const configureStore=()=>{
    const store=createStore(
        combineReducers({
            carouselAnimating,
            carouselActiveIndex
        }),
        applyMiddleware(thunk,logger)
    )
    return store;
}