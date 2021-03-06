import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Image,
  Alert,
  Pressable,
} from "react-native";
import { default as axios } from "axios";

import { getRandomImg } from "../../../utils";
import { baseUrl } from "../../../constans";

type Props = {
  id: number;
  name: string;
  text: string;
  userName: string;
  containerStyle?: StyleProp<ViewStyle>;
  deleteData: () => void;
  sheetNumber: number;
};

export const Item = ({
  id,
  name,
  text,
  containerStyle,
  userName,
  deleteData,
  sheetNumber,
}: Props) => {
  const onPress = () => {
    Alert.alert(
      "このチケットを予約しますか?",
      "その時の席の状況によってはご案内できない場合がございます。また、こちらからキャンセルすることはできません",
      [
        {
          text: "はい",
          onPress: async () => {
            try {
              deleteData();
              Alert.alert(
                "表示されていた席番号の人からQRコードを読み込んでください"
              );
              console.log("go");
              await axios.patch(
                `${baseUrl}/coupons/used`,
                {
                  coupon_id: id,
                  state: 2,
                },
                {
                  headers: {
                    "Content-Type":
                      "application/x-www-form-urlencoded; charset=UTF-8",
                  },
                }
              );
              console.log("ok");
              // deleteData();
            } catch (e) {
              console.log(e);
            }
          },
        },
        {
          text: "キャンセル",
        },
      ]
    );
  };

  return (
    <View style={[styles.content, containerStyle]}>
      <Pressable onPress={onPress}>
        <Image
          source={{ uri: getRandomImg() }}
          style={{
            width: "100%",
            height: 130,
          }}
          resizeMode="contain"
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={{ marginTop: 10 }}>席番号: {sheetNumber}</Text>
        <Text style={{ marginTop: 10 }}>{userName}</Text>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
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
    fontSize: 20,
    marginTop: 10,
  },
  text: {
    marginTop: 10,
  },
});
