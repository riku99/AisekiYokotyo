import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { RootNavigations } from "./src/Navigations";

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootNavigations />
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

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: "#ffbc1f",
  },
};

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
