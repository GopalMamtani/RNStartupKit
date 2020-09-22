const initialState = {
    apiCallStatus: '',
    apiData: {},
    error: null
}

const userReducer = (state =initialState , action) => {
    switch (action.type) {
      case "USER_DATA_API_REQUEST":
        return {
          ...state,
          apiCallStatus:'request'
        };
  
      case "USER_DATA_API_SUCCESS":
        return {
          ...state,
          apiCallStatus:'success',
          apiData: action.payload
        };
  
        case "USER_DATA_API_FAILURE":
        return {
          ...state,
          apiCallStatus:'failure',
          error:action.error
        };

      default:
        return state;
    }
  };
  
  export default userReducer;