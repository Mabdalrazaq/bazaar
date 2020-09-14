import * as actionTypes from './actionTypes';
import {tables} from '../db/db';

const carouselAnimating=(state=new Array(tables.length).fill(false),action)=>{
    switch(action.type){
        case actionTypes.SET_ANIMATING:
            const newState=state.slice(0);
            newState[action.payload.index]=action.payload.bool
            return newState;
        default:
            return state;
    }
}

export default carouselAnimating;