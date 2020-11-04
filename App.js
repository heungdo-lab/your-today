import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { UserProvider } from "./src/context/UserContext";

import AppStack from "./src/stacks/AppStack";

export default App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </UserProvider>
  );
};
