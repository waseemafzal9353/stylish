import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import SearchCard from "../../../components/TabsComponents/Home/SearchCard";
import AllFeatured from "../../../components/TabsComponents/Home/AllFeatured";
import TopCategories from "../../../components/TabsComponents/Home/topCategories/TopCategories";
import SpecialOffers from "../../../components/TabsComponents/Home/SpecialOffers";
import DealofTheDay from "../../../components/TabsComponents/Home/DealofTheDay";
import Deals from "../../../components/TabsComponents/Home/Deals";
import SpecialOfferCard from "../../../components/TabsComponents/Home/SpecialOfferCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SearchCard />
        <AllFeatured />
        <TopCategories />
        <SpecialOffers/>
        <DealofTheDay/>
        <Deals/>
        <SpecialOfferCard/>
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
    paddingVertical: 20, },
});
