import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Dimensions,
} from "react-native";

function Touchables__(props) {
  const _onPressButton = (props) => {
    Alert.prompt("User Name");
  };

  return (
    <TouchableHighlight onPress={props.onPress} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.name}</Text>
        <Text style={styles.subtext}>{props.subtext}</Text>
      </View>
    </TouchableHighlight>
  );
}

var width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 5,
    width: 260,
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    width: width,
  },

  buttonText: {
    textAlign: "center",
    paddingLeft: 20,
    paddingTop: 10,
    color: "black",
    fontSize: 20,
  },
  subtext: {
    paddingLeft: 20,
    fontSize: 18,
    color: "#808080",
  },
});
export default Touchables__;
