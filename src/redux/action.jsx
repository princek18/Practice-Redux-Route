import axios from "axios";

const fetchData = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            dispatch({
                type: "FETCHDATA",
                payload:response.data
            })
        })
    }
}

export default fetchData;