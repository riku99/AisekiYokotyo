import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Start } from "../components/screens/Start";
import { CustomerCoupon } from "../components/screens/CustomerCoupon";
import { ShopInput } from "../components/screens/ShopInput";
import { ShopCoupons } from "../components/screens/ShopCoupons";
import { ShopCouopnUse } from "../components/screens/ShopCouponUse";
import { QRCamera } from "../components/screens/QRCamera";
import { Cheers } from "../components/screens/Cheers";

type StackParamList = {
  Start: undefined;
  CustomerCoupon: undefined;
  ShopInput: undefined;
  ShopCoupons: undefined;
  ShopCouponUse: undefined;
  QRCamera: undefined;
  Cheers: undefined;
};

const RootStack = createStackNavigator<StackParamList>();

export const RootNavigations = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <RootStack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="CustomerCoupon"
        component={CustomerCoupon}
        options={{
          headerTitle: "公開されているチケット",
        }}
      />
      <RootStack.Screen
        name="ShopInput"
        component={ShopInput}
        options={{
          headerTitle: "お店情報の入力",
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureDirection: "vertical",
        }}
      />
      <RootStack.Screen
        name="ShopCoupons"
        component={ShopCoupons}
        options={{ headerTitle: "お店が提供しているチケット" }}
      />
      <RootStack.Screen
        name="ShopCouponUse"
        component={ShopCouopnUse}
        options={{ headerTitle: "クーポンを公開" }}
      />
      <RootStack.Screen
        name="QRCamera"
        component={QRCamera}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Cheers"
        component={Cheers}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};
