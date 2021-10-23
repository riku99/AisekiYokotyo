import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { defaultStyle } from "../../../styles";

export const Start = () => {
  const navigation = useNavigation();

  const onStartButtonPress = () => {
    navigation.navigate("CustomerCoupon");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.title}>相席横丁</Text>
          <TextInput
            style={[styles.input, { marginTop: 70 }]}
            placeholder="名前"
          />
          <TextInput
            style={[styles.input, { marginTop: 40 }]}
            placeholder="年齢入力"
          />
          <Button
            buttonStyle={styles.button}
            title="開始する"
            containerStyle={styles.buttonContainer}
            onPress={onStartButtonPress}
            activeOpacity={1}
            titleStyle={{ fontWeight: "bold" }}
          />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    marginTop: 75,
    alignSelf: "center",
  },
  input: {
    height: 41,
    width: 320,
    alignSelf: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: 282,
    height: 81,
    alignSelf: "center",
    marginTop: 300,
  },
  button: {
    backgroundColor: defaultStyle.main,
  },
  titleStyle: {
    fontSize: 11,
    color: "white",
  },
});
