import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CartItem from '../CartItem';
import cart from './cart';
import styles from './styles';

const CartList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItem {...item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};
export default CartList;
