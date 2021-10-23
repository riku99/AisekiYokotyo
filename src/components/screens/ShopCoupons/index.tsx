import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { Item } from "./Item";

const data = [
  {
    id: 1,
    sheetId: 10,
  },
  {
    id: 2,
    sheetId: 11,
  },
];

export const ShopCoupons = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
      >
        {data.map((d) => {
          return (
            <Item
              key={d.id}
              sheetId={d.sheetId}
              id={d.id}
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
    flex: 1,
  },
});
