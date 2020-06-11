import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavContainer from "./src/Navigator/NavContainer";
import DashBoard from "./src/Screens/DashBoard";

export default () => {
  return (
    <NavigationContainer>
      <NavContainer />
    </NavigationContainer>
  );
};
