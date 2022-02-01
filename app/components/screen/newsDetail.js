import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import newsApi from "../../api/newsapi";
import HorizotalList from "../list/horizontalList";
import { useNavigation } from "@react-navigation/native";
import Close from "../common/close";
import { Button } from "react-native-paper";
import ActivityIndicator from "../common/activityIndicator";

const { width, height } = Dimensions.get("window");

const NewsDetail = ({ route }) => {
  const [news, setNews] = useState({});
  const [relatedNews, setRelatedNews] = useState([]);
  const { id: postId, category: postCategory } = route.params.item;
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const fetchPost = async (id) => {
    setLoading(true);
    const result = await newsApi.getSingle(id);
    setNews(result);
  };

  const fetchRelatedPosts = async (category) => {
    const result = await newsApi.getByCategory(postCategory, 6);
    setRelatedNews(result.filter((item) => item.id !== postId));
    setLoading(false);
  };

  useEffect(() => {
    fetchPost(postId);
    fetchRelatedPosts(postCategory);
  }, []);

  const { title, content, thumbnail, category, Kitchen, Bathroom, Terrace } =
    news;

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <ActivityIndicator visible={loading} />
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: thumbnail }} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.card}>
          <View style={styles.detailsContainer}>
            <View style={styles.section}>
              <Image source={require("../../../assets/bedroom.png")} />
              <Text style={styles.details}> {category}</Text>
            </View>
            <View style={styles.section}>
              <Image source={require("../../../assets/fridge.png")} />
              <Text style={styles.details}>{Kitchen}</Text>
            </View>
            <View style={styles.section}>
              <Image source={require("../../../assets/shower.png")} />
              <Text style={styles.details}>{Bathroom}</Text>
            </View>
            <View style={styles.section}>
              <Image source={require("../../../assets/balcony.png")} />
              <Text style={styles.details}>Terrace is {Terrace}</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn}
            mode="contained"
            onPress={() => navigation.navigate("ContactUs")}
          >
            Contact Us
          </Button>
          <Button
            style={styles.btn}
            mode="contained"
            onPress={() => navigation.navigate("Form")}
          >
            Apply
          </Button>
        </View>

        <View style={styles.relatedPostContainer}>
          <HorizotalList data={relatedNews} title="Related Posts" />
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
    justifyContent: "center",
  },
  contentContainer: {
    margin: 20,
  },
  title: {
    marginHorizontal: 20,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginVertical: 20,
  },
  content: {
    fontSize: 16,
    color: "#4e4d4d",
  },
  relatedPostContainer: {
    padding: 10,
  },

  detailsContainer: {
    flex: 1,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginHorizontal: 30,
    marginVertical: 10,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  card: {
    backgroundColor: "#fff",
    shadowColor: "#000",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,

    borderRadius: 10,
    marginHorizontal: 20,
  },
  btnContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  btn: {
    width: "47%",
    shadowColor: "#000",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

export default NewsDetail;
