import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Splash from "../components/SplashScreen";
import { ActivityIndicator, View } from "react-native";
// import { Stack } from 'expo-router';
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "./OnBoarding";
import Login from "./auth/Login";
import Signup from "./auth/Signup";

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loaded, error] = useFonts({
    "roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Montserrat-EB": require("../assets/fonts/Montserrat.ttf"),
    "Montserrat-SB": require("../assets/fonts/Montserrat-SB.ttf"),
    "Montserrat-R": require("../assets/fonts/Montserrat-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
      setTimeout(() => {
        setAppIsReady(true);
      }, 2000);
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Splash />
      </View>
    );
  }
  return (
    //   <Stack>
    //     <Stack.Navigator>

    //     <Stack.Screen name="onBoarding"/>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     </Stack.Navigator>

    // </Stack>

    <Stack.Navigator initialRouteName="OnBoarding" screenOptions={
      {headerShown: false}
    }>
      <Stack.Screen name="OnBoarding" component={OnBoarding}  />
      <Stack.Screen name="auth/Login" component={Login} />
      <Stack.Screen name="auth/Signup" component={Signup} />
    </Stack.Navigator>
  );
}
