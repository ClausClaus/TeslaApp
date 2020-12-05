import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StyleButton from '../StyleButton';
import styles from './styles';

interface Props {}

const CarItem = (props: Props) => {
  const {} = props;
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>

      <StyleButton
        type="primary"
        content={'Custom Order'}
        onPress={() => {
          console.warn('Custom Order was pressed');
        }}
      />

      <StyleButton
        type="secondary"
        content={'Existing Inventory'}
        onPress={() => {
          console.warn('Existing Inventory was pressed');
        }}
      />
    </View>
  );
};

export default CarItem;
