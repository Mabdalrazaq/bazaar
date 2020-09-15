import * as actionTypes from './actionTypes';
import serverBase from './serverBase';
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

export const sellItem=id=>async dispatch=>{
    const response = await fetch(serverBase+'/items/'+id+'?'+new URLSearchParams({
        sell: true
    }),
    {
        method: 'PUT',
    })
    const jsonResponse= await response.json();
    console.log(jsonResponse);
    dispatch({
        type: actionTypes.SELL_ITEM,
        payload: id
    })
}


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

export const removeItem=id=>async dispatch=>{
    await fetch(serverBase+'/items/'+id,{
        method: 'DELETE',
    })
    dispatch({
        type:actionTypes.REMOVE_ITEM,
        payload: id
    });
}

export const editItem=(sent)=>async dispatch=>{
    const id=sent.id
    const data={
        name:sent.name,
        price:sent.price,
        description: sent.description
    }
    const response = await fetch(serverBase+'/items/'+id,{
        headers: {
            'Content-Type': 'application/json'
        },      
        method: 'PUT',
        body: JSON.stringify(data)
    })
    const jsonResponse= await response.json();
    console.log(jsonResponse);
    const changes=jsonResponse.Attributes;
    dispatch({
        type: actionTypes.EDIT_ITEM,
        payload:{
            changes,
            id
        }
    });
}


export const toggleEditingModal=()=>({
    type: actionTypes.TOGGLE_EDITING_MODAL
})

export const addItem=(tableId,values)=>async dispatch=>{
    const data={
        item:{...values}
    }
    data.item.image='images/new.png';
    data.item.available=true;
    data.item.tableId=tableId

    const response = await fetch('http://localhost:4001/api/items',{
      headers: {
        'Content-Type': 'application/json'
      },
        method: 'POST',
        body: JSON.stringify(data)
    })
    const jsonResponse= await response.json();
    console.log(jsonResponse);
    data.item.id=jsonResponse.id;
    dispatch({
        type:actionTypes.ADD_ITEM,
        payload: data.item
    })
}

export const addTables=tables=>({
    type: actionTypes.ADD_TABLES,
    payload: tables
})

export const addItems=items=>({
    type: actionTypes.ADD_ITEMS,
    payload: items
})

export const tablesFailed=errMess=>({
    type: actionTypes.TABLES_FAILED,
    payload: errMess
})

export const itemsFailed=errMess=>({
    type: actionTypes.ITEMS_FAILED,
    payload: errMess
})

export const itemsLoading=()=>({
    type: actionTypes.ITEMS_LOADING
})
export const tablesLoading=()=>({
    type: actionTypes.TABLES_LOADING
})

export const fetchTables=()=>async dispatch=>{
    dispatch(tablesLoading());
    try{
        const response= await fetch(serverBase+'/tables');
        const tables=await response.json();
        if(response.status>=400)
            throw new Error('status code > 400');
        dispatch(addTables(tables));
        dispatch(startCarouselAnimating(tables.length));
        dispatch(startCarouselIndex(tables.length));
        
    }catch(err){
        console.log(err);
        dispatch(tablesFailed(err.message));
    }
}

export const fetchItems=()=>async dispatch=>{
    dispatch(itemsLoading());
    try{
        const response= await fetch(serverBase+'/items');
        const items=await response.json();
        if(response.status>=400)
            throw new Error('status code > 400');
        dispatch(addItems(items));
    }catch(err){
        console.log(err);
        dispatch(itemsFailed(err.message));
    }
}
