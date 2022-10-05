import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import CustomersScreen from "./screens/CustomersScreen";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigator/StackNavigator";
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
