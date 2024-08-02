import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const SearchCard = () => {
    const {width, height} = useWindowDimensions();

  return (
    <View style={[styles.main, {width: width*0.9}]}>
     <View style={styles.search}>
     <MaterialIcons name="search" size={24} color="#BBBBBB" />
      <TextInput placeholder='Search any Product...' 
      placeholderTextColor="#BBBBBB" 
      selectionColor="#000" style={styles.textInput}/>
     </View>
      <TouchableOpacity>
      <Feather name="mic" size={24} color="#BBBBBB" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchCard

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        borderRadius: 7,
        textAlign: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        shadowColor: '#BBBBBB',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3.5,
        elevation: 10,
        overflow: 'hidden',
        marginTop: 10,
    },
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      paddingHorizontal: 10,
  },
  textInput: {
      flex: 1,
      fontSize: 14,
      paddingLeft: 10,
      lineHeight: 20,
      fontFamily: 'Montserrat-R',
      color: '#000',
  },
})