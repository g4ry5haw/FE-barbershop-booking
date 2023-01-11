import {
  Alert,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useStripe } from "@stripe/stripe-react-native";
import { format } from "date-fns";
import customStyles from "../styles/customStyles";

const Payment = ({ navigation, route }) => {
  const stripePay = useStripe();
  const timeSlot = route.params.timeSlot.time;
  const timeSlotDate = format(
    new Date(route.params.timeSlot.date),
    "EEEEEEEEE dd-MMM"
  );

  const subscribe = async () => {
    try {
      const response = await fetch(
        "https://javascriptmas.cyclic.app/api/payment",
        {
          method: "POST",
          body: JSON.stringify({ name: "nasser" }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;

      const initSheet = await stripePay.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: "Barber Shop",
        style: "alwaysDark",
      });

      if (initSheet.error) return Alert.alert(initSheet.error.message);

      const presentSheet = await stripePay.presentPaymentSheet({
        clientSecret,
      });

      if (presentSheet.error) {
        return Alert.alert(presentSheet.error.message);
      } else {
        navigation.navigate("SuccessPayment", {
          timeSlot: route.params.timeSlot,
        });
      }
    } catch (error) {
      Alert.alert("something is wrong, please try later");
    }
  };

  return (
    <SafeAreaView style={customStyles.container}>
      <Image
        style={customStyles.logo}
        source={require("../assets/Barber.png")}
      />
      <Text style={customStyles.textStyle}>
        {`You are booking an appointment at ${timeSlot} on ${timeSlotDate} for a haircut please pay the deposit to confirm the booking`}
      </Text>
      <Pressable
        onPress={subscribe}
        style={styles.register}
        textAlign={"center"}
      >
        <Text
          onPress={subscribe}
          type="submit"
          style={styles.registerText}
          title="Register"
        >
          Pay £10 Deposit
        </Text>
      </Pressable>
      <Pressable style={styles.loginLink}>
        <Text
          style={styles.loginText}
          onPress={() =>
            navigation.navigate("TimeSlots", {
              appointment: route.params.timeSlot.date,
            })
          }
        >
          Cancel Booking
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  register: {
    height: 40,
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 15,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 240,
    backgroundColor: "white",
  },
  registerText: {
    fontSize: 20,
  },
  loginLink: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    color: "white",
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Payment;
