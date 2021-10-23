import React, { useEffect, useState, createContext } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { RootNavigations } from "./src/Navigations";
import { defaultStyle } from "./src/styles";
import { Provider } from "react-redux";
import { store } from "./src/stores";

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Provider store={store}>
        <RootNavigations />
      </Provider>
    </NavigationContainer>
  );
}

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: defaultStyle.main,
  },
};
