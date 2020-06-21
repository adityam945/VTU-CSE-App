import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, Linking } from "react-native";
import { Card, CardItem, Right, Button } from "native-base";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default NotesDetailsScreen = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { screentype } = route.params;

  useEffect(() => {
    fetch(
      `https://adityam945.github.io/CSE-Notes/${encodeURIComponent(
        screentype
      )}.json`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: "#ffca28" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Card>
                <CardItem style={{ backgroundColor: "#7cb342" }}>
                  <Text style={{ fontSize: 22 }}>{item.title}</Text>
                </CardItem>
              </Card>

              {item.data.map((item1, key) => {
                return (
                  <Card>
                    <CardItem
                      style={{
                        flexDirection: "column",
                        backgroundColor: "#cddc39",
                      }}
                    >
                      <Text style={{ fontSize: 18 }}>{item1.subname} </Text>
                      {item1.datamod.map((item2, key) => {
                        return (
                          <Card style={{ width: "100%" }}>
                            <CardItem style={{ backgroundColor: "#e6ee9c" }}>
                              <Text style={{ fontSize: 18 }}>{item2.name}</Text>

                              <Right style={{ justifyContent: "flex-end" }}>
                                <Button
                                  bordered
                                  light
                                  onPress={() => {
                                    Linking.openURL(item2.link);
                                  }}
                                  style={{ padding: 10, marginRight: 10 }}
                                >
                                  <MaterialCommunityIcons
                                    name="file-document"
                                    size={24}
                                    color="black"
                                  />
                                </Button>
                              </Right>
                            </CardItem>
                          </Card>
                        );
                      })}
                    </CardItem>
                  </Card>
                );
              })}
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};
