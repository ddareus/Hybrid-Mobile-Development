import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const { width: WIDTH } = Dimensions.get("window");
export default class loginformComponent extends React.Component {
  render() {
    return (
      <View style={styles.LoginFormContainer}>
        <Text style={styles.LoginAccountText}>Login Account </Text>
        <Icon
          name="ios-person"
          type="ionicon"
          size={20}
          color={"rgba(73, 60, 214, 0.7)"}
          style={styles.UserIconInput}
        />
        <TextInput
          style={styles.LoginTextInput}
          placeholder={"User Name or Email"}
          placeholderTextColor={"rgba(73, 60, 214, 0.7)"}
          underlineColorAndroid="transparent"
        />
        <Icon
          name="ios-lock"
          type="ionicon"
          size={20}
          color={"rgba(73, 60, 214, 0.7)"}
          style={styles.PasswordIconInput}
        />
        <TextInput
          style={styles.LoginTextInput}
          placeholder={"Password"}
          secureTextEntry={true}
          placeholderTextColor={"rgba(73, 60, 214, 0.7)"}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.EyeButton}>
          <Icon
            name="ios-eye"
            type="ionicon"
            size={20}
            color={"rgba(73, 60, 214, 0.7)"}
          />
        </TouchableOpacity>
        <Text style={styles.ForgetPasswordText}>
          In case you forgot password?
        </Text>
        <TouchableOpacity style={styles.LoginButtonContainer}>
          <Text style={styles.LoginButton}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.ForgetPasswordText}>Otherwise login with</Text>
        <Icon
          name="logo-facebook"
          type="ionicon"
          size={40}
          color= 'blue'
          style={styles.FacebookLogo}
        />
        <Icon
          name="logo-github"
          type="ionicon"
          size={40}
          color= 'black'
          style={styles.GithubLogo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LoginFormContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: 280,
    height: 350,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  LoginAccountText: {
    color: "#000",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold"
  },
  LoginTextInput: {
    width: WIDTH - 80,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#493cd6"
  },
  UserIconInput: {
    position: "absolute",
    top: 70,
    left: 20
  },
  PasswordIconInput: {
    position: "absolute",
    top: 125,
    left: 20
  },
  ForgetPasswordText: {
    color: "#000",
    fontSize: 15,
    marginTop: 15,
    marginBottom: 10
  },
  LoginButtonContainer: {
    width: WIDTH - 200,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    backgroundColor: "#493cd6",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  LoginButton: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  EyeButton: {
    position: "absolute",
    top: 130,
    right: 20
  },
  FacebookLogo: {
    position: "absolute",
    top: 295,
    left: 90
  },
  GithubLogo: {
    position: "absolute",
    top: 295,
    right: 95
  }
});
