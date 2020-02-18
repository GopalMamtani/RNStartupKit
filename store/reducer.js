const intialState = {
    age: 21
  };
  
  const ageReducer = (state = intialState, action) => {
    switch (action.type) {
      case "AGE_UP":
        return {
          ...state,
          age: state.age + 1
        };
  
      case "AGE_DOWN":
        return {
          ...state,
          age: state.age - 1
        };
  
      default:
        return state;
    }
  };
  
  export default ageReducer;
  