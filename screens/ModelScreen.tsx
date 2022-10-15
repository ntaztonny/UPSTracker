import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import {
  CompositeNavigationProp,
  useNavigation,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { StackNavigatorParams } from "../navigator/StackNavigator";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<StackNavigatorParams, "MyModal">
>;
type modelScreenRouteProp = RouteProp<StackNavigatorParams, "MyModal">;

const ModelScreen = () => {
  const navigation = useNavigation();
  const {
    params: { name, userId },
  } = useRoute<modelScreenRouteProp>();
  const { orders } = useCustomerOrders(userId);
  const myorder = {
    carrier: "string",
    createdAt: "string",
    shippingCost: 136734,
    trackingId: "string",
    trackingItems: "TrackingItem",
    Lat: 8134348,
    Lng: 8264589,
    Address: "string",
    City: "string",
  };
  return (
    <View>
      <TouchableOpacity
        className="absolute right-5 top-5 z-10"
        onPress={navigation.goBack}
      >
        <Icon name="closecircle" type="antdesign" color="#59C1CC" />
      </TouchableOpacity>
      <View className="mt-10">
        <View className="py-5 border-b border-[#59C1CC]">
          <Text className="text-xl text-center font-bold">{name}</Text>
          <Text className="text-center italic text-sm">deliveries</Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 200 }}
        data={orders}
        keyExtractor={(order) => order?.trackingId}
        renderItem={({ item: order }) => <DeliveryCard order={order} />}
      />
      {/* <DeliveryCard order={myorder} /> */}
    </View>
  );
};

export default ModelScreen;
