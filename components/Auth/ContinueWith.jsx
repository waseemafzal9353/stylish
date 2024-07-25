// import {
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity,
//     Image,
//     useWindowDimensions,
//   } from "react-native";
//   import React from "react";
  
//   const ContinueWith = ({ navigation, accountLine, route, authType }) => {
//     const { width, height } = useWindowDimensions();
//     return (
//       <View style={[styles.bottomContainer, { gap: height * 0.03 }]}>
//         <Text
//           style={{ fontFamily: "Montserrat-M", fontSize: 12, color: "#575757" }}
//         >
//           - OR Continue with -
//         </Text>
//         <View style={styles.imageContainer}>
//           <View style={styles.imageWrapper}>
//             <Image
//               source={require("../../assets/images/google 1.png")}
//               style={styles.iconImage}
//             />
//           </View>
//           <View style={styles.imageWrapper}>
//             <Image
//               source={require("../../assets/images/apple 1.png")}
//               style={styles.iconImage}
//             />
//           </View>
//           <View style={styles.imageWrapper}>
//             <Image
//               source={require("../../assets/images/facebook-app-symbol 1.png")}
//               style={styles.iconImage}
//             />
//           </View>
//         </View>
//         <View style={styles.signup}>
//           <Text
//             style={{
//               fontFamily: "Montserrat-R",
//               fontSize: 14,
//               color: "#575757",
//             }}
//           >
//             {accountLine}
//           </Text>
//           <TouchableOpacity
//             style={{ paddingHorizontal: width * 0.02 }}
//             onPress={() => {
//               navigation.navigate(route);
//             }}
//           >
//             <Text
//               style={{
//                 fontFamily: "Montserrat-SB",
//                 fontSize: 14,
//                 color: "#F83758",
//                 textDecorationLine: "underline",
//               }}
//             >
//               {authType}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };
  
//   export default ContinueWith;
  
//   const styles = StyleSheet.create({
//     bottomContainer: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     imageContainer: {
//       flexDirection: "row",
//       justifyContent: "center",
//       alignItems: "center",
//       width: "60%",
//       marginVertical: 10,
//     },
//     imageWrapper: {
//       width: 50,
//       height: 50,
//       borderRadius: 25,
//       justifyContent: "center",
//       alignItems: "center",
//       overflow: "hidden",
//       backgroundColor: "rgba(248, 55, 88, 0.1)",
//       borderWidth: 1,
//       borderColor: "#F83758",
//       marginHorizontal: 22,
//     },
//     iconImage: {
//       width: "50%",
//       height: "50%",
//     },
//     signup: {
//       flexDirection: "row",
//       width: "90%",
//       alignItems: "center",
//       justifyContent: "center",
//       borderWidth: 1,
//     },
//   });
  
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    useWindowDimensions,
  } from "react-native";
  import React from "react";
  
  const ContinueWith = ({ navigation, accountLine, route, authType }) => {
    const { width, height } = useWindowDimensions();
    return (
      <View style={[styles.bottomContainer, { gap: height * 0.03 }]}>
        <Text
          style={{ fontFamily: "Montserrat-M", fontSize: 12, color: "#575757" }}
        >
          - OR Continue with -
        </Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={require("../../assets/images/google 1.png")}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.imageWrapper}>
            <Image
              source={require("../../assets/images/apple 1.png")}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.imageWrapper}>
            <Image
              source={require("../../assets/images/facebook-app-symbol 1.png")}
              style={styles.iconImage}
            />
          </View>
        </View>
        <View style={styles.signup}>
          <Text style={styles.signupText}>
            {accountLine}
          </Text>
          <TouchableOpacity
            style={{ paddingHorizontal: width * 0.02 }}
            onPress={() => {
              navigation.navigate(route);
            }}
          >
            <Text style={styles.signupLink}>
              {authType}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default ContinueWith;
  
  const styles = StyleSheet.create({
    bottomContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "60%",
      marginVertical: 10,
    },
    imageWrapper: {
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      backgroundColor: "rgba(248, 55, 88, 0.1)",
      borderWidth: 1,
      borderColor: "#F83758",
      marginHorizontal: 22,
    },
    iconImage: {
      width: "50%",
      height: "50%",
    },
    signup: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      textAlign: "center",
      paddingHorizontal: 10,
    },
    signupText: {
      fontFamily: "Montserrat-R",
      fontSize: 14,
      color: "#575757",
    },
    signupLink: {
      fontFamily: "Montserrat-SB",
      fontSize: 14,
      color: "#F83758",
      textDecorationLine: "underline",
    },
  });
  