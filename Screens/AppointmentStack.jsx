import { createStackNavigator } from "@react-navigation/stack";
import Appointments from "./Appointments";

const Stack = createStackNavigator();

export default function Appointment({}) {
  return (
    <Stack.Navigator initalRoutName="Appointments">
      <Stack.Screen
        name="AppointmentsStack"
        component={Appointments}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
}
