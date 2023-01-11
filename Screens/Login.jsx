import React, { useState, useContext } from "react";
import * as yup from "yup";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {
  View,
  Image,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
  Alert,
} from "react-native";
import { Formik } from "formik";
import { validateUser } from "../api.js";
import { UserContext } from "../context/UserContext.js";

const Login = ({ navigation }) => {
  // const [user, setUser] = useState({});
  const { user, setUser } = useContext(UserContext);
  const handleLogin = (values) => {
    validateUser(values.username, values.password)
      .then((res) => {
        setUser(res.user);
        navigation.navigate("Browse");
      })
      .catch(() => {
        Alert.alert("Invalid username or password");
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={require("../assets/Barber.png")} />
        <Formik
          initialValues={{ username: "", password: "" }}
          userLogin
          onSubmit={(values) => handleLogin(values)}
        >
          {({
            handleChange,
            touched,
            errors,
            handleBlur,
            handleSubmit,
            values,
          }) => (
            <View>
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="username..."
                maxLength={10}
                placeholderTextColor={"white"}
                autoCapitalize="none"
              />
              {touched.username && errors.username && (
                <Text style={styles.errors}>{errors.username}</Text>
              )}
              <TextInput
                style={styles.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholderTextColor={"white"}
                secureTextEntry={true}
                placeholder="password..."
                maxLength={10}
              />
              {touched.password && errors.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}
              <Pressable
                onPress={handleSubmit}
                style={styles.login}
                textAlign={"center"}
              >
                <Text
                  onPress={handleSubmit}
                  type="submit"
                  style={styles.loginText}
                  title="Login"
                >
                  Login
                </Text>
              </Pressable>
              {/* <Pressable style={styles.forgottenLink}>
                <Text style={styles.forgottenText}>Forgot Password?</Text>
              </Pressable> */}
              <Pressable style={styles.registerLink}>
                <Text
                  style={styles.registerText}
                  onPress={() => navigation.navigate("Register")}
                >
                  Not Registered?
                </Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 30,
  },
  username: {
    padding: 5,
    height: 40,
    width: 240,
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 15,
    borderColor: "white",
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  password: {
    height: 40,
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 15,
    borderColor: "white",
    textAlign: "center",
    color: "white",
    width: 240,
    fontSize: 20,
  },
  forgottenLink: {
    alignItems: "center",
    marginBottom: 10,
  },

  forgottenText: {
    color: "white",
    fontSize: 14,
  },
  login: {
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
  loginText: {
    fontSize: 20,
  },
  registerLink: {
    bottom: -100,
    alignItems: "center",
    justifyContent: "center",
  },

  registerText: {
    color: "white",
    fontSize: 16,
    justifyContent: "center",
  },
  errors: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
    marginTop: -10,
    textAlign: "center",
    width: 240,
  },
});

export default Login;
