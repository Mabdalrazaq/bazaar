import React from 'react';

function Sell (props){
    if(props.table!==undefined)
        return(
            <ul>
                 {props.table.items.map(item=><li>item {item.name} for the price {item.price}</li>)}
            </ul>
        )
    else
        return(
            <h1>Rent a table!</h1>
        )
}

export default Sell;