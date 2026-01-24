import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// Components
import { Button, Card } from '../../components/ui';

// Assets
import { FontFamily, Logo, Svgs } from '../../assets';

// Hooks
import { useNavigation } from '../../hooks';

// Constants
import { colors, spacing, typography } from '../../constants';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Logo width={80} height={80} />
          <Text style={styles.title}>Welcome to AutoCare</Text>
          <Svgs.Logo/>
          <Text style={styles.subtitle}>
            Your trusted automotive companion for maintenance and service tracking
          </Text>
        </View>

        <Card style={styles.welcomeCard}>
          <Text style={styles.description}>
            Keep your vehicles running smoothly with our comprehensive maintenance tracking,
            service history, and smart reminders.
          </Text>

          <View style={styles.features}>
            <Text style={styles.feature}>• Track maintenance schedules</Text>
            <Text style={styles.feature}>• Store service history</Text>
            <Text style={styles.feature}>• Get smart reminders</Text>
            <Text style={styles.feature}>• Manage multiple vehicles</Text>
            
          </View>
        </Card>

        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={handleSignupPress}
            style={styles.primaryButton}
          />
          <Button
            title="Sign In"
            variant="outline"
            onPress={handleLoginPress}
            style={styles.secondaryButton}
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
  content: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: spacing.xxxl,
  },
  title: {
    fontFamily:FontFamily.playfair.medium,
    fontSize: typography.fontSize.xxxl,
    color: colors.primary,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: typography.lineHeight.relaxed,
  },
  welcomeCard: {
    marginVertical: spacing.xl,
  },
  description: {
    fontSize: typography.fontSize.md,
    color: colors.text.primary,
    lineHeight: typography.lineHeight.relaxed,
    marginBottom: spacing.lg,
  },
  features: {
    marginTop: spacing.md,
  },
  feature: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  buttonContainer: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  primaryButton: {
    marginVertical: 0,
  },
  secondaryButton: {
    marginVertical: 0,
  },
});