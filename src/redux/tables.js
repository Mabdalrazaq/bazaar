import * as actionTypes from './actionTypes';
import {tablesDB} from '../db/db';

const tables=(state=tablesDB,action)=>{
    let newState=[];
    let table;
    let item;
    let itemIndex;
    let values;
    let tableIndex;
    switch(action.type){
        case actionTypes.ADD_ITEM:
            item={...action.payload.values};
            tableIndex=state.findIndex(table=>table.id===action.payload.tableId);
            item.id=state[tableIndex].items.length+1;
            item.image='images/new.png';
            item.available=true;
            newState=state.slice(0);
            newState[tableIndex].items=newState[tableIndex].items.concat(item);
            return newState
        case actionTypes.EDIT_ITEM:
            values=action.payload.values;
            newState=state.slice(0);
            table=newState.find(table=>table.id===action.payload.tableId);
            itemIndex=table.items.findIndex(item=>item.id===action.payload.itemId);
            console.log(itemIndex);
            table.items[itemIndex].name=values.name;
            table.items[itemIndex].price=values.price;
            if(values.description!==undefined)
                table.items[itemIndex].description=values.description;
            return newState
        case actionTypes.REMOVE_ITEM:
            newState=state.slice(0);
            table=newState.find(table=>table.id===action.payload.tableId);
            itemIndex=table.items.findIndex(item=>item.id===action.payload.itemId);
            table.items.splice(itemIndex,1);
            return newState;
        case actionTypes.SELL_ITEM:
            newState=state.slice(0);
            table=newState.find(table=>table.id===action.payload.tableId);
            item=table.items.find(item=>item.id===action.payload.itemId);
            item.available=false;
            return newState;
        default:
            return state;
    }
}

export default tables;