import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Platform,
  TouchableOpacity,
  Button,
  Linking,
} from "react-native";

export default class App extends Component {
  constructor() {
    super();

    this.tmpArray = [
      {
        subjname: "Subj 1",
        subjcode: "17CSx",
        year: "Dec2019/Jan2020",
        link:
          "https://github.com/adityam945/ImageUploads/raw/master/How%20to%20Reset%20Password.pdf",
      },
      {
        subjname: "Subj 2",
        subjcode: "17CSx",
        year: "MonYY/MonYY",
        link: "https://www.google.com",
      },
    ];
  }

  showArrayItem = (item) => {
    Alert.alert(item);
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 28 }}>This is a dummy return screen</Text>
        <View />
        <ScrollView>
          {this.tmpArray.map((item, key) => (
            <TouchableOpacity
              key={key}
              onPress={this.showArrayItem.bind(this, item.name)}
            >
              <Text style={styles.TextStyle}>
                Subject Name = {item.subjname}{" "}
              </Text>

              <Text style={styles.TextStyle}>
                Subject code = {item.subjcode}{" "}
              </Text>

              <Text style={styles.TextStyle}>Year/Term = {item.year} </Text>
              <View>
                <Text>This opens up default Browser</Text>
                <Button
                  title="View Question Paper"
                  onPress={() => Linking.openURL(item.link)}
                  style={{ flex: 1 }}
                />
              </View>

              <View
                style={{ width: "100%", height: 1, backgroundColor: "#000" }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 2,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
  },

  TextStyle: {
    fontSize: 20,
    color: "#000",
    textAlign: "left",
  },
});
