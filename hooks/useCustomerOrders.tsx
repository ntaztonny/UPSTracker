import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";

const useCustomerOrders: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);
  return <div>useCustomerOrders</div>;
};

export default useCustomerOrders;
