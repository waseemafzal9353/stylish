import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import ContinueWith from "@/components/Auth/ContinueWith";

const Login = (props) => {
  const { width, height } = useWindowDimensions();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const dynamicFontSize = width * 0.07;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.welcomeContainer, { marginTop: height * 0.1, marginBottom: height * 0.05 }]}>
        <Text style={[styles.welcomeText, { fontSize: dynamicFontSize }]}>
          Welcome
        </Text>
        <Text style={[styles.welcomeText, { fontSize: dynamicFontSize }]}>
          Back!
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={28} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            placeholderTextColor="#000"
            selectionColor="#000"
          />
        </View>
        <View style={styles.inputContainer}>
          <Fontisto name="locked" size={28} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry={secureTextEntry}
            selectionColor="#000"
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <AntDesign name={secureTextEntry ? "eyeo" : "eye"} size={24} color="black" style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.forgotContainer} onPress={() => { props.navigation.navigate('auth/ForgotPassword') }}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.loginButton, { marginTop: height * 0.03 }]} activeOpacity={0.7}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <ContinueWith 
        navigation={props.navigation}
        accountLine="Create An Account"
        route="auth/Signup"
        authType="Sign Up"
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 21,
  },
  forgotContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 21,
  },
  welcomeText: {
    fontFamily: "Montserrat-EB",
    lineHeight: 43,
  },
  inputsContainer: {
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A8A8A9",
    borderRadius: 10,
    width: "90%",
    marginBottom: 20,
    opacity: 0.4,
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  icon: {
    marginRight: 13,
  },
  input: {
    height: 60,
    fontSize: 16,
    flex: 1,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  forgot: {
    fontFamily: "Montserrat-R",
    fontSize: 12,
    color: "#F83758",
    alignSelf: "flex-end",
    letterSpacing: 0.7,
    marginTop: -10,
  },
  loginButton: {
    width: "90%",
    backgroundColor: "#F83758",
    paddingVertical: 15,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    height: 60,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Montserrat-SB",
  },
});
