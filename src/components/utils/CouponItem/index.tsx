// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StyleProp,
//   ViewStyle,
//   Pressable,
//   Alert,
// } from "react-native";

// type Props = {
//   id: number;
//   name: string;
//   text: string;
//   containerStyle?: StyleProp<ViewStyle>;
// };

// export const CouponItem = ({ id, name, text, containerStyle }: Props) => {
//   const [validatedId, setValidatedId] = useState<number>();

//   const onPress = () => {
//     Alert.alert(
//       "このチケットを予約しますか?",
//       "その時の席の状況によってはご案内できない場合がございます。また、こちらからキャンセルすることはできません",
//       [
//         {
//           text: "はい",
//           onPress: () => {
//             // 予約状態にstatus変える
//           },
//         },
//         {
//           text: "キャンセル",
//         },
//       ]
//     );
//   };

//   return (
//     <View style={[styles.content, containerStyle]}>
//       <Pressable
//         onPress={onPress}
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <View>
//           <Text style={styles.name}>{name}</Text>
//           <Text style={styles.text}>{text}</Text>
//         </View>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   content: {
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//     backgroundColor: "white",
//     borderRadius: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 3,
//     width: "83%",
//   },
//   name: {
//     fontWeight: "bold",
//     fontSize: 28,
//   },
//   text: {
//     marginTop: 10,
//   },
// });
