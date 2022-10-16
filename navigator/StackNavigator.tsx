import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomersScreen from "../screens/CustomersScreen";
import Home from "../screens/OrderScreen";
import TabNavigator from "./TabNavigator";
import ModelScreen from "../screens/ModelScreen";
import OrderScreen from "../screens/OrderScreen";

export type StackNavigatorParams = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: Order };
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();
const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyModal"
          component={ModelScreen}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
