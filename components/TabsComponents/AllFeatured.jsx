import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const AllFeatured = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>All Featured</Text>
      <View style={styles.Ops}>
       <TouchableOpacity activeOpacity={0.7}>
       <View style={styles.Op}>
          <Text style={styles.text}>Sort</Text>
          <MaterialCommunityIcons name="sort-numeric-variant" size={24} color="black" />
        </View>
       </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.Op}>
          <Text style={styles.text}>Filter</Text>
          <Feather name="filter" size={18} color="black" />
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllFeatured;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  headerText: {
    fontFamily: "Montserrat-SB",
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.8,
    paddingHorizontal: 5
  },
  Ops: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10
  },
  Op: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "white",
    shadowColor: '#BBBBBB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation:5,
    borderRadius: 5,
    gap:5,
    overflow: "hidden",
    width: 75,
    height: 30,
  },
  text: {
    fontFamily: "Montserrat-R",
    fontSize: 15,
    color: 'black'
  },
});
