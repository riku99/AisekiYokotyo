import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { default as axios } from "axios";

import { defaultStyle } from "../../../styles";
import { setUser } from "../../../stores/user";
import { baseUrl } from "../../../constans";

export const Start = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>();
  const [age, setAge] = useState<number>();
  const dispatch = useDispatch();

  const onStartButtonPress = async () => {
    if (!name || !age) {
      Alert.alert("入力してください");
      return;
    }

    try {
      const res = await axios.post<{ userId: number }>(
        `${baseUrl}/create_users`,
        {
          name,
          age,
        }
      );

      dispatch(
        setUser({
          id: res.data.userId,
          name,
          age,
        })
      );

      navigation.navigate("CustomerCoupon");
    } catch (e) {
      console.log(e);
      // navigation.navigate("CustomerCoupon");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <SafeAreaView>
          <Image
            source={{
              uri:
                "https://bc-bucket-dev.s3.ap-northeast-1.amazonaws.com/logo_transparent.png",
            }}
            style={{
              width: "100%",
              height: 220,
              marginTop: 30,
            }}
          />
          <View style={{ marginTop: 0 }}>
            <TextInput
              style={[styles.input, { marginTop: 70 }]}
              placeholder="名前"
              onChangeText={(t) => {
                setName(t);
              }}
            />
            <TextInput
              style={[styles.input, { marginTop: 40 }]}
              placeholder="年齢入力"
              keyboardType="number-pad"
              onChangeText={(t) => {
                setAge(Number(t));
              }}
            />
          </View>
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
    marginTop: 1,
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
    marginTop: 100,
  },
  button: {
    backgroundColor: defaultStyle.main,
  },
  titleStyle: {
    fontSize: 11,
    color: "white",
  },
});
