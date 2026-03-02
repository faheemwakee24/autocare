import React, { useEffect, useMemo, useRef } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  ViewStyle,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';

import {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
} from '../../constants';
import { metrics } from '../../utils';

type OtpInputProps = {
  value: string;
  onChange: (code: string) => void;
  length?: number;
  secure?: boolean;
  containerStyle?: ViewStyle;
  boxStyle?: ViewStyle;
  filledBoxStyle?: ViewStyle;
  emptyBoxStyle?: ViewStyle;
  textStyle?: TextStyle;
  keyboardType?: KeyboardTypeOptions;
  autoFocus?: boolean;
  onComplete?: (code: string) => void;
};

export const OtpInput: React.FC<OtpInputProps> = ({
  value,
  onChange,
  length = 4,
  secure = false,
  containerStyle,
  boxStyle,
  filledBoxStyle,
  emptyBoxStyle,
  textStyle,
  keyboardType = 'number-pad',
  autoFocus = true,
  onComplete,
}) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (value.length === length && onComplete) {
      onComplete(value);
    }
  }, [value, length, onComplete]);

  const slots = useMemo(() => Array.from({ length }), [length]);

  const handleChange = (text: string) => {
    const sanitized =
      keyboardType === 'number-pad'
        ? text.replace(/[^0-9]/g, '').slice(0, length)
        : text.slice(0, length);

    onChange(sanitized);
  };

  return (
    <View style={[styles.row, containerStyle]}>
      {slots.map((_, i) => {
        const isFilled = value.length > i;
        const displayChar = secure ? '•' : value[i];

        return (
          <View key={i} style={styles.inputBoxShadowWrapper}>
            <Pressable
              style={[
                styles.inputBox,
                boxStyle,
                isFilled ? styles.inputBoxFilled : styles.inputBoxEmpty,
                isFilled ? filledBoxStyle : emptyBoxStyle,
              ]}
              onPress={() => inputRef.current?.focus()}
            >
              {isFilled && (
                <Text style={[styles.pinText, textStyle]}>{displayChar}</Text>
              )}
            </Pressable>
          </View>
        );
      })}

      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChange}
        keyboardType={keyboardType}
        maxLength={length}
        style={styles.hiddenInput}
        autoFocus={autoFocus}
        editable
        pointerEvents="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  inputBoxShadowWrapper: {
    height: metrics.width(60),
    width: metrics.width(60),
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
  },
  inputBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBoxFilled: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  inputBoxEmpty: {
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0.01,
    width: '100%',
    height: 80,
  },
  pinText: {
    fontSize: typography.fontSize.xxxl,
    fontFamily: typography.fontFamily.bold,
    color: colors.text.title,
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: typography.fontSize.xxxl,
  },
});
