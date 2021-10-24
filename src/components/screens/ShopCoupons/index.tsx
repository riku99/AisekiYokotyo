import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { default as axios } from "axios";
import { useRoute, RouteProp } from "@react-navigation/native";

import { Item } from "./Item";
import { baseUrl } from "../../../constans";
import { StackParamList } from "../../../Navigations";

export const ShopCoupons = () => {
  const { params } = useRoute<RouteProp<StackParamList, "ShopCoupons">>();

  // console.log("params");
  // console.log(params);

  if (!params.data || !params.data.length) {
    return null;
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
              sheetId={d.sheetNumber}
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
