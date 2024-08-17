import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import topDeals from "../../../data/topDeals";
import TopDealItems from "./TopDealItems";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Deals = () => {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef();

  const nextScroll = () => {
    if (current < topDeals.length - 1) {
      setCurrent((prev) => {
        const newCurrent = prev + 1;
        scrollRef.current.scrollToIndex({ index: newCurrent, animated: true });
        return newCurrent;
      });
    }
  };

  const prevScroll = () => {
    if (current > 0) {
      setCurrent((prev) => {
        const newCurrent = prev - 1;
        scrollRef.current.scrollToIndex({ index: newCurrent, animated: true });
        return newCurrent;
      });
    }
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={topDeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TopDealItems item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        ref={scrollRef}
        contentContainerStyle={styles.contentContainer}
      />
      <TouchableOpacity
        style={[styles.leftArrow, { display: current > 0 ? "flex" : "none" }]}
        onPress={prevScroll}
        activeOpacity={0.7}
      >
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.rightArrow,
          { display: current < topDeals.length - 1 ? "flex" : "none" },
        ]}
        onPress={nextScroll}
        activeOpacity={0.7}
      >
        <Ionicons name="chevron-forward" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    textAlign: "center",
    position: "relative",
  },
  leftArrow: {
    position: "absolute",
    top: "50%",
    left: wp(0),
    transform: [{ translateY: -20 }],
    zIndex: 1,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#A8A8A8",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  rightArrow: {
    position: "absolute",
    top: "50%",
    right: wp(-1),
    transform: [{ translateY: -20 }],
    zIndex: 1,
    backgroundColor: "#A8A8A8",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
});
