import React from "react";
import { Drawer } from "expo-router/drawer";
import { Feather } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
const CustomHeader = () => {
  const navigation = useNavigation();
const {width, height} = useWindowDimensions();
  return (
    <View style={[styles.header, {paddingHorizontal: width*0.03}]}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require("../../assets/icons/bars.png")} // Adjust the path to your image
          style={styles.icon}
        />
      </TouchableOpacity>
      <Image
        source={require("../../assets/images/logo-1.png")}
        style={styles.logo}
      />
      <Image source={require("../../assets/images/dummy_avatar.png")} />
    </View>
  );
};
const DrawerLayout = () => {
  const navigation = useNavigation();
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.background,
          borderBottomWidth: 0,
          borderBottomColor: "#F5F5F5",
        },
        headerTintColor: "#fff",
        headerTitleStyle: { display: "none" },
        drawerType: "front",
        headerLeft: () => <CustomHeader />,
        drawerStyle: {
          backgroundColor: "white",
          width: "50%",
        },
      }}
    >
      <Drawer.Screen
        name="Index"
        options={{
          drawerLabel: "Index",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 18,
    height: 12,
    resizeMode: "contain",
    marginLeft: 20,
    color: "#323232",
  },
});
