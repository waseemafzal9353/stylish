<script src="http://192.168.10.8:8097"></script>
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Splash from "../components/SplashScreen";
import { ActivityIndicator, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "./OnBoarding";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import TabLayout from "./(tabs)/_layout";
import GetStarted from "./GetStarted";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";
import store from '../redux/store'
import Toast from "react-native-toast-message";
import ToastConfig from '../components/ToastConfig'
const Stack = createStackNavigator();
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
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="auth/Login" component={Login} />
        <Stack.Screen name="auth/Signup" component={Signup} />
        <Stack.Screen name="auth/ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="(tabs)" component={TabLayout} />
      </Stack.Navigator>
      {loading ? <Loading /> : viewedOnBoarding ? <Login /> : <OnBoarding />}
      <Toast config={ToastConfig} ref={(ref) => Toast.setRef(ref)}/>
    </Provider>
  );
}