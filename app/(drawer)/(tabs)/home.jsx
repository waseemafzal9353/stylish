import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import SearchCard from "../../../components/TabsComponents/SearchCard";
import AllFeatured from "../../../components/TabsComponents/AllFeatured";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    >
      <ScrollView>
        <SearchCard/>
        <AllFeatured/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
