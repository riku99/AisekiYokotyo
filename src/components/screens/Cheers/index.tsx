import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

import { defaultStyle } from "../../../styles";

export const Cheers = () => {
  const animation = useRef(null);

  const startAnimation = () => {
    if (animation.current !== null) {
      // @ts-ignore
      animation.current.play();
    }
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const navigation = useNavigation();

  const onUsedButtonPress = () => {
    navigation.navigate("Start");
    // このクーポンのDELETE
  };

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation}
        style={{
          width: "100%",
          height: "100%",
        }}
        source={require("../../../assets/cheers.json")}
      />

      <Pressable style={styles.cheerTextContainer}>
        <Text style={{ color: "white", fontSize: 14 }}>
          今日もお疲れ様です!!
        </Text>
        <Text style={styles.cheerText}>乾杯!</Text>
      </Pressable>

      <View style={styles.textContainer}>
        <Text style={[styles.text]}>
          この画面をお店に提示し、使用済みにするを押してください
        </Text>
        <Pressable onPress={onUsedButtonPress}>
          <Text
            style={[
              styles.text,
              { textDecorationLine: "underline", marginTop: 20 },
            ]}
          >
            使用済みにする
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: defaultStyle.main,
  },
  cheerTextContainer: {
    position: "absolute",
    bottom: "40%",
    alignItems: "center",
  },
  cheerText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    marginTop: 5,
  },
  textContainer: {
    position: "absolute",
    bottom: "15%",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
