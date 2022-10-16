import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { OrdersScreenNavigationProp } from "./OrdersScreen";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigatorParams } from "../navigator/StackNavigator";
import DeliveryCard from "../components/DeliveryCard";

type OrderScreenRouteProp = RouteProp<StackNavigatorParams, "Order">;
export type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<StackNavigatorParams, "Order">
>;

const OrderScreen: React.FC = () => {
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const {
    params: { order },
  } = useRoute<OrderScreenRouteProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTintColor: "#EB6A7C",
      headerTitleStyle: { color: "black" },
      headerBackTitle: "Deliveries",
    });
  }, [order]);
  return <DeliveryCard order={order} fullWidth />;
};

export default OrderScreen;
