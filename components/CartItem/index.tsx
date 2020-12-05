import React from 'react';
import { Text, View, ImageBackground, ImageSourcePropType } from 'react-native';
import StyleButton from '../StyleButton';
import styles from './styles';

interface Props {
  name: string;
  tagline: string;
  taglineCTA?: string;
  image: ImageSourcePropType;
}

const CartItem = (props: Props) => {
  const { name, tagline, taglineCTA, image } = props;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}
          {'  '}
          <Text style={styles.subTitleCta}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default CartItem;
