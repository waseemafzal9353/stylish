import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const SpecialOfferItem = ({ item }) => {
  return (
    <View
      style={[styles.offerContainer, { backgroundColor: item.backgroundColor }]}
    >
      <View style={styles.childContainer}>
        <Text style={styles.deal}>{item.deal}</Text>
        <Text style={styles.dealIn}>{item.dealIn}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.shop}>Shop Now</Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={item.image} resizeMode="cover" style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: "100%",
    overflow: "hidden",
    marginHorizontal: 10,
    flexDirection: "row"
  },
  childContainer: {
    flex: 1,
    justifyContent: "cente",
    alignItems: "flex-start",
    paddingHorizontal: 15,
  },
  deal: {
    fontFamily: "Montserrat-EB",
    fontSize: 25,
    color: "white",
    lineHeight: 32,
    marginBottom: 5,
  },
  dealIn: {
    fontFamily: "Montserrat-R",
    fontSize: 16,
    color: "white",
    lineHeight: 16,
    marginBottom: 5,

  },
  btn: {
    borderWidth: 1,
    borderColor: "white",
    textAlign: "center",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    borderRadius: 10,
    marginVertical: 10
  },
  shop: {
    fontFamily: "Montserrat-SB",
    fontSize: 16,
    color: "white",
    paddingHorizontal: 8,
    
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10
  },
});

export default SpecialOfferItem;
