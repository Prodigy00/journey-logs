import React, { useContext } from "react";
import { Button } from "react-native-elements";
import { Text, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text style={{ fontSize: 40, alignSelf: "center" }}>Account</Text>
      </Spacer>
      <Spacer>
        <Button title="Sign Out" onPress={signOut} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={25} />
};

const styles = StyleSheet.create({});

export default AccountScreen;
