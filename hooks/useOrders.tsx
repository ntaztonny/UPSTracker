import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";
import { ordersQueryData } from "../dummydata";

const useOrders = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!ordersQueryData) return;
    const orders: Order[] = ordersQueryData.getOrders.map(
      ({ value }: OrderResponse) => ({
        carrier: value.carrier,
        createdAt: value.createdAt,
        shippingCost: value.shippingCost,
        trackingId: value.trackingId,
        trackingItems: value.trackingItems,
        Address: value.Address,
        City: value.City,
        Lat: value.Lat,
        Lng: value.Lng,
      })
    );
    setOrders(orders);
  }, [data]);
  // return { loading, error, orders };
  return { orders };
};

export default useOrders;
