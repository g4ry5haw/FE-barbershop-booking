import { createStackNavigator } from "@react-navigation/stack";
import Login from './Login';
import Register from './Register'
import { UserContext } from "../context/UserContext.js";
import { useContext } from "react";

const Stack = createStackNavigator();

export default function LoginStack({}) {
  const { user } = useContext(UserContext);

  return (
    
    <Stack.Navigator initalRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}  />
    </Stack.Navigator>
  );
}
