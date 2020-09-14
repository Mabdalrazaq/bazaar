import * as actionTypes from './actionTypes';

const itemBeingProcessed=(state={
    itemId: -1,
    tableId: -1
},action)=>{
    switch(action.type){
        case actionTypes.PREPARE_ITEM:
            return {...state, itemId: action.payload.itemId, tableId: action.payload.tableId}
        default:
            return state;
    }
}

export default itemBeingProcessed;