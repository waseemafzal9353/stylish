import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import SearchCard from "../../../components/TabsComponents/Home/SearchCard";
import AllFeatured from "../../../components/TabsComponents/Home/AllFeatured";
import TopCategories from "../../../components/TabsComponents/Home/topCategories/TopCategories";
import SpecialOffers from "../../../components/TabsComponents/Home/SpecialOffers";
import DealofTheDay from "../../../components/TabsComponents/Home/DealofTheDay";
import Deals from "../../../components/TabsComponents/Home/Deals";
import SpecialOfferCard from "../../../components/TabsComponents/Home/SpecialOfferCard";
import FlatHeels from "../../../components/TabsComponents/Home/FlatHeels";
import TrendingProducts from "../../../components/TabsComponents/Home/TrendingProducts";
import Trending from "../../../components/TabsComponents/Home/Trending";
import Summer from "../../../components/TabsComponents/Home/Summer";
import Sponsered from "../../../components/TabsComponents/Home/Sponsered";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SearchCard />
        <AllFeatured headerText="All Featured"/>
        <TopCategories />
        <SpecialOffers/>
        <DealofTheDay/>
        <Deals/>
        <SpecialOfferCard/>
        <FlatHeels/>
        <TrendingProducts/>
        <Trending/>
        <Summer/>
        <Sponsered/>
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
