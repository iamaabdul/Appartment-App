import React from "react";
import { View, Text } from "react-native";

import NewsList from "../list/newsList";
import Home from "../screen/home";
import NewsDetail from "../screen/newsDetail";
import ContactUs from "../contactUs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "../form";
// import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerTitle: "",
        headerTintColor: "#000",
        headerLeftContainerStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "rgba(92,90,91,0.7)",
          alignItems: "center",
          marginLeft: 10,
        },
      }}
    >
      <Stack.Screen
        options={{ headerMode: "none" }}
        name="Home"
        component={Home}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="NewsList" component={NewsList} />
      <Stack.Screen name="ContactUs" component={ContactUs} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
