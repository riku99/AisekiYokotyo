import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";

import { defaultStyle } from "../../../styles";

export const ShopCouopnUse = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="メッセージを書きましょう"
        multiline
      />
      <Button
        title="公開する"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        titleStyle={styles.titleStyle}
        activeOpacity={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    marginTop: 50,
    height: 130,
    width: "90%",
    borderWidth: 1,
    borderColor: "#f5f5f5",
  },
  button: {
    backgroundColor: defaultStyle.main,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 30,
  },
  titleStyle: {
    fontWeight: "bold",
  },
});
