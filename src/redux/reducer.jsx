const fetchReducer = (state = [], action) => {
    switch(action.type){
        case "FETCHDATA":
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default fetchReducer;