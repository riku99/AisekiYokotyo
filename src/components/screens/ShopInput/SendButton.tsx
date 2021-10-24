import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Button, ButtonProps } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { default as axios } from "axios";

import { defaultStyle } from "../../../styles";
import { baseUrl } from "../../../constans";

type Props = {
  containerStyle?: ButtonProps["containerStyle"];
  onPress: () => void;
};

export const SendButton = ({ containerStyle, onPress }: Props) => {
  const navigation = useNavigation();

  return (
    <Button
      title="送信"
      containerStyle={containerStyle}
      titleStyle={styles.title}
      buttonStyle={styles.button}
      activeOpacity={1}
      onPress={onPress}
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
