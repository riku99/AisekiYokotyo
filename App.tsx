import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Start } from "./src/components/screens/Start";

export default function App() {
  return (
    <NavigationContainer>
      <Start />
    </NavigationContainer>
  );
  // const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  // const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  // useEffect(() => {
  //   const a = async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   };
  //   a();
  // }, []);
  // console.log(hasPermission);
  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  // return (
  //   <View style={styles.container}>
  //     <BarCodeScanner
  //       onBarCodeScanned={() => {
  //         console.log("scaned");
  //       }}
  //       style={styles.camera}
  //     />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
});
