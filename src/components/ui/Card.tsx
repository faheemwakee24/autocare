import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../../constants';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  margin?: number;
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = spacing.md,
  margin,
  shadow = 'md',
  backgroundColor = colors.background.card,
}) => {
  const cardStyle: ViewStyle = {
    backgroundColor,
    borderRadius: borderRadius.lg,
    padding,
    ...(margin !== undefined && { margin }),
    ...shadows[shadow],
    ...style,
  };

  return <View style={cardStyle}>{children}</View>;
};