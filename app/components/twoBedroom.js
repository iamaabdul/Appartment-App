import React from "react";
import { View, Text } from "react-native";
import VerticaList from "./list/verticaList";

const TwoBedRooms = ({ data }) => {
  return <VerticaList title="2 Bedrooms Apartments" data={data} />;
};

export default TwoBedRooms;
