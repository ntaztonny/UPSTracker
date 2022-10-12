//data returned by getCustomers query
export const customerQueryData = {
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

export const ordersQueryData = {
  getOrders: [
    {
      name: "-N6rOvLXK2t39x-Bp0UP",
      value: {
        Address: "123 Main St",
        City: "San Francisco",
        Lat: 37.7749295,
        Lng: -122.4194155,
        carrier: "ups",
        createdAt: "2022-08-04",
        shippingCost: 2,
        trackingId: "1Z881F5V0397269080",
        trackingItems: {
          customer: {
            email: "lucas.bill@example.com",
            name: "Lucas Bill",
          },
          customer_id: "-N6rOmxa7vOOTpZZSllL",
          items: [
            {
              item_id: 2943892,
              name: "Screen Protector",
              price: 10,
              quantity: 1,
            },
            {
              item_id: 2342342,
              name: "Evian Water bottle",
              price: 50,
              quantity: 5,
            },
          ],
        },
      },
    },
    {
      name: "-N6rQ_YDMNTjq_mCbhZN",
      value: {
        Address: "39 Long Beach",
        City: "Los Angeles",
        Lat: 33.769327,
        Lng: -118.192395,
        carrier: "ups",
        createdAt: "2022-08-01",
        shippingCost: 1,
        trackingId: "1Z4V180W0324616505",
        trackingItems: {
          customer: {
            email: "lucas.bill@example.com",
            name: "Lucas Bill",
          },
          customer_id: "-N6rOmxa7vOOTpZZSllL",
          items: [
            {
              item_id: 2903483,
              name: "iPad Pro 512gb",
              price: 1499,
              quantity: 1,
            },
            {
              item_id: 2903434,
              name: "iPad Pro 1Tb",
              price: 1799,
              quantity: 1,
            },
            {
              item_id: 2943892,
              name: "Screen Protector",
              price: 10,
              quantity: 1,
            },
          ],
        },
      },
    },
    {
      name: "-N6rQsEqX4vt-0cBA336",
      value: {
        Address: "Union Square",
        City: "San Fracisco",
        Lat: 37.78608,
        Lng: -122.41171,
        carrier: "ups",
        createdAt: "2022-08-04",
        shippingCost: 3,
        trackingId: "1ZCL1F5V0397269023",
        trackingItems: {
          customer: {
            email: "mandy.jones@example.com",
            name: "Mandy Jones",
          },
          customer_id: "-N6rQgCkbLPB1xElUchT",
          items: [
            {
              item_id: 3249082,
              name: "iPhone 13 Pro Max",
              price: 3200,
              quantity: 3,
            },
            {
              item_id: 2943892,
              name: "Screen Protector",
              price: 30,
              quantity: 3,
            },
          ],
        },
      },
    },
    {
      name: "-N6rQvnBSkz2kglMvr5H",
      value: {
        Address: "Santa Clara",
        City: "San Jose",
        Lat: 37.350755,
        Lng: -121.95648,
        carrier: "ups",
        createdAt: "2022-08-01",
        shippingCost: 2,
        trackingId: "1ZS31F5V039722343",
        trackingItems: {
          customer: {
            email: "salim.ali@example.com",
            name: "Salim Ali",
          },
          customer_id: "-N6rSJ4xI3_Cq7u58Wh_",
          items: [
            {
              item_id: 2349082,
              name: "Xbox One S",
              price: 560,
              quantity: 1,
            },
            {
              item_id: 2349084,
              name: "Xbox One X",
              price: 970,
              quantity: 2,
            },
            {
              item_id: 2349081,
              name: "Xbox One S Controllers",
              price: 149.99,
              quantity: 2,
            },
          ],
        },
      },
    },
    {
      name: "-N6rSQz62DlXFPbd32CD",
      value: {
        Address: "Brooklyn",
        City: "New York",
        Lat: 40.671505,
        Lng: -73.941563,
        carrier: "ups",
        createdAt: "2022-08-01",
        shippingCost: 3,
        trackingId: "1ZS31F5V0397294994",
        trackingItems: {
          customer: {
            email: "jane.xiu@example.com",
            name: "Jane Xiu",
          },
          customer_id: "-N6rSZB4AoMAwrDnm2jF",
          items: [
            {
              item_id: 233949,
              name: "83 Inch LG OLED TV",
              price: 2599,
              quantity: 1,
            },
            {
              item_id: 439033,
              name: "Smart TV Controller",
              price: 149.99,
              quantity: 1,
            },
          ],
        },
      },
    },
  ],
};
