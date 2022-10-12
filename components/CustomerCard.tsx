import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useNavigation } from "@react-navigation/native";
import { CustomerScreenNavigationProp } from "../screens/CustomersScreen";
import { Card, Icon } from "@rneui/themed";

type Props = {
  email: string;
  name: string;
  userId: string;
};

const CustomerCard: React.FC<Props> = ({ email, name, userId }) => {
  // const { loading, error, orders } = useCustomerOrders(userId);
  const { orders } = useCustomerOrders(userId);
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MyModal", {
          userId: userId,
          name: name,
        });
      }}
    >
      <Card containerStyle={{ padding: 15, borderRadius: 7 }}>
        <View>
          <View className="flex-row justify-between">
            <View>
              <Text className="text-2xl font-bold">{name}</Text>
              <Text className="text-sm color-[#59C1CC]">ID: {userId}</Text>
            </View>
            <View className="flex-row items-center justify-end">
              <Text className="color-black">
                {orders === null ? "loading..." : `${orders.length}x`}
              </Text>
              <Icon
                style={{ marginBottom: 5, marginLeft: "auto" }}
                name="box"
                type="entypo"
                color="#59C1CC"
                size={50}
              />
            </View>
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
