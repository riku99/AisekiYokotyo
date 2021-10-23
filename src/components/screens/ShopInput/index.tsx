import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { SendButton } from "./SendButton";

export const ShopInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>お店のIDを入力</Text>
        <TextInput style={styles.input} />
        <Text style={[styles.title, { marginTop: 30 }]}>座席番号を入力</Text>
        <TextInput style={styles.input} />
        <SendButton containerStyle={styles.buttonContainer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    width: "80%",
    marginTop: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#d6d6d6",
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 40,
  },
});
