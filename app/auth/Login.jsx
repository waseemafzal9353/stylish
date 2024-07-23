import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';

const Login = () => {
  const { width, height } = useWindowDimensions();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const dynamicFontSize = width * 0.07;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.welcomeContainer, { marginTop: height * 0.1, marginBottom: height * 0.05 }]}>
        <Text style={[styles.welcomeText, { fontSize: dynamicFontSize }]}>Welcome Back!</Text>
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
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} activeOpacity={0.7}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <Text>- OR Continue with -</Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image source={require('../../assets/images/google 1.png')} style={styles.iconImage} />
          </View>
          <View style={styles.imageWrapper}>
            <Image source={require('../../assets/images/apple 1.png')} style={styles.iconImage} />
          </View>
          <View style={styles.imageWrapper}>
            <Image source={require('../../assets/images/facebook-app-symbol 1.png')} style={styles.iconImage} />
          </View>
        </View>
        <View style={styles.signup}>
          <Text>Create An Account</Text>
          <TouchableOpacity>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  welcomeContainer: {
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 21,
  },
  welcomeText: {
    fontFamily: 'Montserrat-EB',
    lineHeight: 43,
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A8A8A9',
    borderRadius: 10,
    width: '90%',
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
    fontFamily: 'Montserrat-R',
    fontSize: 12,
    color: '#F83758',
    alignSelf: 'flex-end',
    marginRight: '5%',
    letterSpacing: 0.7,
    marginTop: -10,
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#F83758',
    paddingVertical: 15,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    height: 60,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Montserrat-SB',
  },
  bottomContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%'
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%', // Adjust width as needed
    marginVertical: 20,
  },
  imageWrapper: {
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    borderRadius: 25, // Half of width/height to make it circular
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    // backgroundColor: '#F83758', // Optional background color
    backgroundColor: 'rgba(248, 55, 88, 0.2)',
    borderWidth:1,
    borderColor: '#F83758',
    marginHorizontal: 22, // Spacing between images
  },
  iconImage: {
    width: '50%',
    height: '50%',
  },
  signup: {
    flexDirection: 'row',
    width: '40%',
    // alignItems: 'center',
    justifyContent:'space-around'
  }
});
