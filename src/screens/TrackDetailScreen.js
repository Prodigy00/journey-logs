import React, { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const TrackDetail = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find(trk => trk._id === _id);
  const initialCoords = track.locations[0].coords;
  return (
    <>
      <Text style={{ fontSize: 40 }}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetail;
