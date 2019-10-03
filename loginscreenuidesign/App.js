import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image
} from "react-native";

import LoginformComponents from './Components/LoginformComponent';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("./assets/loginscreen-bg.png")}
        style={styles.backgroundContainer}
      >
        <View style={styles.logocontainer}>
          <Image
            source={require("./assets/logo-sbp.png")}
            style={styles.logo}
          ></Image>
        </View>
        <LoginformComponents />
        <Text style={styles.DontHaveAccountText}>Don't have an account?</Text>
        <Text style={styles.RegisterAccountText}>REGISTER</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: 1024,
    alignItems: "center",
    justifyContent: "center"
  },
  logocontainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    marginTop: 50,
  },
  logo: {
    width: 280,
    height: 64,
  },
  DontHaveAccountText: {
    color: "#000",
    fontSize: 20
  },
  RegisterAccountText: {
    color: "#493cd6",
    fontWeight: 'bold',
    marginBottom: 30
  }
});
