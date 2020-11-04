import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { UserContext } from "../context/UserContext";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

export default AppStackScreens = () => {
  const AppStack = createStackNavigator();
  const [user] = useContext(UserContext);

  return (
    <AppStack.Navigator headerMode="none">
      {user.isLoggedIn ? (
        <AppStack.Screen name="Main" component={MainStack} />
      ) : (
        <AppStack.Screen name="Auth" component={AuthStack} />
      )}
    </AppStack.Navigator>
  );
};
