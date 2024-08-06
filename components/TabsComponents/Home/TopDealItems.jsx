import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import StarRating from "./Stars";

const TopDealItems = ({ item }) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>₹{item.price}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.actualPrice}>₹{item.actualPrice}</Text>
        <Text style={styles.deal}>{item.deal}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <StarRating />
        <Text style={styles.stars}>{item.stars}</Text>
      </View>
    </View>
  );
};

export default TopDealItems;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    width: wp(42), // Set a specific width for each item
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: wp(2), // Add some spacing between items
    // padding: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: hp(20),
    resizeMode: 'cover',
    // borderRadius: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flext-start',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 5,
    gap: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 5
  },
  title: {
    fontFamily: 'Montserrat-M',
    fontSize: 14,
    marginVertical: hp(0.8),
    paddingHorizontal: 5
  },
  description: {
    fontFamily: 'Montserrat-R',
    fontSize: 12,
    marginBottom: 5,
    paddingHorizontal: 5
  },
  price: {
    fontFamily: 'Montserrat-R',
    fontSize: 12,
    color: 'black',
    paddingHorizontal: 5
  },
  actualPrice: {
    color: '#BBBBBB',
    fontFamily: 'Montserrat-R',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  deal: {
    color: '#FE735C',
    fontFamily: 'Montserrat-R',
    fontWeight: 'bold'
  },
  stars: {
    color: '#A4A9B3',
    fontFamily: 'Montserrat-R',
    fontSize: 12,
    paddingHorizontal: 5
  }
});
