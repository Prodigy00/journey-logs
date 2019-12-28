import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={{ fontSize: 40 }}>TrackListScreen</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
