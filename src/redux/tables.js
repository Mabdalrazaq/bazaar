import * as actionTypes from './actionTypes';

const tables=(state={
    tables:[],
    isLoading:true,
    errMess: null
    },action)=>{
    switch(action.type){
        case actionTypes.TABLES_LOADING:
            return {...state,isLoading: true}
        case actionTypes.TABLES_FAILED:
            return {...state,isLoading: false,errMess: action.payload}
        case actionTypes.ADD_TABLES:
            return {...state,tables:action.payload,isLoading: false,errMess:null}
        default:
            return state;
    }
}

export default tables;