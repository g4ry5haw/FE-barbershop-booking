import React, { useContext } from "react";
import * as yup from "yup";
import {
  View,
  Image,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { postUserDetails } from "../api.js";
import { UserContext } from "../context/UserContext.js";

const Register = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);
  const handleRegister = (values) => {
    postUserDetails(values);
    setUser(values);
    Alert.alert(`User ${values.username} has been created successfully`);
    navigation.navigate("Browse");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.logo} source={require("../assets/Barber.png")} />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => handleRegister(values)}
          validationSchema={yup.object().shape({
            firstName: yup.string().required("Please, provide your first name"),
            lastName: yup.string().required("Please, provide your last name"),
            username: yup.string().required("Please, provide your username"),
            email: yup.string().email().required("Please, provide your email"),
            phone: yup.number().required("Please, provide your number"),
            password: yup
              .string()
              .min(4)
              .max(10, "Password should not excced 10 chars.")
              .required("Please provide your password"),
            confirmPassword: yup
              .string()
              .min(4)
              .max(10, "Password should not excced 10 chars.")
              .required("Please confirm your password")
              .oneOf(
                [yup.ref("password"), null],
                'Must match "password" field value'
              ),
          })}
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
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                placeholder="First Name..."
                maxLength={20}
                placeholderTextColor={"white"}
              />
              {touched.firstName && errors.firstName && (
                <Text style={styles.errors}>{errors.firstName}</Text>
              )}
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                placeholder="Last Name..."
                maxLength={20}
                placeholderTextColor={"white"}
              />
              {touched.lastName && errors.lastName && (
                <Text style={styles.errors}>{errors.lastName}</Text>
              )}
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Username..."
                maxLength={20}
                placeholderTextColor={"white"}
              />
              {touched.username && errors.username && (
                <Text style={styles.errors}>{errors.username}</Text>
              )}
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email..."
                maxLength={254}
                placeholderTextColor={"white"}
              />
              {touched.email && errors.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}
              <TextInput
                style={styles.username}
                textAlign={"center"}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder="Phone Number..."
                maxLength={15}
                placeholderTextColor={"white"}
              />
              {touched.phone && errors.phone && (
                <Text style={styles.errors}>
                  Please enter valid phone number
                </Text>
              )}
              <TextInput
                style={styles.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholderTextColor={"white"}
                secureTextEntry={true}
                placeholder="Password"
                maxLength={12}
              />
              {touched.password && errors.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}
              <TextInput
                style={styles.password}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                placeholderTextColor={"white"}
                secureTextEntry={true}
                placeholder="Confirm Password"
                maxLength={12}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errors}>{errors.confirmPassword}</Text>
              )}
              <Pressable
                onPress={handleSubmit}
                style={styles.register}
                textAlign={"center"}
              >
                <Text
                  onPress={handleSubmit}
                  type="submit"
                  style={styles.registerText}
                  title="Register"
                >
                  Register
                </Text>
              </Pressable>
              <Pressable style={styles.loginLink}>
                <Text
                  style={styles.loginText}
                  onPress={() => navigation.navigate("Login")}
                >
                  Already Registered?
                </Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
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
  logo: {
    width: 250,
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    textAlign: "center",
  },
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

  errors: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
    marginTop: -10,
    textAlign: "center",
    width: 240,
  },
});
