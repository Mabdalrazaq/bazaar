import React from 'react';

function Buy (props){
    console.log(props);
    return <h1>Buy item{props.location.search}</h1>
}

export default Buy;