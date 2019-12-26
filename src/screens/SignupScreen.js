import React from "react";
import { Text, Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text h3>Sign Up for Tracker</Text>
      <Input label="Email" />
      <Input label="Password" />
      <Button title="Sign Up" onPress={() => navigation.navigate("Signin")} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
