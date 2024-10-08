import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import SearchCard from "../../../components/TabsComponents/Home/SearchCard";
import AllFeatured from "../../../components/TabsComponents/Home/AllFeatured";
import WishlistItems from "../../../components/TabsComponents/Wishlist/Wishlist";

export default function WishListScreen() {
  return (
    <SafeAreaView
    style={styles.safeAreaView}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SearchCard/>
        <AllFeatured headerText="52,082+ Items"/>
        <WishlistItems/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1, 
  },
  scrollViewContent: {
    alignItems: "center", 
    paddingVertical: 20, 
  },
});
