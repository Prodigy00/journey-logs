import React, { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Text, View, StyleSheet } from "react-native";

const TrackDetail = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find(trk => trk._id === _id);
  return <Text style={{ fontSize: 40 }}>{track.name}</Text>;
};

const styles = StyleSheet.create({});

export default TrackDetail;
