import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginStack from "./LoginStack";
import RegisterStack from "./RegisterStack";
import BrowseStack from "./BrowseStack";
import AppointmentStack from "./AppointmentStack"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.js";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { user, setUser } = useContext(UserContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={user.username ? "Logout" : "Login/Register"}
        component={LoginStack}
        // component={user.username ? LoginStack {{loggedin: yes}} : LoginStack {{loggedin: yes}}}
        
        // initialParams={user.username ? setUser({}) : setUser({user})}
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
              // name="login"
              name={user.username ? "logout" : "login"}
              color={"white"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseStack}
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
        name="Appointments"
        component={AppointmentStack}
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
              name="clipboard-text-search-outline"
              color={"white"}
              size={size}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Register"
        component={RegisterStack}
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
      /> */}
    </Tab.Navigator>
  );
}
