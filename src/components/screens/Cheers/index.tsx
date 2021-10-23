import React, { useEffect, useRef } from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

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
});
