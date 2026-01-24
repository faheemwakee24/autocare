import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
} from '../../constants';

interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  variant?: 'default' | 'pill';
  size?: 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  style,
  containerStyle,
  variant = 'default',
  size = 'md',
  leftIcon,
  rightIcon,
  ...textInputProps
}) => {
  const labelStyles = [styles.label, variant === 'pill' && styles.labelPill];

  const inputStyles = [
    styles.inputBase,
    variant === 'pill' ? styles.inputPill : styles.inputDefault,
    size === 'lg' && styles.inputLg,
    error && styles.inputError,
    style,
  ];

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={labelStyles}>{label}</Text>}
      <View style={styles.inputWrapper}>
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
        <TextInput
          style={[
            ...inputStyles,
            (leftIcon || rightIcon) && styles.inputWithIcons,
          ]}
          placeholderTextColor={colors.text.tertiary}
          {...textInputProps}
        />
        {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: typography.fontSize.sm,
    color: colors.text.title,
    marginBottom: spacing.sml,
    fontFamily: typography.fontFamily.medium,
  },
  labelPill: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fontFamily.heading,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBase: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.border.medium,
    paddingHorizontal: spacing.mdl4,
    paddingVertical: spacing.mdl2,
    borderRadius: borderRadius.xxl2,

    fontSize: typography.fontSize.md,
    color: colors.text.primary,
    minHeight: 48,
    fontFamily: typography.fontFamily.regular,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  inputWithIcons: {
    paddingHorizontal: spacing.xl,
  },
  inputDefault: {},
  inputPill: {
    borderRadius: borderRadius.full,
    borderColor: colors.border.light,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.xl,
    minHeight: 70,
    fontSize: typography.fontSize.xl,
    color: colors.text.secondary,
    ...shadows.lg,
  },
  inputLg: {
    fontSize: typography.fontSize.xxl,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.xxl,
  },
  iconLeft: {
    position: 'absolute',
    left: spacing.lg,
    zIndex: 1,
  },
  iconRight: {
    position: 'absolute',
    right: spacing.lg,
    zIndex: 1,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    fontSize: typography.fontSize.sm,
    color: colors.error,
    marginTop: spacing.xs,
  },
});
