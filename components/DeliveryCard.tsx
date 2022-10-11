import { View, Text } from "react-native";
import React from "react";
import { Card, Divider, Icon } from "@rneui/themed";
import { TabItem } from "@rneui/base/dist/Tab/Tab.Item";
import MapView, { Marker } from "react-native-maps";
import { fromPromise } from "@apollo/client";
type Props = {
  order: Order;
};

const DeliveryCard: React.FC<Props> = ({ order }) => {
  return (
    <Card
      containerStyle={{
        backgroundColor: "#59C1CC",
        borderRadius: 15,
        marginVertical: 15,
        padding: 0,
        paddingTop: 16,
        paddingBottom: 16,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}
    >
      <View>
        <Icon name="box" type="entypo" size={50} color="white" />
        <View>
          <Text className="text-xs text-center uppercase text-white font-bold">
            {order.carrier} - {order.trackingId}
          </Text>
          <Text className="text-white text-center text-lg font-bold">
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>
          <Divider color="white" />
        </View>
        <View className="mx-auto pb-10">
          <Text className="text-base text-center text-white font-bold mt-5">
            Address
          </Text>
          <Text className="text-sm text-center text-white">
            {order.Address}, {order.City}
          </Text>
          <Text className="text-sm text-center italic text-white">
            Shipping Cost: {order.shippingCost} €
          </Text>
        </View>
      </View>

      <Divider color="white" />
      <View className="p-5">
        {order.trackingItems.items.map((item) => (
          <View className="flex-row justify-between items-center">
            <Text className="text-sm italic text-white">{item.name}</Text>
            <Text className="text-xl text-white">{item.quantity}</Text>
          </View>
        ))}
      </View>
      <MapView
        initialRegion={{
          latitude: order.Lat,
          longitude: order.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="w-full h-20"
      >
        {order.Lat && order.Lng && (
          <Marker
            coordinate={{ latitude: order.Lat, longitude: order.Lng }}
            title="Delivery Location"
            description={order.Address}
            identifier="destination"
          />
        )}
      </MapView>
    </Card>
  );
};

export default DeliveryCard;
