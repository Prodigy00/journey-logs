import createDataContext from "./createDataContext";

const ADD_CURRENT_LOCATION = "ADD_CURRENT_LOCATION";
const START_RECORDING = "START_RECORDING";
const STOP_RECORDING = "STOP_RECORDING";
const locationReducer = (state, action) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case START_RECORDING:
      return { ...state, recording: true };
    case STOP_RECORDING:
      return { ...state, recording: false };
    default:
      return state;
  }
};

const startRecording = dispatch => () => {
  dispatch({ type: START_RECORDING });
};

const stopRecording = dispatch => () => {
  dispatch({ type: STOP_RECORDING });
};

const addLocation = dispatch => location => {
  dispatch({ type: ADD_CURRENT_LOCATION, payload: location });
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  {
    recording: false,
    locations: [],
    currentLocation: null
  }
);
