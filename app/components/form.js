import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Picker,
} from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import Checkbox from "expo-checkbox";
import { TextInput, HelperText, Button } from "react-native-paper";
import db from "../Firebase/dbConfig";
import { collection, addDoc } from "@firebase/firestore";

const Form = () => {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState(0);

  //Email Validator
  const [Email, setEmail] = useState("");
  const [Alert, setalert] = useState("");

  const [visaStatus, setVisaStatus] = useState("");
  //Storage
  const [storageStatus, setstorageStatus] = useState(false);
  const [StorageUnit, setStorageUnit] = useState("none");

  const [CarstorageStatus, setCarstorageStatus] = useState(false);
  const [CarStorageUnit, setCarStorageUnit] = useState("none");

  // Othercheck boxs
  const [petStatus, setPetStatus] = useState(false);
  const [AgreeStatus, setAgreeStatus] = useState(false);
  //FireBase
  const userCollectionRef = collection(db, "Form");
  //Validitor
  const Submitdata = async () => {
    await addDoc(userCollectionRef, {
      name: Name,
      number: Number,
      email: Email,
      visaStatus: visaStatus,
      storageStatus: storageStatus + " " + StorageUnit,
      carStorageStatus: CarstorageStatus + " " + CarStorageUnit,
      petStatus: petStatus,
      agreeStatus: AgreeStatus,
    });
  };

  const Submit = () => {
    if (!Name.trim() || !Number.trim() || !Email.trim() || !visaStatus.trim()) {
      alert("Please Provide The Required Information");
      return;
    } else if (Email.length < 10) {
      setalert("Email Format is invalid");
      return;
    } else if (!Email.includes("@")) {
      setalert("Email must have @ sign");
      return;
    } else if (
      !Email.includes(
        ".com" || ".pk" || ".uk" || ".edu" || ".jp" || ".us" || ".in" || ".co"
      )
    ) {
      setalert("Invalid Email Domain");
      return;
    }

    // setName("");
    // setNumber(0);
    // setEmail("");
    // setalert("");
    // setVisaStatus("");
    // setstorageStatus(false);
    // setStorageUnit("none");
    // setCarstorageStatus(false);
    // setCarStorageUnit("none");
    // setPetStatus(false);
    // setAgreeStatus(false);

    alert("Success");
    Submitdata();
  };

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Text style={styles.applyText}>Application Form</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={{ marginTop: 10 }}
              label="Names"
              mode="outlined"
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              label="Number"
              mode="outlined"
              keyboardType="phone-pad"
              maxLength={8}
              left={<TextInput.Affix text="04" />}
              onChangeText={(text) => setNumber("04" + text)}
            />
            <TextInput
              label="Email"
              mode="outlined"
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={{ fontSize: 12, color: "red" }}>{Alert}</Text>
            <Text style={{ marginVertical: 4, fontSize: 20 }}>
              Please Select Your Visa Type
            </Text>

            <RadioButtonGroup
              containerStyle={{
                marginTop: 2,
              }}
              selected={visaStatus}
              onSelected={(value) => setVisaStatus(value)}
              radioBackground="blue"
              size={20}
            >
              <RadioButtonItem
                value="Citizen"
                label="Citizen"
                style={{ margin: 2 }}
              />
              <RadioButtonItem
                value="Permanent"
                label="Permanent"
                style={{ margin: 2 }}
              />
              <RadioButtonItem
                value="Other Visa"
                label="Other Visa"
                style={{ margin: 2 }}
              />
            </RadioButtonGroup>
            <Text style={{ marginVertical: 4, fontSize: 20, marginTop: 10 }}>
              Please Select Your Storage Type
            </Text>

            <View style={styles.checkBoxContainer}>
              <View style={styles.section}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={storageStatus}
                    onValueChange={setstorageStatus}
                  />

                  <Text style={styles.paragraph}>Storage Unit</Text>
                </View>
                <Picker
                  label="Select Unit"
                  enabled={storageStatus}
                  mode={"dialoge"}
                  selectedValue={StorageUnit}
                  style={{ width: 120 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setStorageUnit(itemValue)
                  }
                >
                  <Picker.Item label="1 unit" value="1 unit" />
                  <Picker.Item label="2 unit" value="2 unit" />
                  <Picker.Item label="3 unit" value="3 unit" />
                  <Picker.Item label="4 unit" value="4 unit" />
                </Picker>
              </View>
              <View style={styles.section}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={CarstorageStatus}
                    onValueChange={setCarstorageStatus}
                  />

                  <Text style={styles.paragraph}>Car Storage Unit</Text>
                </View>
                <Picker
                  label="Select Unit"
                  enabled={CarstorageStatus}
                  mode={"dialoge"}
                  selectedValue={CarStorageUnit}
                  style={{ width: 120 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setCarStorageUnit(itemValue)
                  }
                >
                  <Picker.Item label="1 unit" value="1 unit" />
                  <Picker.Item label="2 units" value="2 units" />
                  <Picker.Item label="3 units" value="3 units" />
                  <Picker.Item label="4 units" value="4 units" />
                </Picker>
              </View>
            </View>

            <View style={styles.checkBoxContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox
                  style={styles.checkbox}
                  value={petStatus}
                  onValueChange={setPetStatus}
                />
                <Text style={styles.paragraph}>Pets</Text>
              </View>
            </View>

            <View style={{ marginVertical: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <Checkbox
                  style={styles.checkbox}
                  value={AgreeStatus}
                  onValueChange={setAgreeStatus}
                />
                <Text style={(styles.paragraph, { marginRight: 30 })}>
                  Clicking on accept terms and conditions button whenever we are
                  registering on a website, downloading an app, or in our case
                  signing up for services or making an online purchase, is
                  legally binding.
                </Text>
              </View>
            </View>

            <Button mode="contained" onPress={Submit}>
              Submit
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {},
  formContainer: {
    marginHorizontal: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  applyText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
  },
  //Check Box
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkBoxContainer: {
    marginHorizontal: 0,
    marginTop: 20,
  },
  checkbox: {
    marginRight: 5,
  },
});
