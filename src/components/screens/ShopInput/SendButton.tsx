import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Button, ButtonProps } from "react-native-elements";
import { defaultStyle } from "../../../styles";

type Props = {
  containerStyle?: ButtonProps["containerStyle"];
};

export const SendButton = ({ containerStyle }: Props) => {
  return (
    <Button
      title="送信"
      containerStyle={containerStyle}
      titleStyle={styles.title}
      buttonStyle={styles.button}
      activeOpacity={1}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultStyle.main,
  },
  title: {
    fontWeight: "bold",
  },
});
