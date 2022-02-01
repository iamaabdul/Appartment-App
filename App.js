import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/components/navigation/appNavigator";
import ContactUs from "./app/components/contactUs";
import Test from "./text";
import Form from "./app/components/form";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
