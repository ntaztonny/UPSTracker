import { View, Text, ScrollView, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { StackNavigatorParams } from "../navigator/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useOrders from "../hooks/useOrders";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { Button } from "@rneui/base";
import OrderCard from "../components/OrderCard";

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<StackNavigatorParams>
>;

const OrdersScreen: React.FC = () => {
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const { orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({ focused, color }) => (
        <Text style={{ color: focused ? "#EB6A7C" : color, marginLeft: 12 }}>
          Orders
        </Text>
      ),
    });
  }, []);

  return (
    <ScrollView className="bg-[#EB6A7C]">
      <Image
        source={{ uri: "https://links.papareact.com/m51" }}
        className="w-full h-64"
      />
      <Button
        color={"pink"}
        titleStyle={{ color: "gray", fontWeight: "400" }}
        style={{ paddingHorizontal: 5, paddingVertical: 2 }}
      >
        {ascending ? "showing: Orldest First" : "Showing: Most recent"}
      </Button>

      {orders
        ?.sort((a, b) => {
          if (ascending) {
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
          } else {
            return new Date(b.createdAt) < new Date(a.createdAt) ? 1 : -1;
          }
        })
        .map((order) => (
          <OrderCard key={order.trackingId} item={order} />
        ))}
    </ScrollView>
  );
};

export default OrdersScreen;
