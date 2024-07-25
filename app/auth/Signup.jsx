import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import ContinueWith from '../../components/Auth/ContinueWith'

const Signup = props => {
  const { width, height } = useWindowDimensions();
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true);
  const [secureTextEntryConfirmPassword, setSecureTextEntryConfirmPassword] = useState(true);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
     alignItems: 'center'

      }}
    >
      <ScrollView style={[styles.mainContainer, { marginTop: height * 0.1 }]}>
        <View
          style={[
            styles.accountContainer,
            { paddingHorizontal: width * 0.05, marginBottom: height * 0.01 },
          ]}
        >
          <Text style={styles.accountText}>Create an</Text>
          <Text style={styles.accountText}>account</Text>
        </View>
        <View
          style={[styles.inputContainer, { marginVertical: height * 0.04 }]}
        >
          <View
            style={[
              styles.childInputContainer,
              { marginBottom: height * 0.04 },
            ]}
          >
            <FontAwesome
              name="user"
              size={28}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, { marginVertical: height * 0.02 }]}
              placeholder="Username or Email"
              placeholderTextColor="#676767"
              selectionColor="#676767"
            />
          </View>
          <View
            style={[
              styles.childInputContainer,
              { marginBottom: height * 0.04 },
            ]}
          >
            <Fontisto
              name="locked"
              size={28}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, { marginVertical: height * 0.02 }]}
              placeholder="Password"
              placeholderTextColor="#676767"
              secureTextEntry={secureTextEntryPassword}
              selectionColor="#676767"
            />
              <TouchableOpacity
            onPress={() => setSecureTextEntryPassword(!secureTextEntryPassword)}
          >
            <AntDesign
              name={secureTextEntryPassword ? "eyeo" : "eye"}
              size={24}
              color="black"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
          </View>
          <View
            style={[
              styles.childInputContainer,
              { marginBottom: height * 0.04 },
            ]}
          >
            <Fontisto
              name="locked"
              size={28}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, { marginVertical: height * 0.02 }]}
              placeholder="Confirm Password"
              placeholderTextColor="#676767"
              secureTextEntry={secureTextEntryConfirmPassword}
              selectionColor="#676767"
            />
              <TouchableOpacity
            onPress={() => setSecureTextEntryConfirmPassword(!secureTextEntryConfirmPassword)}
          >
            <AntDesign
              name={secureTextEntryConfirmPassword ? "eyeo" : "eye"}
              size={24}
              color="black"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
          </View>
          <View style={[styles.policy, {width: width*0.9}]}>
              <Text style={styles.policyText}>
              By clicking the{' '}
              <Text style={styles.policyRegister}>
              Register{' '}
              </Text>
              button,{' '}, you agree to the public offer
              </Text>

            </View>
         
        </View>
        <TouchableOpacity style={[styles.createAccount, {marginHorizontal: width*0.05}]}>
            <Text style={styles.createAccountText}>Create Account</Text>
          </TouchableOpacity>
          <ContinueWith style={{justifyContent: 'center', alignItems: 'center'}}
        navigation={props.navigation}
        accountLine="I Already Have An Account"
        route="auth/Login"
        authType='Login'
      />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
  },
  accountContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  accountText: {
    fontFamily: "Montserrat-EB",
    fontSize: 36,
    lineHeight: 43,
    letterSpacing: 1,
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  childInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#A8A8A9",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "90%",
    opacity: 0.4,
    borderWidth: 1,
  },
  icon: {
    marginRight: 12,
    color: "#626262",
  },
  input: {
    flex: 1,
    height: 30,
    fontSize: 16,
    // backgroundColor: "transparent",
  },
  policy: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 24,

  },
  policyText: {
    fontFamily: 'Montserrat-SB',
    fontSize: 12,
    marginTop: -20,
    letterSpacing: 0.7,
    color: '#676767'
  },
  policyRegister: {
    fontWeight: 'bold',
    color: '#FF4B26'
  },
  createAccount: {
    width: "90%",
    backgroundColor: "#F83758",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '5%'
  },
  createAccountText: {
    color: "#FFFFFF",
    fontFamily: "Montserrat-SB",
    fontSize: 20,
    letterSpacing: 1,
    lineHeight : 35,

  },
});
