import { View, Text } from "react-native";
import React from "react";
import { Card, Divider, Icon } from "@rneui/themed";
import { TabItem } from "@rneui/base/dist/Tab/Tab.Item";
import MapView, { Marker } from "react-native-maps";
import { fromPromise } from "@apollo/client";
type Props = {
  order: Order;
  fullWidth?: Boolean;
};

const DeliveryCard: React.FC<Props> = ({ order, fullWidth }) => {
  return (
    <Card
      containerStyle={{
        backgroundColor: fullWidth ? "#EB6A7C" : "#59C1CC",
        borderRadius: fullWidth ? 0 : 15,
        marginVertical: fullWidth ? 0 : 15,
        marginHorizontal: fullWidth ? 0 : 15,
        padding: 0,
        paddingTop: 16,
        paddingBottom: 0,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        height: fullWidth ? "100%" : "auto",
      }}
    >
      <View>
        {/* <View style={fullWidth && { height: "100%" }}> */}
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
          <View
            key={item.item_id}
            className="flex-row justify-between items-center"
          >
            <Text className="text-sm italic text-white">{item.name}</Text>
            <Text className="text-xl text-white">x{item.quantity}</Text>
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
        className="w-full h-64"
        style={{ flexGrow: 1 }}
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
