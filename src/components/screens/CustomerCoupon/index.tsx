import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { default as axios } from "axios";

import { CreateButton } from "./CreateButton";
import { QRButton } from "./QRButton";
import { Item } from "./Item";
import { baseUrl } from "../../../constans";

// お客さんが公開したチケット(クーポン)。外のユーザーがこれを予約する
export const CustomerCoupon = () => {
  const [coupons, setCoupons] = useState<any[]>();

  useEffect(() => {
    const get = async () => {
      try {
        const res = await axios.get<any[]>(`${baseUrl}/receiver/coupons`);
        setCoupons(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    get();
  }, []);

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        {coupons &&
          coupons.map((d) => {
            return (
              <Item
                key={d.id}
                id={d.id}
                name={d.shop_name}
                text={d.text}
                userName={d.user.name}
                sheetNumber={d.sheetNumber}
                containerStyle={{ marginTop: 30 }}
                deleteData={() => {
                  setCoupons((c) => {
                    return c?.filter((data) => data.id !== d.id);
                  });
                }}
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
    // width: "100%",
    // height: "100%",
    paddingTop: 10,
    paddingBottom: 150,
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
