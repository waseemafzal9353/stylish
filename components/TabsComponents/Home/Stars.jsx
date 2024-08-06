import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StarRating = () => {
  // Full stars
  const fullStars = 4;
  // Half stars
  const halfStars = 1;
  // Total stars
  const totalStars = 5;

  // Render stars
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Ionicons key={`full-${i}`} name="star" size={20} color="#EDB310" />);
    }
    if (halfStars > 0) {
      stars.push(<Ionicons key="half" name="star-half" size={20} color="#EDB310" />);
    }
    for (let i = fullStars + halfStars; i < totalStars; i++) {
      stars.push(<Ionicons key={`empty-${i}`} name="star-outline" size={20} color="#EDB310" />);
    }
    return stars;
  };

  return <View style={styles.starContainer}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    gap: 3,
  },
});

export default StarRating;
