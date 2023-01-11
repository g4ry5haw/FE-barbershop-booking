import { useEffect, useContext } from "react";
import { Image, Text, SafeAreaView, StyleSheet, Alert } from "react-native";
import { postAppointment } from "../api";
import { format } from "date-fns";
import { UserContext } from "../context/UserContext.js";
import { AppointmentContext } from "../context/AppointmentBooked.js";
import customStyles from "../styles/customStyles";

const SuccessPayment = ({ route }) => {
  const timeSlot = route.params.timeSlot;
  const timeSlotDate = format(new Date(timeSlot.date), "EEEEEEEEE dd-MMM");

  const { user } = useContext(UserContext);
  const { setAppointmentBooked, appointmentBooked } =
    useContext(AppointmentContext);

  useEffect(() => {
    const appointmentObj = {
      username: user.username,
      available: 0,
    };
    postAppointment(timeSlot._id, appointmentObj)
      .then((results) => {
        setAppointmentBooked(!appointmentBooked);
        return results;
      })
      .catch((err) => {
        Alert.alert(
          "Booking problem",
          "encountered problem while trying to book the appointment"
        );
      });
  }, []);

  return (
    <SafeAreaView style={customStyles.container}>
      <Image
        style={customStyles.logo}
        source={require("../assets/Barber.png")}
      />
      <Text style={customStyles.textStyle}>
        {`Payment was successful, thank you. Appointment Date: ${timeSlotDate} Appointment Time: ${timeSlot.time}`}
      </Text>
    </SafeAreaView>
  );
};

export default SuccessPayment;
