import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const ADD_ERROR = "ADD_ERROR";
//reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

// actions
const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    console.log({ response: response.data });
  } catch (error) {
    // console.log(error.response.data);
    dispatch({ type: ADD_ERROR, payload: "Something went wrong with sign up" });
  }
};

const signIn = dispatch => ({ email, password }) => {};

const signOut = dispatch => () => {};

//export Prov and Ctxt
export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { isSignedIn: false, errorMessage: "" }
);
