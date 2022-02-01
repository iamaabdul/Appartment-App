import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

const Screen = ({ children }) => {
  return <ScrollView style={styles.containter}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  containter: {
    marginTop: StatusBar.currentHeight,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#f7f3f3",
    flex: 1,
    marginBottom: 20,
  },
});

export default Screen;
