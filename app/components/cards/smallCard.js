import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import BlockCard from "./blockCard";
import ViewMore from "./viewMore";
import newsApi from "../../api/newsapi";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const SmallCard = ({ item, onPress }) => {
  const navigation = useNavigation();
  const handleViewMore = async (category) => {
    const result = await newsApi.getByCategory(category);
    navigation.navigate("NewsList", result);
  };
  if (item.type === "viewMore") {
    return (
      <ViewMore
        style={styles.viewMore}
        onPress={() => handleViewMore(item.category)}
      />
    );
  }

  return (
    <BlockCard
      onPress={onPress}
      item={item}
      style={styles.container}
      imageStyle={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
  viewMore: {
    width: width / 2,
    height: 200,
  },
});

export default SmallCard;
