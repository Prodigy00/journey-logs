// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreate = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Log</Text>
      <Map />
      {err ? (
        <Text style={styles.errMsg}>Please enable location services</Text>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreate.navigationOptions = {
  title: "Add Log",
  tabBarIcon: <FontAwesome name="plus" size={25} />
};

const styles = StyleSheet.create({
  errMsg: {
    fontSize: 16,
    color: "red"
  }
});

export default withNavigationFocus(TrackCreate);
