import React from "react";
import { Image, StyleSheet, View, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import {
  Feather,
  AntDesign,
  FontAwesome,
  Foundation,
} from "@expo/vector-icons";
import { Block, Button, Text } from "expo-ui-kit";
import { LinearGradient } from "expo-linear-gradient";
import * as AppData from "../../app.json";

// screens
import DashBoard from "../Screens/DashBoard";
import QuestionPaper from "../Screens/QuestionPaper";
import QBank from "../Screens/QBank";
import Notes from "../Screens/Notes";
import About from "../Screens/About";

import SyllabusDetailView from "../Screens/DetailsScreen/SyllabusDetailView";
import LabDetailView from "../Screens/DetailsScreen/LabDetailView";
import LabPartDetailView from "../Screens/DetailsScreen/LabPartDetailView";
import QPDetailsScreen from "../Screens/QPDetailsScreen/QPDetailsScreen";
import QBankDetails from "../Screens/QBankDetailsScreen/QBankDetails";
import NotesDetailsScreen from "../Screens/NotesDetailsScreen/NotesDetailsScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DashBoardRoot({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",

          headerStyle: { backgroundColor: "#aed581" },

          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={26}
                color="black"
                style={{ paddingHorizontal: 10 }}
              />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="SyllabusDetailView"
        options={{
          headerTitle: "Subject Syllabus",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 20 },
          headerStyle: { backgroundColor: "#aed581" },
        }}
        component={SyllabusDetailView}
      />
      <Stack.Screen
        name="LabDetailView"
        options={{
          headerTitle: "Laboratory Syllabus",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 20 },
          headerStyle: { backgroundColor: "#aed581" },
        }}
        component={LabDetailView}
      />
      <Stack.Screen
        name="LabPartDetailView"
        options={{
          headerTitle: "Laboratory Syllabus",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 20 },
          headerStyle: { backgroundColor: "#aed581" },
        }}
        component={LabPartDetailView}
      />
    </Stack.Navigator>
  );
}

function QuestionPaperRoot({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QuestionPaper"
        component={QuestionPaper}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",

          headerStyle: { backgroundColor: "#aed581" },

          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={26}
                color="black"
                style={{ paddingHorizontal: 10 }}
              />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="QPDetailsScreen"
        component={QPDetailsScreen}
        options={{
          headerTitle: "Subject Question Papers",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 20 },
          headerStyle: { backgroundColor: "#aed581" },
        }}
      />
    </Stack.Navigator>
  );
}

function QBankRoot({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QBank"
        component={QBank}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitle: "Question Bank",

          headerStyle: { backgroundColor: "#aed581" },

          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={26}
                color="black"
                style={{ paddingHorizontal: 10 }}
              />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="QBankDetails"
        component={QBankDetails}
        options={{
          headerTitle: "",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 20 },
          headerStyle: { backgroundColor: "#aed581" },
        }}
      />
    </Stack.Navigator>
  );
}

function NotesRoot({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitle: "Question Bank",

          headerStyle: { backgroundColor: "#aed581" },

          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={26}
                color="black"
                style={{ paddingHorizontal: 10 }}
              />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="NotesDetailsScreen"
        component={NotesDetailsScreen}
        options={{
          headerTitle: "",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 20 },
          headerStyle: { backgroundColor: "#aed581" },
        }}
      />
    </Stack.Navigator>
  );
}

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "black",
          headerTitleAlign: "center",

          headerStyle: { backgroundColor: "#aed581" },

          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={26}
                color="black"
                style={{ paddingHorizontal: 10 }}
              />
            </Button>
          ),
        }}
      >
        <Stack.Screen
          name="Home"
          headerTitle="Home"
          options={{ headerShown: false }}
        >
          {(props) => <DashBoardRoot {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="QuestionPaper"
          headerTitle="Question Papers"
          options={{ headerShown: false }}
        >
          {(props) => <QuestionPaperRoot {...props} />}
        </Stack.Screen>
        <Stack.Screen name="QBank" options={{ headerShown: false }}>
          {(props) => <QBankRoot {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Notes" options={{ headerShown: false }}>
          {(props) => <NotesRoot {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="About"
          options={{
            headerTitle: "About",
            headerRight: () => (
              <Button
                transparent
                onPress={() =>
                  Alert.alert(
                    "All the data is from backend API or JSON data from git page"
                  )
                }
              >
                <Feather
                  name="info"
                  size={18}
                  color="black"
                  style={{ paddingHorizontal: 10 }}
                />
              </Button>
            ),
          }}
        >
          {(props) => <About {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <Block>
        <Block flex={0.4} margin={20} bottom top marginLeft={15} width="100%">
          <Image
            square
            style={{
              height: 100,
              width: 100,
              position: "absolute",
              alignSelf: "center",
              top: 50,
              left: 65,
            }}
            source={require("../../assets/sideLogo.png")}
          />
          <Text
            white
            title
            alignItems
            style={{
              fontSize: 22,
              textAlign: "center",
              right: 25,
              color: "black",
            }}
          >
            VTU CSE
          </Text>
        </Block>

        <Block>
          <DrawerItem
            label="Dash Board"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate("Home")}
            icon={() => <FontAwesome name="dashcube" size={24} color="black" />}
          />
          <DrawerItem
            label="Question Bank"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate("QBank")}
            icon={() => <AntDesign name="hdd" size={24} color="black" />}
          />
          <DrawerItem
            label="Notes"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate("Notes")}
            icon={() => (
              <Foundation name="clipboard-notes" size={24} color="black" />
            )}
          />
        </Block>
      </Block>

      <Block flex={false} style={{ width: "100%" }}>
        <DrawerItem
          label="About"
          labelStyle={{
            color: "black",
            marginLeft: -15,
            width: 300,
            fontSize: 16,
          }}
          style={styles.drawerItem}
          onPress={() => props.navigation.navigate("About")}
          icon={() => <AntDesign name="info" color="black" size={18} />}
        />

        <Text style={{ fontSize: 12, color: "black", textAlign: "center" }}>
          {AppData.expo.version}
        </Text>
      </Block>
    </DrawerContentScrollView>
  );
};

export default () => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#81c784", "#aed581"]}>
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "white",
          inactiveTintColor: "white",
          width: "100%",
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={(props) => {
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
  },
  drawerStyles: { flex: 1, width: "70%", backgroundColor: "transparent" },
  drawerItem: { alignItems: "flex-start", marginVertical: 5 },
  drawerLabel: { color: "black", marginLeft: -1, fontSize: 22, width: 165 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: "white",
    borderWidth: StyleSheet.hairlineWidth,
  },
});
