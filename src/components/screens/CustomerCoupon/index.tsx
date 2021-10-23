import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { CreateButton } from "./CreateButton";
import { CouponItem } from "../../utils/CouponItem";
import { QRButton } from "./QRButton";
import { Item } from "./Item";

const data = [
  {
    id: 1,
    name: "九州市場🐡",
    text: "生ビールで乾杯しましょう!!",
  },
  {
    id: 2,
    name: "北海道居酒屋",
    text: "生ビールで乾杯しましょう!!",
  },
  {
    id: 3,
    name: "韓国料理",
    text: "生ビールで乾杯しましょう!!",
  },
  {
    id: 4,
    name: "居酒屋A",
    text: "生ビールで乾杯しましょう!!",
  },
];

// お客さんが公開したチケット(クーポン)。外のユーザーがこれを予約する
export const CustomerCoupon = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map((d) => {
          return (
            <Item
              key={d.id}
              id={d.id}
              name={d.name}
              text={d.text}
              containerStyle={{ marginTop: 30 }}
            />
          );
        })}
      </ScrollView>
      <View style={styles.createButton}>
        <CreateButton />
      </View>

      <View style={styles.qrButtonContainer}>
        <QRButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  createButton: {
    position: "absolute",
    bottom: 60,
    right: 20,
  },
  qrButtonContainer: {
    position: "absolute",
    bottom: 60,
    left: 20,
  },
});
