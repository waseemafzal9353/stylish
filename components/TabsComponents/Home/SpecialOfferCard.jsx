import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SpecialOfferCard = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/specialOffers/rectangle.png")}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.offerText}>Special Offers</Text>
          <View style={styles.emojiContainer}>
            <Text style={styles.emoji}>😲</Text>
          </View>
        </View>
        <Text style={styles.text}>We make sure you get the offer you need at best prices</Text>
      </View>
    </View>
  );
};

export default SpecialOfferCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: hp(10),
    width: wp(89),
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: wp(20),
    height: hp(20),
    marginRight: 10, // Space between image and text
  },
  textContainer: {
    flex: 1, // Take the remaining space
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  offerText: {
    fontFamily: 'Montserrat-M',
    fontSize: 16,
    color: 'black',
    lineHeight: hp(3),
    marginRight: wp(1)
  },
  emojiContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5, 
    opacity: 0.7
  },
  emoji: {
    fontSize: 20,
  },
  text: {
    fontFamily: 'Montserrat-R',
    fontSize: wp(3),
    lineHeight: hp(2)
  }
});
