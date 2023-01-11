import React, { useState, useEffect, useContext } from "react";
import { getAllAppointments } from "../api.js";
import {
  View,
  Image,
  Button,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { format } from "date-fns";
import { UserContext } from "../context/UserContext.js";
import { AppointmentContext } from "../context/AppointmentBooked.js";
import customStyles from "../styles/customStyles.js";

const Browse = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const { appointmentBooked } = useContext(AppointmentContext);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    getAllAppointments().then((results) => {
      setAppointments(results);

      setLoading(false);
      return results;
    });
  }, [appointmentBooked]);

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
      <ScrollView>
        <View style={customStyles.browsecontainer}>
          {appointments.map((appointment) => {
            return (
              <View key={appointment._id}>
                <Pressable
                  style={[
                    customStyles.id,
                    {
                      backgroundColor:
                        appointment.count === 0
                          ? "#cc3232"
                          : appointment.count < 4
                          ? "#de6573"
                          : appointment.count < 8
                          ? "#db7b2b"
                          : "#8cb822",
                    },
                  ]}
                  onPress={() => {
                    navigation.navigate("TimeSlots", {
                      appointment: appointment._id,
                    });
                  }}
                >
                  {/* <Text>{format(new Date(appointment._id), "MM/dd/yyyy")}</Text> */}
                  <Text style={styles.dateText}>
                    {format(new Date(appointment._id), "E")}
                  </Text>
                  <Text style={styles.dateText}>
                    {format(new Date(appointment._id), "dd-MMM")}
                  </Text>
                  <Text>{appointment.count} available</Text>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Browse;
