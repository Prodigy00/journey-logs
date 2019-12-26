import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 40 }}>SignupScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text>Go to Signin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("mainFlow")}>
        <Text>Go to Main flow</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
