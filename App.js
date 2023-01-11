import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./context/UserContext";
import TabNavigator from "./Screens/TabNavigator.jsx";
import { StripeProvider } from "@stripe/stripe-react-native";
import { AppointmentProvider } from "./context/AppointmentBooked";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51MONz8CFOrrE3BzlekovkJpxgxaCvqedF2IosdEMIJ1pJRq5ewPVbI1DfgbC3EoxBeadnCaLj0gHKSKRipk5FcrL00ylOsrqR7">
      {/* // <StripeProvider publishableKey={STRIPE_PUBLIC_KEY}> */}
      <UserProvider>
        <AppointmentProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </AppointmentProvider>
      </UserProvider>
    </StripeProvider>
  );
}
