import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

// Assets
import { images } from '../../assets';

// Constants
import { colors, spacing, typography } from '../../constants';
import { metrics } from '../../utils';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={images.AppIcon} style={styles.logo} />
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
  logo: {
    width: metrics.screenWidth * 0.5,
    height: metrics.screenWidth * 0.5,
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