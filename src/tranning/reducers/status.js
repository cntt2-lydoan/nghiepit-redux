var initialState = true;

var myReducer = (state= initialState, action) => {
    if(action.type === "TOGGLE_STATUS"){
        state =!state;
    }
    
    return state;
}
 export default myReducer;