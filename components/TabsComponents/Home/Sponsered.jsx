import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from '@expo/vector-icons/AntDesign';
const Sponsered = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Sponsered</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/sponsered/sponsered.png")}
         style={styles.image} resizeMode="cover"/>
      </View>
      <TouchableOpacity style={styles.bottomContainer} activeOpacity={0.7}>
      <Text style={styles.off}>up to 50% off</Text>
      <AntDesign name="right" size={20} style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
};

export default Sponsered;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#ffffff",
    width: wp(100),
    marginTop: 10,
    marginLeft: wp(10),
    height: hp(50),
    marginBottom: 10,
  },
  text: {
    marginHorizontal: 15,
    marginTop: 10,
    fontFamily: 'Montserrat-M',
    fontSize: hp(2),
    color: '#000000'
  },
  imageContainer: {
    width: wp(100),
    height: '80%',
    overflow: 'hidden',
    marginTop: 10,
    marginLeft: 15
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius:  10,
    borderBottomLeftRadius:  10
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  off: {
    fontFamily: 'Montserrat-EB',
    fontSize: hp(2),
    color: '#000000'
  },
  arrow: {
    paddingHorizontal: wp(3),
    color: '#323232'
  }
});
