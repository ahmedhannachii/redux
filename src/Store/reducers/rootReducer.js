const initialState ={
  number:0
}
const rootReducer = (state = initialState, action)=> {
  switch (action.type) {
      case "ADD_NUMBER":
        return {number: state.number+1};
      case "SUB_NUMBER":
        return {number: state.number-1};
      default:
        return state;
    }
  };
  
  export default rootReducer