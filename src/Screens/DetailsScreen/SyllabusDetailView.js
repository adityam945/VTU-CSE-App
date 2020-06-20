import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
  StyleSheet,
} from "react-native";
import ViewMoreText from "react-native-view-more-text";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Accordion,
  Body,
  Icon,
  Tab,
  Tabs,
  ScrollableTab,
} from "native-base";

function renderViewMore(onPress) {
  return (
    <Text onPress={onPress} style={{ color: "blue" }}>
      View Complete Module Syllubus
    </Text>
  );
}
function renderViewLess(onPress) {
  return (
    <Text onPress={onPress} style={{ color: "blue" }}>
      Show less
    </Text>
  );
}

//
function renderViewMoreDesc(onPress) {
  return (
    <Text onPress={onPress} style={{ color: "tomato" }}>
      All Prescribed Text Books
    </Text>
  );
}
function renderViewLessDesc(onPress) {
  return (
    <Text onPress={onPress} style={{ color: "tomato" }}>
      Show less
    </Text>
  );
}

export default function DetailsScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { screenType } = route.params;

  useEffect(() => {
    fetch(
      `https://adityam945.github.io/cse-syllabus/${encodeURIComponent(
        screenType
      )}.json`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{ flex: 1 }}
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <View style={{ textAlign: "center" }}>
              <Card>
                <CardItem
                  header
                  bordered
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 4,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>{item.subcode} </Text>
                    <Text>{item.subname}</Text>
                  </View>
                </CardItem>

                <CardItem bordered style={{ borderBottomWidth: 2 }}>
                  <Body>
                    <Tabs renderTabBar={() => <ScrollableTab />}>
                      <Tab
                        heading={item.m1}
                        tabStyle={{ backgroundColor: "red" }}
                        textStyle={{ color: "#fff" }}
                        activeTabStyle={{ backgroundColor: "red" }}
                        activeTextStyle={{
                          color: "#fff",
                          fontWeight: "normal",
                        }}
                        style={{ paddingBottom: 10 }}
                      >
                        <ViewMoreText
                          numberOfLines={5}
                          renderViewMore={renderViewMore}
                          renderViewLess={renderViewLess}
                        >
                          <Text>{item.m1desc}</Text>
                        </ViewMoreText>
                      </Tab>
                      <Tab
                        heading={item.m2}
                        tabStyle={{ backgroundColor: "red" }}
                        textStyle={{ color: "#fff" }}
                        activeTabStyle={{ backgroundColor: "red" }}
                        activeTextStyle={{
                          color: "#fff",
                          fontWeight: "normal",
                        }}
                      >
                        <ViewMoreText
                          numberOfLines={5}
                          renderViewMore={renderViewMore}
                          renderViewLess={renderViewLess}
                        >
                          <Text>{item.m2desc}</Text>
                        </ViewMoreText>
                      </Tab>
                      <Tab
                        heading={item.m3}
                        tabStyle={{ backgroundColor: "red" }}
                        textStyle={{ color: "#fff" }}
                        activeTabStyle={{ backgroundColor: "red" }}
                        activeTextStyle={{
                          color: "#fff",
                          fontWeight: "normal",
                        }}
                      >
                        <ViewMoreText
                          numberOfLines={5}
                          renderViewMore={renderViewMore}
                          renderViewLess={renderViewLess}
                        >
                          <Text>{item.m3desc}</Text>
                        </ViewMoreText>
                      </Tab>
                      <Tab
                        heading={item.m4}
                        tabStyle={{ backgroundColor: "red" }}
                        textStyle={{ color: "#fff" }}
                        activeTabStyle={{ backgroundColor: "red" }}
                        activeTextStyle={{
                          color: "#fff",
                          fontWeight: "normal",
                        }}
                      >
                        <ViewMoreText
                          numberOfLines={5}
                          renderViewMore={renderViewMore}
                          renderViewLess={renderViewLess}
                        >
                          <Text>{item.m4desc}</Text>
                        </ViewMoreText>
                      </Tab>
                      <Tab
                        heading={item.m5}
                        tabStyle={{ backgroundColor: "red" }}
                        textStyle={{ color: "#fff" }}
                        activeTabStyle={{ backgroundColor: "red" }}
                        activeTextStyle={{
                          color: "#fff",
                          fontWeight: "normal",
                        }}
                      >
                        <ViewMoreText
                          numberOfLines={5}
                          renderViewMore={renderViewMore}
                          renderViewLess={renderViewLess}
                        >
                          <Text>{item.m5desc}</Text>
                        </ViewMoreText>
                      </Tab>
                    </Tabs>
                  </Body>
                </CardItem>
                <Card>
                  <CardItem>
                    <Text style={styles.headerText}>{item.descname}</Text>
                  </CardItem>
                  <CardItem style={{ paddingTop: 0 }}>
                    <ViewMoreText
                      numberOfLines={3}
                      renderViewMore={renderViewMoreDesc}
                      renderViewLess={renderViewLessDesc}
                    >
                      <Text>{item.descdata}</Text>
                    </ViewMoreText>
                  </CardItem>
                </Card>
              </Card>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    width: "85%",
    height: "95%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  openButton: {
    backgroundColor: "tomato",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
  },
  modalTextHeading: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalTextBody: {
    marginBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
  },
  modalTextViewContainer: {
    borderBottomWidth: 5,
    borderWidth: 2,
    marginBottom: 5,
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 0,
    flex: 1,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    paddingBottom: 0,
    backgroundColor: "#fff",
  },
  showModelButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",

    flex: 1,
  },
});
