import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const ADD_ERROR = "ADD_ERROR";
const SIGN_UP = "SIGN_UP";
const SIGN_IN = "SIGN_IN";
const CLEAR_ERROR = "CLEAR_ERROR";
const SIGN_OUT = "SIGN_OUT";
//reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { errorMessage: "", token: action.payload };
    case SIGN_IN:
      return { errorMessage: "", token: action.payload };
    case SIGN_OUT:
      return { token: null, errorMessage: "" };
    case ADD_ERROR:
      return { ...state, errorMessage: action.payload };
    case CLEAR_ERROR:
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

// actions
const signUp = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    // console.log({ response: response.data });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: SIGN_UP, payload: response.data.token });

    //navigate to main flow or tracklist
    navigate("TrackList");
  } catch (error) {
    // console.log(error.response.data);
    dispatch({ type: ADD_ERROR, payload: "Something went wrong with sign up" });
  }
};

const signIn = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: SIGN_IN, payload: response.data.token });
    navigate("TrackList");
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: ADD_ERROR, payload: "Something went wrong with sign in" });
  }
};

const clearErrorMsg = dispatch => () => {
  dispatch({ type: CLEAR_ERROR });
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: SIGN_IN, payload: token });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

const signOut = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: SIGN_OUT });

  navigate("loginFlow");
};

//export Prov and Ctxt
export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut, clearErrorMsg, tryLocalSignin },
  { token: null, errorMessage: "" }
);
