import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// Assets
import { Logo } from '../../assets';

// Constants
import { colors, spacing, typography } from '../../constants';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Logo width={80} height={80} />
        <Text style={styles.title}>AutoCare</Text>
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loader}
        />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    marginTop: spacing.lg,
    marginBottom: spacing.xxxl,
  },
  loader: {
    marginVertical: spacing.xl,
  },
  loadingText: {
    fontSize: typography.fontSize.md,
    color: colors.white,
    opacity: 0.8,
  },
});