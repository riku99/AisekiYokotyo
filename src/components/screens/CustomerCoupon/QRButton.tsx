import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { defaultStyle } from "../../../styles";

MIcon.loadFont();

export const QRButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    // navigation.navigate("QRCamera");
    navigation.navigate("Cheers");
  };

  return (
    <Button
      buttonStyle={styles.button}
      activeOpacity={1}
      title="QR読み取り"
      titleStyle={styles.title}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: 130,
    borderRadius: 30,
    backgroundColor: defaultStyle.main,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
