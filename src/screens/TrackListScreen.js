import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 40 }}>TrackListScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("TrackDetail")}>
        <Text>Go to Track Detail</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
