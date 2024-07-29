<script src="http://192.168.10.8:8097"></script>
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Splash from "../components/SplashScreen";
import { ActivityIndicator, View } from "react-native";
import Login from "./(auth)/login";
import Signup from "./(auth)/signup";
import ForgotPassword from "./(auth)/forgotPassword";
import TabLayout from "./(tabs)/_layout";
import GetStarted from "./getStarted";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import store from '../redux/store'
import Toast from "react-native-toast-message";
import ToastConfig from '../components/ToastConfig'
import { Stack } from "expo-router";
SplashScreen.preventAutoHideAsync();

const Loading = () => {
  <View>
    <ActivityIndicator size='large' />
  </View>;
};
export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewedOnBoarding, setViewedOnBoarding] = useState(false);

  const [loaded, error] = useFonts({
    "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Montserrat-EB": require("../assets/fonts/Montserrat.ttf"),
    "Montserrat-SB": require("../assets/fonts/Montserrat-SB.ttf"),
    "Montserrat-R": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-M": require("../assets/fonts/Montserrat-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      setTimeout(() => {
        setAppIsReady(true);
      }, 2000);
    }
  }, [loaded, error]);

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Splash />
      </View>
    );
  }

  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorjage.getItem('@viewedOnBoarding')
      if(value !== null) setViewedOnBoarding(true)
    } catch (error) {
      setLoading(false)
    }
  }
  // useEffect(() =>{checkOnBoarding}, [])
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="(auth)" options={{headerShown: false}}/>
        <Stack.Screen name="getStarted"  options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      </Stack>
      {/* {loading ? <Loading /> : viewedOnBoarding ? <Login /> : <OnBoarding />} */}
      <Toast config={ToastConfig} ref={(ref) => Toast.setRef(ref)}/>
    </Provider>
  );
}