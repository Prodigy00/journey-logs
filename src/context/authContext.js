import createDataContext from "./createDataContext";

//reducer
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// actions

//export Prov and Ctxt
export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
