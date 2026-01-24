import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../constants';

type CheckboxSize = 'sm' | 'md';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  label?: string;
  disabled?: boolean;
  size?: CheckboxSize;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const SIZE_MAP: Record<CheckboxSize, { box: number; check: number }> = {
  sm: { box: 18, check: 10 },
  md: { box: 20, check: 12 },
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onPress,
  label,
  disabled = false,
  size = 'md',
  containerStyle,
  labelStyle,
}) => {
  const { box, check } = SIZE_MAP[size];

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        disabled && styles.containerDisabled,
        containerStyle,
      ]}
    >
      <View
        style={[
          styles.box,
          { width: box, height: box, borderRadius: borderRadius.sm },
          checked && styles.boxChecked,
          disabled && styles.boxDisabled,
        ]}
      >
        {checked && (
          <View
            style={[
              styles.check,
              {
                width: check,
                height: check,
                borderRadius: check / 2,
              },
            ]}
          />
        )}
      </View>

      {label ? (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  containerDisabled: {
    opacity: 0.6,
  },
  box: {
    borderWidth: 1,
    borderColor: colors.border.medium,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  boxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  boxDisabled: {
    borderColor: colors.border.light,
  },
  check: {
    backgroundColor: colors.white,
  },
  label: {
    fontSize: typography.fontSize.sm,
    color: colors.text.primary,
    fontFamily: typography.fontFamily.medium,
  },
});
