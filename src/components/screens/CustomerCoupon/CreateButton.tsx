import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export const CreateButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ShopInput");
  };

  return (
    <Button
      buttonStyle={styles.button}
      activeOpacity={1}
      title="作成する🍻"
      titleStyle={styles.title}
      onPress={onPress}
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
