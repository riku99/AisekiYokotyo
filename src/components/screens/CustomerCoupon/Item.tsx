import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

import { getRandomImg } from "../../../utils";

type Props = {
  id: number;
  name: string;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Item = ({ id, name, text, containerStyle }: Props) => {
  return (
    <View style={[styles.content, containerStyle]}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
    width: "83%",
  },
  name: {
    fontWeight: "bold",
    fontSize: 28,
  },
  text: {
    marginTop: 10,
  },
});
