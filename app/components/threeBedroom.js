import React from "react";
import { View, Text } from "react-native";
import HorizontalList from "./list/horizontalList";

const ThreeBedrooms = ({ data }) => {
  return <HorizontalList title="3 Bedroom Apartments" data={data} />;
};

export default ThreeBedrooms;
