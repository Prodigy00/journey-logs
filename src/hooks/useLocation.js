import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

export default callback => {
  const [err, SetErr] = useState(null);
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        location => {
          callback(location);
        }
      );
    } catch (error) {
      //   console.log({ err: error });
      SetErr(error);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};
