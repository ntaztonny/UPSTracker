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

const Stack = createNativeStackNavigator();
const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
