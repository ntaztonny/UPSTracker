import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import CustomersScreen from "./screens/CustomersScreen";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text className="text-red-500">
          Open up App.tsx to start working on your app!
        </Text>
        <CustomersScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}
