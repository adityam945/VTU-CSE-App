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
import { Button, Card, CardItem, Right, Left } from "native-base";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const QBankData = [
  {
    title: "Semester 3",
    data: [
      {
        name: "Computer Organisation",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs3_Computer_orgn.docx?raw=true",
      },
      {
        name: "Data Structures",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs3_data_struct.docx?raw=true",
      },
    ],
  },
  {
    title: "Semester 4",
    data: [
      {
        name: "Data Communication",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs4_DC.docx?raw=true",
      },
      {
        name: "Object Oriented Concepts",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs4_OOC.docx?raw=true",
      },
    ],
  },
  {
    title: "Semester 5",
    data: [
      {
        name: "Automata Theory ",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs5_ATC.doc?raw=true",
      },
      {
        name: "Advance Java J2EE",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs5_advancejava.docx?raw=true",
      },
      {
        name: "DBMS",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs5_dbms.docx?raw=true",
      },
    ],
  },
  {
    title: "Semester 6",
    data: [
      {
        name: "Computer Graphics",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs6_CG.doc?raw=true",
      },
      {
        name: "SS and CD",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs6_SSnCD.docx?raw=true",
      },
    ],
  },
  {
    title: "Semester 7",
    data: [
      {
        name: "Machine Learning",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs7_ML.docx?raw=true",
      },
      {
        name: "Web Technology",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs7_web.docx?raw=true",
      },
    ],
  },
  {
    title: "Semester 8",
    data: [
      {
        name: "ACA",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs8_ACA.docx?raw=true",
      },
      {
        name: "Big Data Analytics",
        screen: "QBankDetails",
        link:
          "https://github.com/adityam945/CSE-Uploads-Notes/blob/master/17cs8_BDA.docx?raw=true",
      },
    ],
  },
];
const H_MAX_HEIGHT = 150;
const H_MIN_HEIGHT = 65;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const DashBoard = ({ navigation }) => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#ffca28" }}>
      <ScrollView
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollOffsetY } } },
        ])}
        scrollEventThrottle={16}
      >
        <View style={{ paddingTop: H_MAX_HEIGHT }}>
          <View
            style={{
              padding: 20,
              borderBottomWidth: 2,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Semester wise Question Bank
            </Text>
          </View>

          <SectionList
            sections={QBankData}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View>
                <Card
                  style={{
                    marginLeft: "2%",
                    marginRight: "2%",
                    borderWidth: 4,
                  }}
                >
                  <CardItem style={{ flex: 1, backgroundColor: "#e6ee9c" }}>
                    <Text style={styles.item}>{item.name}</Text>

                    <Right
                      style={{
                        flexDirection: "row",
                        flex: 1,
                        marginRight: 0,
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        bordered
                        light
                        onPress={() =>
                          navigation.navigate(item.screen, {
                            link: item.link,
                          })
                        }
                        style={{ padding: 10, marginRight: 10 }}
                      >
                        <MaterialCommunityIcons
                          name="file-document"
                          size={24}
                          color="black"
                        />
                      </Button>
                      <Button
                        bordered
                        light
                        onPress={() => Linking.openURL(item.link)}
                        style={{ padding: 10, marginLeft: 10 }}
                      >
                        <AntDesign name="download" size={24} color="black" />
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Card>
                <CardItem style={{ backgroundColor: "#cddc39" }}>
                  <Text style={styles.sectionHeader}>{title}</Text>
                </CardItem>
              </Card>
            )}
          />
        </View>
      </ScrollView>

      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: headerScrollHeight,
          width: "100%",
          overflow: "hidden",
          zIndex: 999,
          // STYLE
          borderBottomColor: "#EFEFF4",
          borderBottomWidth: 0,
          backgroundColor: "#fff59d",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 28, textAlign: "center" }}>
          Question Bank Section
        </Text>
      </Animated.View>
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
