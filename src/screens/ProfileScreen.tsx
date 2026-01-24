import React, { useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileHeader, SegmentedTabs } from '../components/ui';
import { useNavigation } from '../hooks';
import { colors, spacing } from '../constants';
import { ProfileOverview } from '../components/profile/ProfileOverview';
import { SettingsPanel } from '../components/profile/SettingsPanel';

type TabKey = 'profile' | 'settings';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<TabKey>('profile');
  const [remindersOn, setRemindersOn] = useState(true);

  const tabs = useMemo(
    () => [
      { key: 'profile', label: 'Profile' },
      { key: 'settings', label: 'Settings' },
    ],
    [],
  );

  const handleBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader onBack={handleBackPress}  onNotification={() => navigation.navigate('Notifications')}/>

      <SegmentedTabs
        items={tabs}
        containerStyle={{ marginHorizontal: spacing.lg, marginTop: spacing.lg }}
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key as TabKey)}
      />
      <View style={styles.content}>
        {activeTab === 'profile' ? (
          <ProfileOverview
            avatarUri="https://i.pravatar.cc/300?img=47"
            name="Dominic Toretto"
            email="dominic.toretto@gmail.com"
            onLogout={() => { }}
            onEditProfile={() => navigation.navigate('EditAccount')}
          />
        ) : (
          <SettingsPanel
            remindersOn={remindersOn}
            onToggleReminders={setRemindersOn}
            onChangePassword={() => navigation.navigate('ChangePassword')}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
});