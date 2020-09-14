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
            return state.map(item=>{
                if(item.id!==action.payload.id)
                    return item;
                else{
                    console.log(item);
                    const newItem={...item};
                    newItem.name=values.name;
                    newItem.price=values.price;
                    if(values.description!==undefined)
                        newItem.description=values.description;
                    return newItem;
                    }
            });
        case actionTypes.SELL_ITEM:
            return state.map(item=>{
                if(item.id===action.payload)
                    return {...item,available: false}
                else 
                    return item;
            })
        case actionTypes.REMOVE_ITEM:
            return state.filter(item=>item.id!==action.payload)
        default:
            return state;
    }
}

export default items;