import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export const CreateButton = () => {
  return (
    <Button
      buttonStyle={styles.button}
      activeOpacity={1}
      title="作成する🍻"
      titleStyle={styles.title}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: 130,
    borderRadius: 30,
    backgroundColor: "#ffbc1f",
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
