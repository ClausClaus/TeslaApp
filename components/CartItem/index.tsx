import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './style';

interface Props {}

const CarItem = (props: Props) => {
  const {} = props;
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('./assets/images/ModelX.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>
    </View>
  );
};

export default CarItem;
