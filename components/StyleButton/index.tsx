import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';

interface Props {
  type: string;
  content: string;
  onPress: () => void;
}

const StyleButton = (props: Props) => {
  const { type, content, onPress } = props;
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#ffffffA6';
  const textColor = type === 'primary' ? '#ffffff' : '#171A20';

  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};
export default StyleButton;
