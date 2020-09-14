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

export const startCarouselAnimating=length=>({
    type:actionTypes.START_CAROUSEL_ANIMATING,
    payload: length
})

export const startCarouselIndex=length=>({
    type: actionTypes.START_CAROUSEL_INDEX,
    payload: length
})

export const sellItem=id=>({
    type: actionTypes.SELL_ITEM,
    payload: id
})

export const toggleConfirmModal=()=>({
    type : actionTypes.TOGGLE_CONFIRM_MODAL
})

export const toggleConfirmedModal=()=>({
    type: actionTypes.TOGGLE_CONFIRMED_MODAL
})

export const prepareItem=id=>({
    type: actionTypes.PREPARE_ITEM,
    payload:id
})

export const removeItem=id=>({
    type: actionTypes.REMOVE_ITEM,
    payload:id
})

export const editItem=(id,values)=>({
    type: actionTypes.EDIT_ITEM,
    payload: {
        id,
        values
    }
})

export const toggleEditingModal=()=>({
    type: actionTypes.TOGGLE_EDITING_MODAL
})

export const addItem=(tableId,values)=>({
    type: actionTypes.ADD_ITEM,
    payload: {
        tableId,
        values
    }
})