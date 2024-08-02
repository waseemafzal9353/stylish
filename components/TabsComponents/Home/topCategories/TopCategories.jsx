import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import topCategories from "../../../../data/topCategories";
import ShowCategories from "./showCategories";
const TopCategories = () => {
  return (
    <View style={styles.scrollContainer}>
      <FlatList
        horizontal={true}
        data={topCategories}
        renderItem={({ item }) => <ShowCategories item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} 
        />
      }
      contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default TopCategories;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: "100%",
    marginLeft: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    shadowColor: "#BBBBBB",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    elevation: 10,
    overflow: "hidden",
    marginTop: 5,
    paddingRight: 20
  },
  contentContainer: {
    paddingHorizontal: 5, // Add padding to ensure items are not clipped
  },
});
