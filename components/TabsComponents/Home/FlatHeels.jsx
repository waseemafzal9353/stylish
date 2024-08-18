import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';
const FlatHeels = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <View style={styles.imageContainer}> */}
        <Image
          source={require('../../../assets/images/faltHeels/bar.png')}
          style={styles.image}
        />
      {/* </View> */}
      <View style={styles.secondContainer}>
        <View style={styles.imagesAndTextContainer}>
          <Image
            source={require('../../../assets/images/faltHeels/dots.png')}
            style={styles.dots}
          />
          <Image
            source={require('../../../assets/images/faltHeels/heels.png')}
            style={styles.heels}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Flat and Heels</Text>
          <Text style={styles.text}>Stand a chance to get rewarded</Text>
          <TouchableOpacity style={styles.visit}>
            <Text style={styles.visitNow}>Visit now</Text>
            <AntDesign name="arrowright" size={18} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FlatHeels;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    width: wp(90),
    backgroundColor: 'white',
    // padding: 10,
    height: hp(35)
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp(5),
    height: '100%',
    resizeMode: 'contain',

  },
  secondContainer: {
    flex: 2,
    backgroundColor: '#f0f0f0',
    // borderRadius: 10,
    // padding: 10,
    justifyContent: 'space-between',
    marginVertical: '3%',
    marginRight: 5,
    flexDirection: 'row',
  },
  imagesAndTextContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    position: 'relative'

  },
  dots: {
    width: wp(20),
    height: '95%',
    resizeMode: 'cover',
  },
  heels: {
    width: wp(30),
    height: hp(20),
    resizeMode: 'contain',
    position: 'absolute',
    marginLeft: wp(5)
  },
  textContainer: {
    margin: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    fontSize: hp(2.5),
    color: '#232327',
    fontFamily: 'Montserrat-M',
  },
  text: {
    fontFamily: 'Montserrat-R',
    fontSize: hp(1.3),
    color: '#232327'
  },
  visit: {
    flexDirection: 'row',
    backgroundColor: '#F83758',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(25),
    height: hp(3),
    marginVertical: 10,
    borderRadius: 5
  },
  visitNow: {
    color: '#ffffff',
    fontFamily: 'Montserrat-M',
    fontSize: hp(1.6),
    paddingHorizontal: 5
  }
});
