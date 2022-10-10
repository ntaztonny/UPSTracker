import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { StakeNavigatorParams } from "../navigator/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//types
export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<StakeNavigatorParams>
>;

//component
const CustomersScreen: React.FC = () => {
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <ScrollView className="bg-[#59C1CC]">
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        className="w-full h-64"
      />
      <TextInput
        placeholder="Search by customer"
        value={input}
        onChangeText={setInput}
        className="bg-white py-7 px-10"
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  Img: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
});
export default CustomersScreen;
