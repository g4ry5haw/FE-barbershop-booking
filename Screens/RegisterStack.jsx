import { createStackNavigator } from "@react-navigation/stack";
import Register from './Register';

const Stack = createStackNavigator()

export default function RegisterStack() {
  return (
    <Stack.Navigator initalRoutName="Register">
      <Stack.Screen name="RegisterScreen" component={Register} options={{headerShown: false}}  />
    </Stack.Navigator>
  );
}
