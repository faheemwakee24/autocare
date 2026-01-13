import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { Header, Card, Button } from '../components/ui';

// Hooks
import { useNavigation, useSettings } from '../hooks';

// Constants
import { colors, spacing, typography } from '../constants';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const { settings, updateNotifications, updatePrivacy } = useSettings();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleNotificationToggle = (value: boolean) => {
    updateNotifications({ pushEnabled: value });
  };

  const handleLocationToggle = (value: boolean) => {
    updatePrivacy({ locationEnabled: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Settings"
        showBackButton
        onLeftPress={handleBackPress}
      />

      <View style={styles.content}>
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>

          <View style={styles.setting}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Push Notifications</Text>
              <Text style={styles.settingDescription}>Receive service reminders</Text>
            </View>
            <Switch
              value={settings.notifications.pushEnabled}
              onValueChange={handleNotificationToggle}
              trackColor={{ false: colors.gray[400], true: colors.primaryLight }}
              thumbColor={settings.notifications.pushEnabled ? colors.primary : colors.gray[100]}
            />
          </View>

          <View style={styles.setting}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Location Services</Text>
              <Text style={styles.settingDescription}>Find nearby services</Text>
            </View>
            <Switch
              value={settings.privacy.locationEnabled}
              onValueChange={handleLocationToggle}
              trackColor={{ false: colors.gray[400], true: colors.primaryLight }}
              thumbColor={settings.privacy.locationEnabled ? colors.primary : colors.gray[100]}
            />
          </View>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <Button
            title="Change Password"
            variant="outline"
            style={styles.accountButton}
          />

          <Button
            title="Privacy Policy"
            variant="outline"
            style={styles.accountButton}
          />

          <Button
            title="Logout"
            variant="danger"
            style={styles.accountButton}
          />
        </Card>
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
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.lg,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  settingInfo: {
    flex: 1,
  },
  settingTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.primary,
  },
  settingDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginTop: spacing.xs,
  },
  accountButton: {
    marginVertical: spacing.xs,
  },
});