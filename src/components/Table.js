import React from 'react';

function Table (props){
    return <h1>{props.match.params.tableId}</h1>
}

export default Table;