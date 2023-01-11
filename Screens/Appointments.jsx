import React, { useState, useEffect, useContext } from "react";
import { getAppointmentByUsername } from "../api.js";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { UserContext } from "../context/UserContext.js";
import customStyles from "../styles/customStyles.js";
import { format } from "date-fns";
import { AppointmentContext } from "../context/AppointmentBooked.js";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const { appointmentBooked } = useContext(AppointmentContext);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.username === undefined) return
    setLoading(true);
    getAppointmentByUsername(user.username).then((results) => {
      setAppointments(results);
      setLoading(false);
      return results;
    }).catch((err) => {
      setLoading(false);
      console.log(err)
    });

  }, [appointmentBooked, user.username]);

  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return (
    <SafeAreaView style={customStyles.container}>
      <View style={customStyles.usercontainer}>
        <Text style={customStyles.loggedinuser}>Welcome {user.firstName}</Text>
      </View>
      <Image
        style={customStyles.logo}
        source={require("../assets/Barber.png")}
        />

      <ActivityIndicator animating={loading} size="large" color="#fff" />
        {!user.username ? <View><Text style={customStyles.appointmentHeader}>Please log in to view your appointments</Text></View> : 
<View>
      <Text style={customStyles.appointmentHeader}>Future Appointments </Text> 
     {appointments && 
     <View style={customStyles.appointmentContainer}>
        <FlatList
          keyExtractor={(item) => item._id}
          data={appointments}
          renderItem={({ item }) => {
            const apptDate = new Date(item.date);
            if (apptDate >= currentDate) {
              return (
                <Text style={customStyles.textStyle}>
                  {item.time + " on "}
                  {format(new Date(item.date), "EEEEEEEEE dd-MMM")}
                </Text>
              );
            }
          }}
        />
      </View>
}

      <Text style={customStyles.appointmentHeader}>Past Appointments </Text>
      <View style={customStyles.appointmentContainer}>
        <FlatList
          keyExtractor={(item) => item._id}
          data={appointments}
          renderItem={({ item }) => {
            const apptDate = new Date(item.date);
            if (apptDate < currentDate) {
              return (
                <Text style={customStyles.textStyle}>
                  {item.time + " on "}
                  {format(new Date(item.date), "EEEEEEEEE dd-MMM")}
                </Text>
              );
            }
          }}
        />
      </View>
      </View>
        }
    </SafeAreaView>
  );
};

export default Appointments;
