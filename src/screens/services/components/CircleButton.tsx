import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from '../styles';

type Props = {
  label: string;
  onPress?: () => void;
};

const CircleButton = ({ label, onPress }: Props) => {
  return (
    <Pressable style={styles.circleButton} onPress={onPress}>
      <Text style={styles.circleButtonText}>{label}</Text>
    </Pressable>
  );
};

export default CircleButton;
