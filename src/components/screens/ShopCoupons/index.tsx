import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { Item } from "./Item";

const data = [
  {
    id: 1,
    sheetId: 10,
  },
];

export const ShopCoupons = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", marginTop: 30 }}
      >
        {data.map((d) => {
          return <Item key={d.id} sheetId={d.sheetId} id={d.id} />;
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
