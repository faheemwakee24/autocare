import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';

import { colors, spacing, borderRadius, typography } from '../../constants';

export type SegmentedTabItem = {
  key: string;
  label: string;
};

type Props = {
  items: SegmentedTabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  activeButtonStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeTextStyle?: TextStyle;
};

export const SegmentedTabs: React.FC<Props> = ({
  items,
  activeKey,
  onChange,
  containerStyle,
  buttonStyle,
  activeButtonStyle,
  textStyle,
  activeTextStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {items.map(item => {
        const isActive = item.key === activeKey;
        return (
          <Pressable
            key={item.key}
            style={[
              styles.button,
              buttonStyle,
              isActive && styles.buttonActive,
              isActive && activeButtonStyle,
            ]}
            onPress={() => onChange(item.key)}
          >
            <Text
              style={[
                styles.text,
                textStyle,
                isActive && styles.textActive,
                isActive && activeTextStyle,
              ]}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  button: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.xxxl,
    borderWidth: 1,
    borderColor: colors.border.dark2,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  buttonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.secondary,
  },
  textActive: {
    color: colors.white,
  },
});
