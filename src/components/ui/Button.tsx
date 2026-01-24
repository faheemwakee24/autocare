import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../constants';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const VARIANT_STYLES: Record<
  ButtonVariant,
  { container: ViewStyle; text: TextStyle; spinner: string }
> = {
  primary: {
    container: {
      backgroundColor: colors.primary,
      ...shadows.sm,
    },
    text: { color: colors.white },
    spinner: colors.white,
  },
  secondary: {
    container: {
      backgroundColor: colors.secondary,
      ...shadows.sm,
    },
    text: { color: colors.white },
    spinner: colors.white,
  },
  outline: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: colors.primary,
    },
    text: { color: colors.text.title },
    spinner: colors.primary,
  },
  ghost: {
    container: {
      backgroundColor: 'transparent',
    },
    text: { color: colors.primary },
    spinner: colors.primary,
  },
  danger: {
    container: {
      backgroundColor: colors.error,
      ...shadows.sm,
    },
    text: { color: colors.white },
    spinner: colors.white,
  },
  link: {
    container: {
      backgroundColor: 'transparent',
      paddingHorizontal: 0,
      paddingVertical: 0,
      minHeight: undefined,
      ...shadows.sm,
    },
    text: {
      color: colors.primary,
      textDecorationLine: 'underline',
    },
    spinner: colors.primary,
  },
};

const SIZE_STYLES: Record<ButtonSize, { container: ViewStyle; text: TextStyle }> = {
  sm: {
    container: {
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      minHeight: 36,
    },
    text: { fontSize: typography.fontSize.sm },
  },
  md: {
    container: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      minHeight: 44,
    },
    text: { fontSize: typography.fontSize.md },
  },
  lg: {
    container: {
      paddingVertical: spacing.mdl,
      paddingHorizontal: spacing.xl,
      minHeight: 52,
    },
    text: { fontSize: typography.fontSize.sm },
  },
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  leftIcon,
  rightIcon,
}) => {
  const baseVariant = VARIANT_STYLES[variant];
  const baseSize = SIZE_STYLES[size];

  const spinnerColor =
    disabled && (variant === 'outline' || variant === 'ghost')
      ? colors.gray[400]
      : disabled
        ? colors.white
        : baseVariant.spinner;

  const containerStyle = StyleSheet.flatten([
    styles.base,
    baseSize.container,
    baseVariant.container,
    disabled && styles.disabled,
    disabled &&
      (variant === 'primary' ||
        variant === 'secondary' ||
        variant === 'danger') && { backgroundColor: colors.gray[400] },
    disabled &&
      (variant === 'outline' || variant === 'ghost') && { borderColor: colors.gray[400] },
    style,
  ]);

  const textStyle = StyleSheet.flatten([
    styles.title,
    baseVariant.text,
    baseSize.text,
    disabled &&
      (variant === 'outline' || variant === 'ghost') && { color: colors.text.title},
  ]);

  const shouldShowLeftIcon = !!leftIcon && !loading;
  const shouldShowRightIcon = !!rightIcon && !loading;

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        {loading && (
          <ActivityIndicator
            size="small"
            color={spinnerColor}
            style={styles.loader}
          />
        )}

        {shouldShowLeftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}

        <Text style={textStyle}>{title}</Text>

        {shouldShowRightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.xxxl,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  disabled: {
    opacity: 0.6,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: typography.fontFamily.semiBold,
  },
  iconLeft: {
    marginRight: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRight: {
    marginLeft: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    marginRight: spacing.sm,
  },
});