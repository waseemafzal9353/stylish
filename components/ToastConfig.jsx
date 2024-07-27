import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const ToastConfig = {
  success: ({ text1, text2, props }) => (
    <View style={styles.toastContainer}>
      <Text style={styles.toastTitle}>{text1}</Text>
      <Text style={styles.toastMessage}>{text2}</Text>
    </View>
  ),
  error: ({ text1, text2, props }) => (
    <View style={[styles.toastContainer, styles.toastError]}>
      <Text style={styles.toastTitle}>{text1}</Text>
      <Text style={styles.toastMessage}>{text2}</Text>
    </View>
  ),
  info: ({ text1, text2, props }) => (
    <View style={[styles.toastContainer, styles.toastInfo]}>
      <Text style={styles.toastTitle}>{text1}</Text>
      <Text style={styles.toastMessage}>{text2}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 8,
    marginBottom: 10,
  },
  toastTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  toastMessage: {
    fontSize: 16,
    color: 'white',
  },
  toastError: {
    backgroundColor: '#F83758',
  },
  toastInfo: {
    backgroundColor: 'blue',
  },
});

export default ToastConfig;
