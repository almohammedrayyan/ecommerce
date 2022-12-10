const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        currentUser: true,
      };
    }

    default:
      return state;
  }
};
export default AuthReducer;
