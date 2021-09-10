import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function UserName({Data}) {
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

const mapStateToProps = (state) => {
    return {
        Data: state
    }
}

export default connect(mapStateToProps)(UserName)