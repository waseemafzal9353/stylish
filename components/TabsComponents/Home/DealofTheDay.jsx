import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const { width } = Dimensions.get("window");

const DealofTheDay = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const endTime = Date.now() + oneDayInMilliseconds;

    const updateTimer = () => {
      const now = Date.now();
      const remainingTime = endTime - now;

      if (remainingTime <= 0) {
        setTimeLeft("00:00:00");
        clearInterval(timerInterval);
        return;
      }

      const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
      const seconds = Math.floor((remainingTime / 1000) % 60);

      setTimeLeft(
        `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(
          2,
          "0"
        )}m ${String(seconds).padStart(2, "0")}s`
      );
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to display immediately

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dealDay}>
        <Text style={styles.deal}>Deal of the Day</Text>
        <View style={styles.timerContainer}>
          <MaterialIcons name="access-alarm" size={24} color="white" />
          <Text style={styles.timer}>{timeLeft} remaining</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.view}>
        <Text style={styles.viewText}>View all</Text>
        <AntDesign name="arrowright" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
    backgroundColor: "#4392F9",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.9,
    borderRadius: 10,
    height: 70,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  dealDay: {
    flex: 1,
  },
  deal: {
    color: "white",
    fontFamily: 'Montserrat-M',
    fontSize: 16,
    lineHeight: 20
  },
  timerContainer:  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5
  },
  timer: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-R",
    marginLeft: 5

  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    width: 105,
    height: 35,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  viewText: {
    color: "white",
    fontFamily: "Montserrat-SB",
    fontSize: 15,
  },
});

export default DealofTheDay;
