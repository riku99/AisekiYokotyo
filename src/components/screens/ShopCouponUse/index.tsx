import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import { Modalize } from "react-native-modalize";
import { useRoute, RouteProp } from "@react-navigation/native";
import { default as axios } from "axios";
import { useSelector } from "react-redux";

import { defaultStyle } from "../../../styles";
import { StackParamList } from "../../../Navigations";
import { baseUrl } from "../../../constans";
import { RootState } from "../../../stores";

export const ShopCouopnUse = () => {
  const modalRef = useRef<Modalize>(null);
  const { params } = useRoute<RouteProp<StackParamList, "ShopCouponUse">>();
  const name = useSelector((state: RootState) => state.userReducer.name);
  const age = useSelector((state: RootState) => state.userReducer.age);
  const userId = useSelector((state: RootState) => state.userReducer.id);
  const [text, setText] = useState("");

  const onPress = async () => {
    try {
      const res = await axios.patch(`${baseUrl}/coupons/user_id`, {
        userId,
        coupon_id: params.id,
        text,
        state: 1,
        age,
        name,
      });

      console.log(res.data);
      if (modalRef.current?.open) {
        modalRef.current.open();
      }
    } catch (e) {
      console.log(e);

      // 後で消す
      if (modalRef.current?.open) {
        modalRef.current.open();
      }
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="メッセージを書きましょう"
          multiline
          onChangeText={(t) => {
            setText(t);
          }}
        />
        <Button
          title="公開する"
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.titleStyle}
          activeOpacity={1}
          onPress={onPress}
        />

        <Modalize
          ref={modalRef}
          modalHeight={550}
          scrollViewProps={{
            keyboardShouldPersistTaps: "always",
            scrollEnabled: false,
          }}
        >
          <View style={styles.qrContainer}>
            <QRCode value={params.id.toString()} size={200} />
            <Text
              style={{
                fontSize: 16,
                marginTop: 30,
              }}
            >
              こちらのQRコードを読み取ってもらってください
            </Text>
          </View>
        </Modalize>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    marginTop: 50,
    height: 130,
    width: "90%",
    borderWidth: 1,
    borderColor: "#f5f5f5",
  },
  button: {
    backgroundColor: defaultStyle.main,
    width: "100%",
  },
  buttonContainer: {
    marginTop: 30,
  },
  titleStyle: {
    fontWeight: "bold",
  },
  qrContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
});
