import React from "react";
import { View, ScrollView, Text, SafeAreaView, StyleSheet } from "react-native";
import { Item } from "./Item";

const data = [
  {
    id: 1,
    name: "九州市場",
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

export const CustomerCoupon = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map((d) => {
          return (
            <Item
              id={d.id}
              name={d.name}
              text={d.text}
              containerStyle={{ marginTop: 30 }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
