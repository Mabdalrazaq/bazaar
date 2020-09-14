import * as actionTypes from './actionTypes';
import {itemsDB} from '../db/db';

const items=(state=itemsDB,action)=>{
    let values
    let item;
    let newState;
    switch(action.type){
        case actionTypes.ADD_ITEM:
            item={...action.payload.values};
            item.id=state[state.length-1].id+1;
            item.image='images/new.png';
            item.available=true;
            item.tableId=action.payload.tableId;
            return state.concat(item);
        case actionTypes.EDIT_ITEM:
            values=action.payload.values;
            item={...state.find(item=>item.id===action.payload.id)};
            item.name=values.name;
            item.price=values.price;
            if(values.description!==undefined)
                item.description=values.description;
            newState=state.slice(0);
            newState.splice(action.payload.id,1,item);
            return newState;
        case actionTypes.SELL_ITEM:
            newState=state.slice(0);
            item=newState.find(item=>item.id===action.payload);
            item.available=false;
            return newState;
        case actionTypes.REMOVE_ITEM:
            newState=state.slice(0);
            newState.splice(action.payload,1);
            return newState;
        default:
            return state;
    }
}

export default items;