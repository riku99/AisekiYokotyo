import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Vibration } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";
import { default as axios } from "axios";
import { baseUrl } from "../../../constans";

export const QRCamera = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  // const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  useEffect(() => {
    const a = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    a();
  }, []);

  const onScaned = async (id: number) => {
    try {
      await axios.patch(`${baseUrl}/coupons/used`, {
        coupon_id: id,
        state: 3,
      });

      navigation.navigate("Cheers");
      Vibration.vibrate();
    } catch (e) {
      console.log(e);

      Vibration.vibrate();
      navigation.navigate("Cheers");
    }
  };

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
          onScaned(Number(e.data));
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
