import React from "react";
import { View, Text } from "react-native";
import UseNews from "../../hooks/useNews";
import Screen from "../common/Screen";
import SearchBar from "../searchBar";
import FeaturedNews from "../featuredNews";
import OneBedRooms from "../OneBedroom";
import TwoBedRooms from "../twoBedroom";
import ThreeBedrooms from "../threeBedroom";
import FourBedrooms from "../fourBedroom";
import ActivityIndicator from "../common/activityIndicator";

const Home = () => {
  const [
    featuredNews,
    oneBedroom,
    twoBedrooms,
    threeBedrooms,
    fourBedrooms,
    loading,
  ] = UseNews();

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen>
        {/* <SearchBar /> */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Apartments
        </Text>
        <FeaturedNews item={featuredNews} />
        <OneBedRooms data={oneBedroom} />
        <TwoBedRooms data={twoBedrooms} />
        <ThreeBedrooms data={threeBedrooms} />
        <FourBedrooms data={fourBedrooms} />
      </Screen>
    </>
  );
};

export default Home;
