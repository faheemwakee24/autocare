import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

import { colors, spacing, borderRadius, typography, shadows } from '../../constants';
import { Svgs } from '../../assets';

type DropdownProps = {
  label?: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  headerStyle?: StyleProp<ViewStyle>;
  /**
   * Render the dropdown body when open. Close helper is provided.
   */
  renderBody: (helpers: { close: () => void }) => React.ReactNode;
};

export const Dropdown = ({
  label,
  placeholder,
  value,
  disabled,
  containerStyle,
  headerStyle,
  renderBody,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    if (disabled) return;
    setOpen(prev => !prev);
  };
  const close = () => setOpen(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <Pressable
        style={[
          styles.header,
          open && styles.headerOpen,
          disabled && styles.headerDisabled,
          headerStyle,
        ]}
        onPress={toggle}
        disabled={disabled}
      >
        <Text
          style={[
            styles.value,
            !value && styles.placeholder,
          ]}
          numberOfLines={1}
        >
          {value || placeholder}
        </Text>
        <Text style={[styles.caret, !open && styles.caretOpen]}><Svgs.DropDwonIcon/></Text>
      </Pressable>

      {open && <View style={styles.body}>{renderBody({ close })}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: typography.fontSize.sm,
    color: colors.text.title,
    marginBottom: spacing.sml,
    fontFamily: typography.fontFamily.regular,
  },
  header: {
    borderWidth: 1,
    borderColor: colors.border.light,
    borderRadius: borderRadius.xxxl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shadows.sm,
  },
  headerOpen: {
    borderColor: colors.primary,
  },
  headerDisabled: {
    opacity: 0.5,
  },
  value: {
    flex: 1,
    marginRight: spacing.sm,
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.regular,
  },
  placeholder: {
    color: colors.text.tertiary,
  },
  caret: {
    color: colors.text.primary,
    fontSize: typography.fontSize.md,
  },
  caretOpen: {
    transform: [{ rotate: '180deg' }],
  },
  body: {
    marginTop: spacing.sm,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxl,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.sm,
    overflow: 'hidden',
  },
});
