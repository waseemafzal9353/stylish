import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const NextButton = ({ scrollTo, currentIndex, dataLength }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={currentIndex < dataLength - 1 ? scrollTo : () => {router.push('/getStarted')}}
      style={styles.buttonContainer}
    >
      <Text style={styles.button}>
        {currentIndex < dataLength - 1 ? 'Next' : 'Get Started'}
      </Text>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontFamily: 'Montserrat-SB',
    fontSize: 18,
    color: '#F83758',
  },
});
