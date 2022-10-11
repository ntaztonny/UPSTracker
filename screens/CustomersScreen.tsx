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
import { StackNavigatorParams } from "../navigator/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import useOrders from "../hooks/useOrders";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../graphql/queries";
import CustomerCard from "../components/CustomerCard";

//types
export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<StackNavigatorParams>
>;

//dummy data
const data = {
  getCustomers: [
    {
      value: {
        email: "lucas.bill@example.com",
        name: "Lucas Bill",
      },
      name: "-N6rOmxa7vOOTpZZSllL",
    },
    {
      value: {
        email: "mandy.jones@example.com",
        name: "Mandy Jones",
      },
      name: "-N6rQgCkbLPB1xElUchT",
    },
    {
      value: {
        email: "salim.ali@example.com",
        name: "Salim Ali",
      },
      name: "-N6rSJ4xI3_Cq7u58Wh_",
    },
    {
      value: {
        email: "jane.xiu@example.com",
        name: "Jane Xiu",
      },
      name: "-N6rSZB4AoMAwrDnm2jF",
    },
    {
      value: {
        email: "john.doe@example.com",
        name: "John Doe",
      },
      name: "-N6rTRzW_JrkHQMdt5QA",
    },
  ],
};
//component
const CustomersScreen: React.FC = () => {
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input, setInput] = useState<string>("");
  //const { loading, error, data } = useQuery(GET_CUSTOMERS);

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

      {/*Change this when you dynamically get data: currently can't fetch data dynamically */}
      {/* {data?.getCustomers.map(
        ({ name: ID, value: { email, name } }: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} />
        )
      )}  */}
      {/*Change code portion above when you dynamically get data */}

      {data?.getCustomers
        ?.filter((customer) => customer.value.name.includes(input))
        .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} />
        ))}
    </ScrollView>
  );
};

export default CustomersScreen;
