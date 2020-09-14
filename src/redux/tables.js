import * as actionTypes from './actionTypes';
import {tablesDB} from '../db/db';

const tables=(state=tablesDB,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default tables;