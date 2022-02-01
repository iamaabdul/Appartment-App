import React from "react";
import { View, Text } from "react-native";
import HorizontalList from "./list/horizontalList";

const OneBedRooms = ({ data }) => {
  return <HorizontalList title="1 Bedroom Apartments" data={data} />;
};

export default OneBedRooms;
