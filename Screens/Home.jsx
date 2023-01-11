import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Browse from "./Browse.jsx";


const Tab = createBottomTabNavigator();

function Home() {
    return (
      <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: {
            backgroundColor: "black",
            paddingTop: 5,
            tabBarIconStyle: { display: "none" },
          },
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="login"
              color={"white"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: {
            backgroundColor: "black",
            paddingTop: 5,
          },
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="calendar-month"
              color={"white"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: {
            backgroundColor: "black",
            paddingTop: 5,
          },
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="card-account-details"
              color={"white"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
    );
  }

  export default Home;