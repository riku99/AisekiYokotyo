import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { SendButton } from "./SendButton";
import { default as axios } from "axios";
import { useNavigation } from "@react-navigation/native";

import { baseUrl } from "../../../constans";

export const ShopInput = () => {
  const [shopId, setShopId] = useState<string>();
  const [sheetNumber, setSheetNumber] = useState<number>();
  const navigation = useNavigation();

  const onSendPress = async () => {
    try {
      const res = await axios.get(
        // 404
        `${baseUrl}/coupons?shopId=${shopId}&sheetNumber=${sheetNumber}`
      );
      navigation.navigate("ShopCoupons", {
        data: [
          {
            id: 1,
          },
          {
            id: 2,
          },
          {
            id: 3,
          },
        ],
      });
    } catch (e) {
      console.log(e);
    }

    navigation.navigate("ShopCoupons", {
      data: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>お店のIDを入力</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          onChangeText={(t) => {
            setShopId(t);
          }}
        />
        <Text style={[styles.title, { marginTop: 30 }]}>座席番号を入力</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={(t) => {
            setSheetNumber(Number(t));
          }}
        />
        <SendButton
          containerStyle={styles.buttonContainer}
          onPress={onSendPress}
        />
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
