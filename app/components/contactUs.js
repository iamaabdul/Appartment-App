import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { Snackbar } from "react-native-paper";

const { height } = Dimensions.get("window");

const ContactUs = () => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const copyFunstion = () => {
    Clipboard.setString("abrehmab.ibrahim@gmail.com");
  };

  const combinedFunctions = () => {
    onToggleSnackBar();
    copyFunstion();
  };

  dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${+923406944269}";
    } else {
      phoneNumber = "telprompt:${+923406944269}";
    }

    Linking.openURL(phoneNumber);
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <ScrollView>
        <View style={styles.topContent}>
          <View style={styles.info}>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", paddingBottom: 5 }}
            >
              Abdul Rehman
            </Text>
            <Text style={{ fontSize: 14 }}>
              Hey there I am 19 years old IT student and a beginner React Native
              Developer. I was Born in Saudia Arabia in Jeddah.
            </Text>
          </View>
          <Image source={require("../../assets/img.jpeg")} style={styles.img} />
        </View>

        <View style={styles.contactContainer}>
          <Text>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32
          </Text>
          <Text style={styles.title}>Contact Number</Text>
          <TouchableOpacity
            onPress={dialCall}
            style={styles.contactElementContainer}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../../assets/phone.png")}
              />
              <Text style={{ color: "#fff", fontSize: 18, marginLeft: 8 }}>
                +923406944269
              </Text>
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 10,
                marginTop: 7,
                marginRight: 4,
              }}
            >
              Open in DialPad
            </Text>
          </TouchableOpacity>

          <Text style={styles.title}>Email Address</Text>
          <TouchableOpacity
            onPress={combinedFunctions}
            style={styles.contactElementContainer}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../../assets/at.png")}
              />
              <Text style={{ color: "#fff", fontSize: 18, marginLeft: 8 }}>
                abrehman.ibrahim@gmail.com
              </Text>
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 10,
                marginTop: 7,
                marginRight: 4,
              }}
            >
              Click to copy it
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mediaPanel}>
          <TouchableOpacity
            style={styles.mediaContainer}
            onPress={() =>
              Linking.openURL("https://www.instagram.com/chill_am_i/")
            }
          >
            <Image
              style={styles.icons}
              source={require("../../assets/insta.png")}
            />
            <Text style={styles.mediaText}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://twitter.com/helloYoungNerd")
            }
            style={styles.mediaContainer}
          >
            <Image
              style={styles.icons}
              source={require("../../assets/twitter.png")}
            />
            <Text style={styles.mediaText}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.facebook.com/beast0340")
            }
            style={styles.mediaContainer}
          >
            <Image
              style={styles.icons}
              source={require("../../assets/fb.png")}
            />
            <Text style={styles.mediaText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.linkedin.com/")}
            style={styles.mediaContainer}
          >
            <Image
              style={styles.icons}
              source={require("../../assets/linkedIn.png")}
            />
            <Text style={styles.mediaText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        Copied
      </Snackbar>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  topContent: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,

    //card Properties
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  info: { width: "60%", marginLeft: 10 },

  img: {
    width: 120,
    height: 120,
    borderRadius: 400 / 2,
  },

  contactContainer: {
    margin: 20,
    padding: 5,
    //Card Properties
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  contactElementContainer: {
    marginBottom: 10,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#454545",
    borderRadius: 5,
  },
  //media panel
  mediaPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },

  mediaContainer: {
    padding: 5,
    alignItems: "center",

    //Card Properties
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  icons: {
    height: 70,
    width: 70,
  },
  mediaText: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "bold",
  },
});
