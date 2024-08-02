import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ShowCategories = ({item}) => {
  return (
  <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
      <Image source={item.image} style={styles.image}/>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  </TouchableOpacity>
  )
}

export default ShowCategories

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 5
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    text: {
        fontFamily: 'Montserrat-R',
        color: 'black',
        fontSize: 15,
        lineHeight: 20
    }
})