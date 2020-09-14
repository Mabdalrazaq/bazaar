import * as actionTypes from './actionTypes';

export const carouselNext=(length,index)=>({
    type: actionTypes.CAROUSEL_NEXT,
    payload:{
        index,
        length
    }
})

export const carouselPrev=(length,index)=>({
    type: actionTypes.CAROUSEL_PREV,
    payload:{
        index,
        length
    }
})

export const setAnimating=(bool,index)=>({
    type: actionTypes.SET_ANIMATING,
    payload:{
        index,
        bool
    }
})
