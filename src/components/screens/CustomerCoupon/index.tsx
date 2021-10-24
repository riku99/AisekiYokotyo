import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { default as axios } from "axios";

import { CreateButton } from "./CreateButton";
import { CouponItem } from "../../utils/CouponItem";
import { QRButton } from "./QRButton";
import { Item } from "./Item";
import { baseUrl } from "../../../constans";

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
  const [coupons, setCoupons] = useState<any[]>();
  const [validatedId, setValidatedId] = useState<number>();

  useEffect(() => {
    const get = async () => {
      try {
        const res = await axios.get<any[]>(`${baseUrl}/receiver/coupons`);
        setCoupons(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    get();
  }, []);

  const onSelect = async (id: number) => {
    try {
      await axios.patch(`${baseUrl}/coupons/used`, {
        coupon_id: id,
        state: 2,
      });

      setCoupons((c) => {
        return c?.filter((data) => data.id !== id);
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (!coupons) {
    return null;
  }

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        {coupons.map((d) => {
          return (
            <Item
              key={d.id}
              id={d.id}
              name={"あああ"}
              text={d.text}
              userName={d.user.name}
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
