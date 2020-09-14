import * as actionTypes from './actionTypes';

const confirmModalOpen=(state=false,action)=>{
    switch(action.type){
        case actionTypes.TOGGLE_CONFIRM_MODAL:
            return !state;
        default:
            return state;
    }
}

export default confirmModalOpen;