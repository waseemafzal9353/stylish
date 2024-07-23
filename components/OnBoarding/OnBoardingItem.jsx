import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

const OnBoardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { flex: 0.5, justifyContent: "center" },
  title: {
    fontFamily: 'Montserrat-EB',
    fontSize: 24,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center",
  },
  description: {
    fontFamily: 'Montserrat-SB',
    fontSize: 14,
    color: "#A8A8A9",
    textAlign: "center",
    paddingHorizontal: 10,
    lineHeight: 24,
    letterSpacing: 2
  },
});
