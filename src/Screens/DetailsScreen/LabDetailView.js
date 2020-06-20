import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Accordion,
  Body,
  Icon,
  Button,
  Tab,
  Tabs,
  ScrollableTab,
} from "native-base";
import ViewMoreText from "react-native-view-more-text";

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

export default function LabDetailView({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { labScreenType } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch(
      `https://adityam945.github.io/cse-labsylabus/${encodeURIComponent(
        labScreenType
      )}.json`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <View>
              <Card style={{ paddingBottom: 50 }}>
                <Tabs>
                  <Tab
                    heading="Lab 1"
                    tabStyle={{ backgroundColor: "red" }}
                    textStyle={{ color: "#fff" }}
                    activeTabStyle={{ backgroundColor: "red" }}
                    activeTextStyle={{
                      color: "#fff",
                      fontWeight: "normal",
                    }}
                  >
                    <Card>
                      <CardItem bordered header>
                        <View style={{ flex: 1, alignItems: "center" }}>
                          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            {item.labname}
                          </Text>
                          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            {item.labcode}
                          </Text>
                        </View>
                      </CardItem>
                      <CardItem>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                          {item.descname}
                        </Text>
                      </CardItem>
                      <CardItem style={{ paddingTop: 0 }}>
                        <View>
                          <ViewMoreText
                            numberOfLines={2}
                            renderViewMore={renderViewMore}
                            renderViewLess={renderViewLess}
                          >
                            <Text style={{ fontSize: 15 }}>
                              {item.descdata}
                            </Text>
                          </ViewMoreText>
                        </View>
                      </CardItem>
                      <CardItem bordered>
                        <Body>
                          <View style={styles.centeredView}>
                            <Modal
                              animationType="slide"
                              transparent={true}
                              visible={modalVisible}
                              onRequestClose={() => {
                                setModalVisible(!modalVisible);
                              }}
                            >
                              <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                  <Text style={styles.modalText}>
                                    {item.prgmlist}
                                  </Text>
                                  <View
                                    style={{
                                      paddingBottom: 20,
                                      height: "85%",
                                    }}
                                  >
                                    <ScrollView>
                                      <Text style={{ fontSize: 15 }}>
                                        {item.prgmlistdata}
                                      </Text>
                                    </ScrollView>
                                  </View>

                                  <TouchableHighlight
                                    style={{
                                      ...styles.openButton,
                                      backgroundColor: "#2196F3",
                                      marginBottom: 20,
                                      width: "100%",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                    onPress={() => {
                                      setModalVisible(!modalVisible);
                                    }}
                                  >
                                    <Text style={styles.textStyle}>Close</Text>
                                  </TouchableHighlight>
                                </View>
                              </View>
                            </Modal>

                            <TouchableHighlight
                              style={styles.openButton}
                              onPress={() => {
                                setModalVisible(true);
                              }}
                            >
                              <Text style={styles.textStyle}>
                                {item.prgmlist1}
                              </Text>
                            </TouchableHighlight>
                          </View>
                        </Body>
                      </CardItem>
                    </Card>
                  </Tab>
                  <Tab
                    heading="Lab 2"
                    tabStyle={{ backgroundColor: "red" }}
                    textStyle={{ color: "#fff" }}
                    activeTabStyle={{ backgroundColor: "red" }}
                    activeTextStyle={{
                      color: "#fff",
                      fontWeight: "normal",
                    }}
                  >
                    <Card>
                      <CardItem bordered header>
                        <View style={{ flex: 1, alignItems: "center" }}>
                          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            {item.labname1}
                          </Text>
                          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            {item.labcode1}
                          </Text>
                        </View>
                      </CardItem>
                      <CardItem>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                          {item.descname1}
                        </Text>
                      </CardItem>
                      <CardItem style={{ paddingTop: 0 }}>
                        <View>
                          <ViewMoreText
                            numberOfLines={2}
                            renderViewMore={renderViewMore}
                            renderViewLess={renderViewLess}
                          >
                            <Text style={{ fontSize: 15 }}>
                              {item.descdata1}
                            </Text>
                          </ViewMoreText>
                        </View>
                      </CardItem>
                      <CardItem bordered>
                        <Body>
                          <View style={styles.centeredView}>
                            <Modal
                              animationType="slide"
                              transparent={true}
                              visible={modalVisible}
                              onRequestClose={() => {
                                setModalVisible(!modalVisible);
                              }}
                            >
                              <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                  <Text style={styles.modalText}>
                                    {item.prgmlist1}
                                  </Text>
                                  <View
                                    style={{
                                      paddingBottom: 20,
                                      height: "85%",
                                    }}
                                  >
                                    <ScrollView>
                                      <Text style={{ fontSize: 15 }}>
                                        {item.prgmlistdata1}
                                      </Text>
                                    </ScrollView>
                                  </View>

                                  <TouchableHighlight
                                    style={{
                                      ...styles.openButton,
                                      backgroundColor: "#2196F3",
                                      marginBottom: 20,
                                      width: "100%",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                    onPress={() => {
                                      setModalVisible(!modalVisible);
                                    }}
                                  >
                                    <Text style={styles.textStyle}>Close</Text>
                                  </TouchableHighlight>
                                </View>
                              </View>
                            </Modal>

                            <TouchableHighlight
                              style={styles.openButton}
                              onPress={() => {
                                setModalVisible(true);
                              }}
                            >
                              <Text style={styles.textStyle}>
                                {item.prgmlist1}
                              </Text>
                            </TouchableHighlight>
                          </View>
                        </Body>
                      </CardItem>
                    </Card>
                  </Tab>
                </Tabs>
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
    marginTop: 12,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height: "90%",
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "orange",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 20,
  },
  textStyle1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
