import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
const Summer = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../../../assets/images/summer/summer.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.arrival}>New Arrivals </Text>
          <Text style={styles.summer}>Summer’ 25 Collections </Text>
        </View>
        <TouchableOpacity style={styles.visit} activeOpacity={0.7}>
          <Text style={styles.visitNow}>View all</Text>
          <AntDesign name="arrowright" size={18} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Summer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: wp(90),
    backgroundColor: "#ffffff",
    marginTop: 10,
    borderRadius: 10,
    height: hp(30),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "80%",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3)
  },
  arrival: {
    fontFamily: "Montserrat-M",
    fontSize: hp(1.7),
    color: "#000000",
  },
  summer: {
    fontFamily: "Montserrat-R",
    fontSize: hp(1.3),
    color: "#000000",
  },
  visit: {
    flexDirection: "row",
    backgroundColor: "#F83758",
    justifyContent: "center",
    alignItems: "center",
    width: wp(23),
    height: hp(3),
    marginVertical: 10,
    borderRadius: 5,
  },
  visitNow: {
    color: '#ffffff',
    fontFamily: 'Montserrat-M',
    fontSize: hp(1.6),
    paddingHorizontal: 5
  }
});
