import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Vibration } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

export const QRCamera = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  useEffect(() => {
    const a = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    a();
  }, []);
  // console.log(hasPermission);
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={(e) => {
          console.log("scaned");
          console.log(e.data);
          if (e.data) {
            Vibration.vibrate();
            navigation.navigate("Cheers");
          }
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
