import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { Card, Button } from '../components/ui';

// Assets
import { Logo } from '../assets';

// Hooks
import { useNavigation } from '../hooks';

// Constants
import { colors, spacing, typography, shadows } from '../constants';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('MainTabs', { screen: 'Profile' });
  };

  const handleSettingsPress = () => {
    navigation.navigate('MainTabs', { screen: 'Services' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo width={60} height={60} />
        <Text style={styles.title}>AutoCare</Text>
        <Text style={styles.subtitle}>Your Automotive Companion</Text>
      </View>

      <View style={styles.content}>
        <Card style={styles.welcomeCard}>
          <Text style={styles.welcomeText}>
            Welcome to AutoCare! Manage your vehicles, track maintenance, and stay on top of your automotive needs.
          </Text>
        </Card>

        <View style={styles.buttonContainer}>
          <Button
            title="View Profile"
            onPress={handleProfilePress}
            style={styles.button}
          />

          <Button
            title="Settings"
            onPress={handleSettingsPress}
            variant="outline"
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    alignItems: 'center',
    paddingVertical: spacing.xxxl,
    backgroundColor: colors.background.secondary,
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    borderRadius: 12,
    ...shadows.md,
  },
  title: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginTop: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
    marginTop: spacing.sm,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  welcomeCard: {
    marginBottom: spacing.xl,
  },
  welcomeText: {
    fontSize: typography.fontSize.md,
    color: colors.text.primary,
    lineHeight: typography.lineHeight.relaxed,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: spacing.md,
  },
  button: {
    marginVertical: 0,
  },
});