import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const ForgotPassword = (props) => {
  const { width, height } = useWindowDimensions();
  const dynamicFontSize = width * 0.07;
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <View
        style={[
          styles.welcomeContainer,
          { marginTop: height * 0.1, marginBottom: height * 0.05 },
        ]}
      >
        <Text style={[styles.welcomeText, { fontSize: dynamicFontSize }]}>
          Forgot
        </Text>
        <Text style={[styles.welcomeText, { fontSize: dynamicFontSize }]}>
          Password?
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="email"
            size={28}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            placeholderTextColor="#000"
            selectionColor="#000"
          />
        </View>
      </View>
      <View style={styles.emailContainer}>
        <Text style={{ color: "#F83758" }}>*</Text>
        <Text style={styles.email}>
          {" "}
          We will send you a message to set or reset your new password
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.loginButton, { marginTop: height * 0.03 }]}
        activeOpacity={0.7}
      >
        <Text style={styles.loginButtonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.passRem,
          {
            paddingHorizontal: width * 0.06,
          },
        ]}
        onPress={() => {
          props.navigation.navigate("auth/Login");
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.remPassText}>Remembered Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  welcomeContainer: {
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
  emailContainer: {
    flexDirection: "row",
    width: "80%",
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  email: {
    fontFamily: "Montserrat-R",
    fontSize: 12,
    color: "#676767",
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
  passRem: {
    alignSelf: "flex-end",
    marginVertical: 10,
  },
  remPassText: {
    color: "#F83758",
    fontFamily: "Montserrat-R",
    fontSize: 13,
  },
});
