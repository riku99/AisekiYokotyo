import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export const QRCamera = () => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  useEffect(() => {
    const a = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    a();
  }, []);
  console.log(hasPermission);
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={() => {
          console.log("scaned");
        }}
        style={styles.camera}
      />
    </View>
  );
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
