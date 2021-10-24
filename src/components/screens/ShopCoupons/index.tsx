import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { default as axios } from "axios";
import { useRoute, RouteProp } from "@react-navigation/native";

import { Item } from "./Item";
import { baseUrl } from "../../../constans";
import { StackParamList } from "../../../Navigations";

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
  const { params } = useRoute<RouteProp<StackParamList, "ShopCoupons">>();

  if (!params.data || !params.data.length) {
    return [];
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
      >
        {params.data.map((d) => {
          return (
            <Item
              key={d.id}
              // sheetId={d.sheetId}
              sheetId={10}
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
