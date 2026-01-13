import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../constants';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  style,
}) => {
  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    };

    const sizeStyles: Record<typeof size, ViewStyle> = {
      sm: {
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        minHeight: 36,
      },
      md: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        minHeight: 44,
      },
      lg: {
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.xl,
        minHeight: 52,
      },
    };

    const variantStyles: Record<typeof variant, ViewStyle> = {
      primary: {
        backgroundColor: disabled ? colors.gray[400] : colors.primary,
        ...shadows.sm,
      },
      secondary: {
        backgroundColor: disabled ? colors.gray[400] : colors.secondary,
        ...shadows.sm,
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: disabled ? colors.gray[400] : colors.primary,
      },
      ghost: {
        backgroundColor: 'transparent',
      },
      danger: {
        backgroundColor: disabled ? colors.gray[400] : colors.error,
        ...shadows.sm,
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...(disabled && { opacity: 0.6 }),
      ...style,
    };
  };

  const getTextStyle = () => {
    const sizeStyles = {
      sm: { fontSize: typography.fontSize.sm },
      md: { fontSize: typography.fontSize.md },
      lg: { fontSize: typography.fontSize.lg },
    };

    const variantStyles = {
      primary: { color: colors.white },
      secondary: { color: colors.white },
      outline: { color: disabled ? colors.gray[400] : colors.primary },
      ghost: { color: disabled ? colors.gray[400] : colors.primary },
      danger: { color: colors.white },
    };

    return {
      fontWeight: typography.fontWeight.semibold,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? colors.primary : colors.white}
          style={{ marginRight: spacing.sm }}
        />
      )}
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};