import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

import { Svgs } from '../../assets';
import { colors, spacing, borderRadius, typography } from '../../constants';
import { metrics } from '../../utils';

type CustomCheckboxProps = {
  checked: boolean;
  onPress: () => void;
  label?: string;
  size?: number;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

export const CustomCheckbox = ({
  checked,
  onPress,
  label,
  size = metrics.width(16),
  disabled,
  containerStyle,
  labelStyle,
}: CustomCheckboxProps) => {
  return (
    <Pressable
      style={[styles.container, containerStyle, disabled && styles.disabled]}
      onPress={onPress}
      hitSlop={8}
      disabled={disabled}
    >
      {checked ? (
        <Svgs.CheckCircle height={size} width={size} color={colors.primary} />
      ) : (
        <View
          style={[
            styles.uncheckedCircle,
            { width: size, height: size, borderRadius: borderRadius.full },
          ]}
        />
      )}
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  disabled: {
    opacity: 0.6,
  },
  label: {
    color: colors.text.primary,
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fontFamily.medium,
  },
  uncheckedCircle: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
