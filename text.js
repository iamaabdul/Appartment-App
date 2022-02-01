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

import { Button } from "react-native-paper";

import Checkbox from "expo-checkbox";

const Test = () => {
  const [storageStatus, setstorageStatus] = useState(false);
  const [StorageUnit, setStorageUnit] = useState("none");

  const [CarstorageStatus, setCarstorageStatus] = useState(false);
  const [CarStorageUnit, setCarStorageUnit] = useState("none");

  return (
    <View style={{ marginTop: StatusBar.currentHeight }}>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Text style={styles.applyText}>Application Form</Text>
          <View style={styles.formContainer}>
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
          </View>
          <Button
            mode="contained"
            onPress={() => console.log(StorageUnit, CarStorageUnit)}
          >
            Submit
          </Button>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {},
  formContainer: {
    height: 800,
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
