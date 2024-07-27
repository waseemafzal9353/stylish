import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const image = require("../assets/images/getStarted.jpg");
const GetStarted = (props) => {
  const { width, height } = useWindowDimensions();
  const user = useSelector(state => state.user);
  if(user === null) {
    console.log("no user")
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <LinearGradient
          colors={["transparent", "#000000"]}
          locations={[0, 0.7]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.8, y: 1.9 }}
          style={styles.gradient}
        >
          <Text style={[styles.text, { width: width * 0.8 }]}>
            You want Authentic, here you go!
          </Text>
          <Text style={styles.buy}>Find it here, buy it now!</Text>
          <TouchableOpacity
            style={[styles.button, { height: height * 0.08 }]}
            activeOpacity={0.8}
            onPress={() => {
              props.navigation.navigate("(tabs)");
            }}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  gradient: {
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Montserrat-SB",
    fontSize: 34,
    textAlign: "center",
    letterSpacing: 1,
    paddingVertical: 10,
  },
  buy: {
    color: "#F2F2F2",
    lineHeight: 16 * 1.54,
    letterSpacing: 1,
    fontSize: 14,
    fontFamily: "Montserrat-R",
    textAlign: "center",
    paddingVertical: 10,
    // fontWeight: 'bold'
  },
  button: {
    width: "80%",
    backgroundColor: "#F83758",
    borderRadius: 4,
    marginVertical: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontFamily: "Montserrat-SB",
    fontSize: 23,
    letterSpacing: 1,
  },
});
