import * as actionTypes from './actionTypes';

const confirmedModalOpen=(state=false,action)=>{
    switch(action.type){
        case actionTypes.TOGGLE_CONFIRMED_MODAL:
            return !state;
        default:
            return state;
    }
}

export default confirmedModalOpen;