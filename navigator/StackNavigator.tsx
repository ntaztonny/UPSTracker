import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomersScreen from "../screens/CustomersScreen";
import Home from "../screens/Home";
import TabNavigator from "./TabNavigator";

export type StakeNavigatorParams = {
  Main: undefined;
  MyModel: { userID: string; name: string };
  Order: { order: any };
};
const StackNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
