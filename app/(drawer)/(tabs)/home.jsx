import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import SearchCard from "../../../components/TabsComponents/SearchCard";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    >
      <ScrollView>
        <SearchCard/>
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
