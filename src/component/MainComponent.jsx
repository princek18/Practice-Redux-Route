import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import fetchData from '../redux/action'

export default function MainComponent() {
    const Data = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    return (
        <div>
            <h1>Main Component!</h1>
            <Link to="/username"><h2>Goto UserName</h2></Link>
            {Data.map((one) => {
                return <Link key={one.id} to={{pathname:`/userdetail/${one.id}`, state:{one}}}><h3>{one.name}</h3></Link>
            })}
        </div>
    )
}
