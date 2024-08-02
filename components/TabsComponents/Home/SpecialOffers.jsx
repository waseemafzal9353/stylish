import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import SpecialOfferItem from './SpecialOfferItem';
import deals from '../../../data/hotDeals';

const { width } = Dimensions.get('window');

const SpecialOffers = () => {
  const progress = useSharedValue(0); 
  const ref = React.useRef(null);

  const onPressPagination = (index) => {
    ref.current?.scrollTo({
      count: index,
      animated: true,
    });
  };

  const CustomPagination = ({ data, progress, onPress }) => {
    return (
      <View style={styles.paginationContainer}>
        {data.map((_, index) => {
          const animatedStyle = useAnimatedStyle(() => {
            const activeIndex = Math.round(progress.value);
            const isActive = index === activeIndex;
            return {
              backgroundColor: isActive ? '#FFA3B3' : 'rgba(0,0,0,0.2)',
            };
          });

          return (
            <Animated.View
              key={index}
              style={[styles.dot, animatedStyle]}
            >
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => onPress(index)}
              />
            </Animated.View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        data={deals}
        renderItem={({ item }) => <SpecialOfferItem item={item} />}
        width={width}
        height={200}
        loop
        autoPlay
        autoPlayInterval={2000}
        onProgressChange={(progressValue) => {
          progress.value = progressValue;
        }}
        style={styles.carousel}
      />
      <CustomPagination
        progress={progress}
        data={deals}
        onPress={onPressPagination}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    
  },
  carousel: {
    marginBottom: 20,
    marginLeft: (width - width * 0.86) / 2
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    width: width,
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  touchable: {
    flex: 1,
  },
});

export default SpecialOffers;
