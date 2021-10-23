import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Image,
  Pressable,
} from "react-native";

type Props = {
  id: number;
  sheetId: number;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Item = ({ id, sheetId, containerStyle }: Props) => {
  return (
    <View style={[styles.content, containerStyle]}>
      <View>
        <Image
          style={{
            width: "100%",
            height: 130,
          }}
          source={require("../../../assets/sawar2.jpeg")}
          resizeMode="contain"
        />
        <Text style={styles.text}>座席番号: {sheetId}に発行されています</Text>
        <Pressable>
          <Text style={styles.useLink}>使用する</Text>
        </Pressable>
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
  text: {
    marginTop: 10,
    fontWeight: "bold",
  },
  useLink: {
    color: "blue",
    textDecorationLine: "underline",
    alignSelf: "flex-end",
    marginTop: 10,
  },
});
