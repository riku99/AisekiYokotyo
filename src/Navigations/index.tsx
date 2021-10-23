import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { Start } from "../components/screens/Start";
import { CustomerCoupon } from "../components/screens/CustomerCoupon";

type StackParamList = {
  Start: undefined;
  CustomerCoupon: undefined;
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
        options={{ headerTitle: "公開されているチケット" }}
      />
    </RootStack.Navigator>
  );
};
