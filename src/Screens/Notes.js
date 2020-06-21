import React, { useRef, useState } from "react";
import {
  View,
  Animated,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  SectionList,
  Linking,
  FlatList,
} from "react-native";
import { Button, Card, CardItem, Right, Icon } from "native-base";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const QBankData = [
  {
    id: "1",
    title: "Semester 4",
    screenname: "NotesDetailsScreen",
    screentype: "sem4",
  },
  {
    id: "2",
    title: "Semester 6",
    screenname: "NotesDetailsScreen",
    screentype: "sem6",
  },
  {
    id: "3",
    title: "Semester 8",
    screenname: "NotesDetailsScreen",
    screentype: "sem8",
  },
];

const DashBoard = ({ navigation }) => {
  return (
    <View
      style={{ backgroundColor: "#ffca28", marginBottom: 60, height: "100%" }}
    >
      <View
        style={{
          padding: 20,
          borderBottomWidth: 2,
        }}
      >
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Semester wise Notes
        </Text>
      </View>
      <View style={{ marginBottom: 100 }}>
        <FlatList
          data={QBankData}
          renderItem={({ item }) => (
            <View style={{ margin: "5%", marginBottom: 0 }}>
              <Card>
                <CardItem
                  button
                  onPress={() =>
                    navigation.navigate(item.screenname, {
                      screentype: item.screentype,
                    })
                  }
                  style={{ backgroundColor: "#cddc39" }}
                >
                  <Text style={{ fontSize: 18 }}>{item.title} </Text>
                  <Right>
                    <Icon name="arrow-forward" style={{ color: "black" }} />
                  </Right>
                </CardItem>
              </Card>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  cardHeader: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    color: "black",
  },
  cardBody: {
    borderBottomWidth: 3,
    backgroundColor: "#e0e0e0",
  },
  textFont18: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
