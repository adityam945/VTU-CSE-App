import * as React from "react";
import { Button, View, Text } from "react-native";
import * as AppData from "../../app.json";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <Text style={{ fontSize: 18 }}>About Screen</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: "10%",
        }}
      >
        <Text style={{ fontSize: 14 }}>
          {"Version of APP\t"}:{AppData.expo.version}{" "}
        </Text>
      </View>
    </View>
  );
}
