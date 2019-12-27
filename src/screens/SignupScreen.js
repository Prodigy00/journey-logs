import React, { useContext } from "react";

import { StyleSheet, View } from "react-native";
import NavLink from "../components/NavLink";
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
      <NavLink
        routeName="Signin"
        navText="Already have an account? Sign in instead"
      />
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
  }
});

export default SignupScreen;
