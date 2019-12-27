import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signIn, clearErrorMsg } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMsg} //clear err msgs the instant we nav away from screen
      />
      <AuthForm
        headerText="Sign In to JourneyLogs"
        errorMessage={state.errorMessage}
        buttonTitle="Sign In"
        onSubmit={signIn}
      />
      <NavLink
        routeName="Signup"
        navText="Don't have an account? Sign up instead"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150
  }
});

export default SigninScreen;
