import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";

const TrackCreate = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>TrackCreate</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreate;
