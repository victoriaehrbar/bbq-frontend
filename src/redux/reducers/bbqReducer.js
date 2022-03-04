function bbqReducer(state = { all: [] }, action) {
    switch (action.type) {
      case "FETCH_BBQS_SUCCESS":
        return { ...state, all: action.payload };
  
      case "CREATE_BBQ_SUCCESS":
        return { ...state, all: [...state.all, action.payload] };
      default:
        return state;
    }
  }
  
  export default bbqReducer;