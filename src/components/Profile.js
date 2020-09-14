import React from 'react';

function Profile (props){
    return <h1>{props.match.params.userId}</h1>
}

export default Profile;