import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import { Button } from "react-native-elements";

export const Start = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>相席横丁</Text>
        <TextInput
          style={[styles.input, { marginTop: 70 }]}
          placeholder="名前"
        />
        <TextInput
          style={[styles.input, { marginTop: 40 }]}
          placeholder="年齢入力"
        />
        <Button
          buttonStyle={styles.button}
          title="start"
          containerStyle={styles.buttonContainer}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    marginTop: 75,
    alignSelf: "center",
  },
  input: {
    height: 41,
    width: 320,
    alignSelf: "center",
    borderColor: "gray",
    borderWidth: 1,
  },
  buttonContainer: {
    width: 282,
    height: 81,
    alignSelf: "center",
    marginTop: 300,
  },
  button: {
    backgroundColor: "#f5bc42",
  },
  titleStyle: {
    fontSize: 11,
    color: "white",
  },
});
