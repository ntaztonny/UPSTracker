import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackNavigatorParams } from "../navigator/StackNavigator";

type Props = {
  item: Order;
};

type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<StackNavigatorParams, "Order">
>;

const OrderCard: React.FC<Props> = ({ item }) => {
  const navigation = useNavigation<OrderScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order", { order: item })}
    >
      <Card containerStyle={{ paddingHorizontal: 5, borderRadius: 8 }}>
        <View className="flex-row justify-between items-center ">
          <View>
            <Icon
              name="truck-delivery"
              color={"#EB6A7C"}
              type="material-community"
            />
            <Text className="text-xs">
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>
          <View>
            <Text className="text-gray-400 ">
              {item.carrier}-{item.trackingId}
            </Text>
            <Text className="text-gray-500 text-xl ">
              {item.trackingItems.customer.name}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="color-[#EB6A7C] text-sm items-center">
              {item.trackingItems.items.length} x
            </Text>
            <Icon style={{ marginLeft: 2 }} name="box" type="feather" />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;
