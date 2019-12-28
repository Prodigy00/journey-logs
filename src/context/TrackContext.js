import createDataContext from "./createDataContext";

const FETCH_TRACKS = "FETCH_TRACKS";
const CREATE_TRACK = "CREATE_TRACK";
const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};
const createTrack = dispatch => (name, locations) => {
  console.log({ name, locations: locations.length });
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
