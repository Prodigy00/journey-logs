import React, { useContext } from "react";
import { Button } from "react-native-elements";
import { Text, View, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <Text style={{ fontSize: 40 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signOut} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
