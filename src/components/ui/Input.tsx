import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextInputProps,
  Pressable,
} from 'react-native';
import {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
} from '../../constants';
import { Svgs } from '../../assets/icons';

const EYE_ICON_SIZE = 22;

interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  error?: string;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  variant?: 'default' | 'pill';
  size?: 'md' | 'lg';
  secured?: boolean;
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
  secured = false,
  leftIcon,
  rightIcon,
  secureTextEntry,
  ...textInputProps
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const isSecure = secured ? !passwordVisible : secureTextEntry;
  const showRightIcon = secured || rightIcon;

  const labelStyles = [styles.label, variant === 'pill' && styles.labelPill];

  const inputStyles = [
    styles.inputBase,
    variant === 'pill' ? styles.inputPill : styles.inputDefault,
    size === 'lg' && styles.inputLg,
    error && styles.inputError,
    style,
  ];

  const rightIconContent = secured ? (
    <Pressable
      onPress={() => setPasswordVisible((v) => !v)}
      style={styles.eyeButton}
      hitSlop={8}
    >
      {passwordVisible ? (
        <Svgs.EyeON width={EYE_ICON_SIZE} height={EYE_ICON_SIZE} />
      ) : (
        <Svgs.EyeOFF width={EYE_ICON_SIZE} height={EYE_ICON_SIZE} />
      )}
    </Pressable>
  ) : (
    rightIcon
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={labelStyles}>{label}</Text>}
      <View style={[styles.inputWrapper, variant === 'pill' && styles.inputWrapperShadow]}>
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
        <TextInput
          style={[
            ...inputStyles,
            (leftIcon || showRightIcon) && styles.inputWithIcons,
          ]}
          placeholderTextColor={colors.text.tertiary}
          secureTextEntry={isSecure}
          {...textInputProps}
        />
        {showRightIcon && <View style={styles.iconRight}>{rightIconContent}</View>}
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
    borderRadius: borderRadius.xxl2,
    backgroundColor: colors.white,
    ...shadows.md,
  },
  inputWrapperShadow: {
    ...shadows.lg,
    borderRadius: borderRadius.full,
  },
  inputBase: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.border.medium,
    paddingHorizontal: spacing.mdl4,
    paddingVertical: spacing.mdl2,
    borderRadius: borderRadius.xxl2,
    backgroundColor: colors.white,
    fontSize: typography.fontSize.md,
    color: colors.text.primary,
    minHeight: 48,
    fontFamily: typography.fontFamily.regular,
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
  eyeButton: {
    padding: spacing.xs,
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
