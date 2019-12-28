import createDataContext from "./createDataContext";

const ADD_CURRENT_LOCATION = "ADD_CURRENT_LOCATION";
const START_RECORDING = "START_RECORDING";
const STOP_RECORDING = "STOP_RECORDING";
const ADD_LOCATION_TO_LOC_ARRAY = "ADD_LOCATION_TO_LOC_ARRAY";
const CHANGE_TRACK_NAME = "CHANGE_TRACK_NAME";
const locationReducer = (state, action) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case START_RECORDING:
      return { ...state, recording: true };
    case STOP_RECORDING:
      return { ...state, recording: false };
    case ADD_LOCATION_TO_LOC_ARRAY:
      return { ...state, locations: [...state.locations, action.payload] };
    case CHANGE_TRACK_NAME:
      return { ...state, name: action.payload };
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

const addLocation = dispatch => (location, recording) => {
  dispatch({ type: ADD_CURRENT_LOCATION, payload: location });
  if (recording) {
    dispatch({ type: ADD_LOCATION_TO_LOC_ARRAY, payload: location });
  }
};

const changeTrackName = dispatch => name => {
  dispatch({ type: CHANGE_TRACK_NAME, payload: name });
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
