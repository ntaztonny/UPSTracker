import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import CustomersScreen from "./screens/CustomersScreen";

export default function App() {
  return (
    <SafeAreaView>
      <Text className="text-red-500">
        Open up App.tsx to start working on your app!
      </Text>
      <CustomersScreen />
    </SafeAreaView>
  );
}
