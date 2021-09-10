import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import fetchData from '../redux/action';
import { connect } from 'react-redux';

function MainComponentConnet({Data, fetchData}) {
    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div>
            <h1>Main Component using Connect!</h1>
            <Link to="/username"><h2>Goto UserName</h2></Link>
            {Data.map((one) => {
                return <Link key={one.id} to={{pathname:`/userdetail/${one.id}`, state:{one}}}><h3>{one.name}</h3></Link>
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        Data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchData: () => dispatch(fetchData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainComponentConnet)