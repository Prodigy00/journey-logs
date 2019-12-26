import createDataContext from "./createDataContext";

//reducer
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// actions
const signUp = dispatch => ({ email, password }) => {};

const signIn = dispatch => ({ email, password }) => {};

const signOut = dispatch => () => {};

//export Prov and Ctxt
export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { isSignedIn: false }
);
