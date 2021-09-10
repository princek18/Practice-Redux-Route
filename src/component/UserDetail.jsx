import React from 'react'
import { Link } from 'react-router-dom';

export default function UserDetail(props) {
    const {one} = props.location.state;
    return (
        <div>
            <h1>User Details!</h1>
            <Link to="/"><h2>Goto MainComponenet</h2></Link>
            <h3>{one.name}</h3>
            <h3>{one.username}</h3>
            <h3>{one.email}</h3>
            <h3>{one.address.city}</h3>
            <h3>{one.phone}</h3>
            <h3>{one.website}</h3>
        </div>
    )
}
