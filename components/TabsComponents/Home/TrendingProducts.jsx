import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import AntDesign from '@expo/vector-icons/AntDesign';
const TrendingProducts = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.trending}>
      <Text style={styles.trendingText}>Trending Products</Text>
      <View style={styles.calendar}>
      <AntDesign name="calendar" size={22} color="white" />
        <Text style={styles.date}>Last Date 29/02/22</Text>
      </View>
      </View>
      <View style={styles.view}>
        <Text style={styles.viewText}>View all</Text>
        <AntDesign name="arrowright" size={18} color="#ffffff" />
      </View>
      </View>
  )
}

export default TrendingProducts

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FD6E87',
        width: wp(90),
        marginVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: hp(7),
        borderRadius: 10
    },
    trending: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    trendingText: {
        color: '#ffffff',
        fontFamily: 'Montserrat-R',
        fontSize: hp(1.8)
    },
    calendar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    date: {
        color: '#ffffff',
        paddingHorizontal: 5,
        fontFamily: 'Montserrat-R',
        fontSize: hp(1.5)
    },
    view: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 5,
        height: '60%',
    },
    viewText: {
        fontFamily: 'Montserrat-SB',
        color: '#ffffff',
        paddingHorizontal: 10,
        fontSize: hp(1.6)
    }
})