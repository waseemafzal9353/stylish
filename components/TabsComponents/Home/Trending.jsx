import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useRef, useState } from "react";
  import trending from "../../../data/trending";
  import TrendingItems from "./TrendingItems";
  import { Ionicons } from "@expo/vector-icons";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  
  const Trending = () => {
    const [current, setCurrent] = useState(0);
    const scrollRef = useRef();
  
    const nextScroll = () => {
      if (current < trending.length - 1) {
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
          data={trending}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TrendingItems item={item} />}
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
            { display: current < trending.length - 1 ? "flex" : "none" },
          ]}
          onPress={nextScroll}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-forward" size={30} color="black" />
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Trending;
  
  const styles = StyleSheet.create({
    mainContainer: {
      width: wp(100),
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      marginLeft: wp(5)
    },
    contentContainer: {

    },
    leftArrow: {
      position: "absolute",
      top: "50%",
      left: wp(-1.5),
      transform: [{ translateY: -20 }],
      zIndex: 1,
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: "#A8A8A8",
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.8,
    },
    rightArrow: {
      position: "absolute",
      top: "50%",
      right: wp(5),
      transform: [{ translateY: -20 }],
      zIndex: 1,
      backgroundColor: "#A8A8A8",
      height: 50,
      width: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.8,
    },
  });
  