import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LaunchScreen from "@Containers/LaunchScreen";
import ListFood from "@Containers/Foods/ListFood";
import DetailFood from "@Containers/Foods/DetailFood";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LaunchScreen">
        <Stack.Screen
          name="LaunchScreen"
          component={LaunchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListFoods"
          component={ListFood}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailFood"
          component={DetailFood}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
