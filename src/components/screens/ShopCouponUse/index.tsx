import React, { useRef } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { Button } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import { Modalize } from "react-native-modalize";

import { defaultStyle } from "../../../styles";

export const ShopCouopnUse = () => {
  const modalRef = useRef<Modalize>(null);

  const onPress = () => {
    if (modalRef.current?.open) {
      modalRef.current.open();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="メッセージを書きましょう"
        multiline
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
          <QRCode value="value" size={200} />
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
