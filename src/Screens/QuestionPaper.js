import React, { useRef, useState } from "react";
import {
  View,
  Animated,
  Image,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Right,
  List,
  ListItem,
  Icon,
  Left,
  Button,
  Separator,
  Tabs,
  Tab,
} from "native-base";
const data17cs = [
  {
    id: "1",
    semno: "Semester 3",
    syllabusDesc: "View Question Papers",
    screenname: "QPDetailsScreen",
    screenType: "sem3Syllabus17",
  },
  {
    id: "2",
    semno: "Semester 4",
    syllabusDesc: "View Question Papers",
    screenname: "QPDetailsScreen",
    screenType: "sem4Syllabus17",
  },
  {
    id: "3",
    semno: "Semester 5",
    syllabusDesc: "View Question Papers",
    screenname: "QPDetailsScreen",
    screenType: "sem5Syllabus17",
  },
  {
    id: "4",
    semno: "Semester 6",
    syllabusDesc: "View Question Papers",
    screenname: "QPDetailsScreen",
    screenType: "sem6Syllabus17",
  },
  {
    id: "5",
    semno: "Semester 7",
    syllabusDesc: "View Question Papers",
    screenname: "QPDetailsScreen",
    screenType: "sem7Syllabus17",
  },
  {
    id: "6",
    semno: "Semester 8",
    syllabusDesc: "View Question Papers",
    screenname: "QPDetailsScreen",
    screenType: "sem8Syllabus17",
  },
];

const H_MAX_HEIGHT = 250;
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
              Semester wise Question Papers
            </Text>
          </View>
          <Tabs style={{ borderWidth: 2 }}>
            <Tab
              heading="17CSx(17 Scheme)"
              tabStyle={{ backgroundColor: "red" }}
              textStyle={{ color: "#fff" }}
              activeTabStyle={{ backgroundColor: "green" }}
              activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
              style={{
                borderBottomWidth: 2,
              }}
            >
              <View style={{ flex: 1, padding: 24, backgroundColor: "white" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                  }}
                >
                  Syllabus 17 Scheme
                </Text>
                <FlatList
                  data={data17cs}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <View style={{ backgroundColor: "white" }}>
                      <Content padder>
                        <Card>
                          <CardItem
                            header
                            bordered
                            style={{ backgroundColor: "#bdbdbd" }}
                          >
                            <Text style={styles.cardHeader}>{item.semno}</Text>
                          </CardItem>

                          <CardItem
                            footer
                            bordered
                            button
                            onPress={() =>
                              navigation.navigate(item.screenname, {
                                screenType: item.screenType,
                              })
                            }
                          >
                            <Text style={styles.textFont18}>
                              {item.syllabusDesc}
                            </Text>
                            <Right>
                              <Icon name="arrow-forward" />
                            </Right>
                          </CardItem>
                          {/* Lab Fecth*/}
                        </Card>
                      </Content>
                    </View>
                  )}
                />
              </View>
            </Tab>
            <Tab
              heading="18CSx(18 Scheme)"
              tabStyle={{ backgroundColor: "red" }}
              textStyle={{ color: "#fff" }}
              activeTabStyle={{ backgroundColor: "green" }}
              activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
              style={{ borderWidth: 2 }}
            >
              <Text>Not Yet Added </Text>
            </Tab>
          </Tabs>
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
          backgroundColor: "skyblue",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 28, textAlign: "center" }}>
          Question Paper Section
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
});
