import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Start } from "../components/screens/Start";
import { CustomerCoupon } from "../components/screens/CustomerCoupon";
import { ShopInput } from "../components/screens/ShopInput";

type StackParamList = {
  Start: undefined;
  CustomerCoupon: undefined;
  ShopInput: undefined;
};

const RootStack = createStackNavigator<StackParamList>();

export const RootNavigations = () => {
  return (
    <RootStack.Navigator>
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
          headerBackTitleVisible: false,
        }}
      />
      <RootStack.Screen
        name="ShopInput"
        component={ShopInput}
        options={{
          headerTitle: "お店情報の入力",
          headerBackTitleVisible: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureDirection: "vertical",
        }}
      />
    </RootStack.Navigator>
  );
};
