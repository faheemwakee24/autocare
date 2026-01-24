import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileHeader } from '../components/ui';
import { borderRadius, colors, shadows, spacing, typography } from '../constants';

type NotificationItem = {
  id: string;
  title: string;
  subtitle: string;
  time: string;
  unread?: boolean;
  iconEmoji: string;
};

type NotificationSection = {
  id: string;
  title: string;
  items: NotificationItem[];
};

const notifications: NotificationSection[] = [
  {
    id: 'today',
    title: 'Today',
    items: [
      {
        id: 'n1',
        title: 'Monthly car service',
        subtitle: 'Toyota Camry–Oil Change',
        time: '2 min',
        unread: true,
        iconEmoji: '🛠️',
      },
      {
        id: 'n2',
        title: 'Receipt for shell fuel not found',
        subtitle: 'Honda Civic',
        time: '1 h',
        unread: true,
        iconEmoji: '🧾',
      },
    ],
  },
  {
    id: 'yesterday',
    title: 'Yesterday',
    items: [
      {
        id: 'n3',
        title: 'Monthly car service',
        subtitle: 'Toyota Camry–Oil Change',
        time: '2 min',
        iconEmoji: '🛠️',
      },
      {
        id: 'n4',
        title: 'Receipt for shell fuel not found',
        subtitle: 'Honda Civic',
        time: '1 h',
        iconEmoji: '🧾',
      },
    ],
  },
];

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader onBack={() => {}} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Your Notification</Text>

        {notifications.map(section => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>

            {section.items.map(item => (
              <View key={item.id} style={styles.card}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarEmoji}>{item.iconEmoji}</Text>
                </View>
                <View style={styles.cardText}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                </View>
                <View style={styles.meta}>
                  <Text style={styles.time}>{item.time}</Text>
                  {item.unread && <View style={styles.unreadDot} />}
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  title: {
    marginTop: spacing.mdl4,
    textAlign: 'center',
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xl,
    color: colors.text.title,
  },
  section: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xsm,
    color: colors.text.title,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:spacing.md,
    paddingVertical:spacing.mdl2,
    borderRadius: borderRadius.xxl,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border.medium,
    ...shadows.sm,
    gap: spacing.md,
  },
  avatar: {
    width: 37,
    height: 37,
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: {
    fontSize: typography.fontSize.sm,
    color: colors.white,
  },
  cardText: {
    flex: 1,
    gap: spacing.xs,
  },
  cardTitle: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.text.title,
  },
  cardSubtitle: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.secondary,
  },
  meta: {
    gap: spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.secondary,
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});
