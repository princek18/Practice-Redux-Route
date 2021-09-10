import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


export default function UserName() {
    const Data = useSelector(state => state);
    return (
        <div>
            <h1>User Name!</h1>
            <Link to="/"><h2>Goto MainComponent</h2></Link>
            {Data.map((one) => {
                return <h3 key={one.id}>{one.username}</h3>
            })}
        </div>
    )
}
