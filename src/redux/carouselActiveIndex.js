import * as actionTypes from './actionTypes';
import {tables} from '../db/db';

const carouselActiveIndex=(state=new Array(tables.length+1).fill(0),action)=>{
    let newState=[]
    switch(action.type){
        case actionTypes.CAROUSEL_NEXT:
            newState=state.slice(0);
            newState[action.payload.index]= newState[action.payload.index] === action.payload.length - 1 ? 0 : newState[action.payload.index] + 1;
            return newState;
        case actionTypes.CAROUSEL_PREV:
            newState=state.slice(0);
            newState[action.payload.index]= newState[action.payload.index] === 0 ? action.payload.length-1 : newState[action.payload.index] - 1;
            return newState;
        default:
            return state;
    }
}

export default carouselActiveIndex;