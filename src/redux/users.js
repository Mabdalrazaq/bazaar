import * as actionTypes from './actionTypes';
import {usersDB} from '../db/db';

const users=(state=usersDB,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default users;