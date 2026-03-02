import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileHeader } from '../components/ui';
import { images } from '../assets';
import { colors, spacing, typography, borderRadius, shadows } from '../constants';
import { metrics } from '../utils';
import { RecommendedCard } from '../components/home/RecommendedCard';

export default function HomeScreen() {
  const recommended = [
    { id: 'rec-1', title: 'Exterior', image: images.CarWashImage },
    { id: 'rec-2', title: 'Interior', image: images.WaxGlowImage },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader onBack={() => { }} hideBackButton/>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.greetingContainer}>
          <View style={styles.greetingCard}>
            <Text style={styles.greetingTitle}>Good Evening, James Robert! 👋</Text>
            <Text style={styles.greetingSubtitle}>Ready for a spotless ride?</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Upcoming Bookings</Text>
              <Text style={styles.statValue}>3</Text>
              <Image source={images.Upcoming} style={styles.statImage} />
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Total Services</Text>
              <Text style={styles.statValue}>2</Text>
              <Image source={images.TotalServices} style={styles.statImage} />
            </View>
          </View>

          <View style={styles.subscriptionCard}>
            <View>
              <Text style={styles.subscriptionLabel}>Active Subscription</Text>
              <Text style={styles.subscriptionValue}>Gold</Text>
            </View>
            <Image source={images.Gold} style={styles.subscriptionIcon} />
          </View>

          <View style={styles.searchBar}>
            <View style={styles.searchIcon}>
              <View style={styles.searchCircle} />
              <View style={styles.searchHandle} />
            </View>
            <TextInput
              placeholder="Search carwash or service type..."
              placeholderTextColor={colors.text.tertiary}
              style={styles.searchInput}
            />
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended for You</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recommendedRow}
        >
          {recommended.map(item => (
            <RecommendedCard
              key={item.id}
              title="Ecox Exterior Wash"
              subtitle="Quick clean, perfect shine."
              rating="4.9 (150)"
              price="130 AED"
              actionLabel="View Details"
              image={item.image}
            />
          ))}
        </ScrollView>
        <Text style={[styles.sectionTitle, { marginLeft: spacing.appMarginHorizontal }]}>Recommended for You</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recommendedRow}
        >
          {recommended.map(item => (
            <RecommendedCard
              key={item.id}
              title="Ecox Exterior Wash"
              subtitle="Quick clean, perfect shine."
              rating="4.9 (150)"
              price="130 AED"
              actionLabel="View Details"
              image={item.image}
            />
          ))}
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  content: {
    paddingBottom: spacing.xxxl,
    gap: spacing.mdl2,
  },
  greetingContainer: {
    gap: spacing.mdl2,
    marginHorizontal: spacing.appMarginHorizontal
  },
  greetingCard: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.mdl,
    paddingVertical: spacing.mdl,
    marginTop: spacing.lg,
    ...shadows.sm,
  },
  greetingTitle: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.lg,
    color: colors.white,
  },
  greetingSubtitle: {
    marginTop: spacing.xs,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.white,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxl,
    borderWidth: 1,
    borderColor: colors.border.light,
    padding: spacing.mdl2,
    ...shadows.md,
  },
  statLabel: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xs,
    color: colors.text.title,
  },
  statValue: {

    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.xxxs,
    color: colors.text.title,
  },
  statImage: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 80,
    height: 80,
  },
  subscriptionCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border.light,
    ...shadows.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subscriptionLabel: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.text.title,
  },
  subscriptionValue: {
    marginTop: spacing.xs,
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize.xxxl,
    color: colors.text.title,
  },
  subscriptionIcon: {
    width: metrics.width(150),
    height: metrics.width(100),
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxxl,
    borderWidth: 1,
    borderColor: colors.border.light,
    paddingHorizontal: spacing.lg,
    paddingVertical: Platform.OS === 'ios' ? spacing.mdl3 : spacing.sm,
    ...shadows.md,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: spacing.md,
  },
  searchCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  searchHandle: {
    position: 'absolute',
    width: 8,
    height: 2,
    backgroundColor: colors.secondary,
    right: 0,
    bottom: 1,
    transform: [{ rotate: '45deg' }],
  },
  searchInput: {
    flex: 1,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.text.title,
  },
  sectionHeader: {
    marginTop: spacing.sm,
  },
  sectionTitle: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.lg,
    color: colors.text.title,
  },
  recommendedRow: {
    gap: spacing.lg,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.appMarginHorizontal,
  },
});