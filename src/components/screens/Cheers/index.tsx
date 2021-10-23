import React, { useRef } from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export const Cheers = () => {
  const animation = useRef(null);

  const startAnimation = () => {
    if (animation.current !== null) {
      animation.current.play();
    }
  };

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation}
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#eee",
        }}
        source={require("../../../assets/a.json")}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
      <View style={styles.buttonContainer}>
        <Button title="Start Animation" onPress={() => startAnimation()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
