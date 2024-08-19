import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import wishlist1 from "../../../data/wishlist1";
import wishlist2 from "../../../data/wishlist2";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import StarRating from "../Home/Stars";
const WishlistItems = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.child}>
        {wishlist1.map((listItem, key) => (
          <View key={key} style={styles.listContainer}>
            <Image source={listItem.image} style={styles.image} />
            <Text style={styles.title}>{listItem.title}</Text>
            <Text style={styles.description}>{listItem.description}</Text>
            <Text style={styles.price}>₹ {listItem.price}</Text>
            <View style={styles.ratingContainer}>
              <StarRating />
              <Text style={styles.stars}>{listItem.stars}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.child2}>
        {wishlist2.map((listItem, key) => (
          <View key={key} style={styles.listContainer}>
            <Image source={listItem.image} style={styles.image} />
            <Text style={styles.title}>{listItem.title}</Text>
            <Text style={styles.description}>{listItem.description}</Text>
            <Text style={styles.price}>₹{listItem.price}</Text>
            <View style={styles.ratingContainer}>
              <StarRating />
              <Text style={styles.stars}>{listItem.stars}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WishlistItems;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    width: wp(90),
  },
  child: {
    flex: 1,
  },
  child2: {
    flex: 1,
  },

  listContainer: {
    backgroundColor: "#ffffff",
    // gap: 10,
    marginVertical: 10,
    width: wp(42),
    height: hp(28),
    borderRadius: 10,
    overflow: "hidden",
      // Shadow for iOS
  shadowColor: "#000",
  shadowOffset: {
    width: 2,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 3.84,

  // Shadow for Android
  elevation: 5,
  },
  image: {
    width: "100%",
    height: "55%",
    resizeMode: "cover",
    marginBottom: hp(0.7),
    borderRadius: 10
  },
  title: {
    fontFamily: "Montserrat-M",
    fontSize: hp(1.5),
    lineHeight: hp(1.5),
    paddingHorizontal: wp(1.5),
  },
  description: {
    fontFamily: 'Montserrat-R',
    fontSize: hp(1.3),
    paddingHorizontal: wp(1.5),
  },
  price: {
    fontFamily: 'Montserrat-R',
    fontSize: hp(1.3),
    paddingHorizontal: wp(1.5),
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: wp(1.5),
  },
  stars: {
    color: "#A4A9B3",
    fontFamily: "Montserrat-R",
    fontSize: 12,
    paddingHorizontal: wp(1.5),
  },
});
