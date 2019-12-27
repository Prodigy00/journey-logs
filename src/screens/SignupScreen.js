import React, { useState, useContext } from "react";
import { Text, Input, Button } from "react-native-elements";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signUp } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for JourneyLogs"
        errorMessage={state.errorMessage}
        buttonTitle="Sign Up"
        onSubmit={signUp}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead{" "}
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150
  },

  link: {
    color: "blue"
  }
});

export default SignupScreen;
