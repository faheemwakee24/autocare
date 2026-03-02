import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { ProfileHeader } from '../components/ui';
import { images } from '../assets';
import { Svgs } from '../assets/icons';
import { colors, spacing, typography, borderRadius, shadows } from '../constants';
import { metrics } from '../utils';

export default function DriverHome() {
  const assignedJobs = [
    {
      id: 'job-1',
      name: 'Mohammad Ali',
      car: 'Toyota Model 3',
      date: '23/07/2026',
      time: '10:00 AM',
      location: 'Dubai Arena',
      service: 'Premium Wash',
      price: '130 AED',
      status: 'Pending',
    },
    {
      id: 'job-2',
      name: 'Mohammad Ali',
      car: 'Toyota Model 3',
      date: '23/07/2026',
      time: '10:00 AM',
      location: 'Dubai Arena',
      service: 'Premium Wash',
      price: '130 AED',
      status: 'Pending',
    },
    {
      id: 'job-2',
      name: 'Mohammad Ali',
      car: 'Toyota Model 3',
      date: '23/07/2026',
      time: '10:00 AM',
      location: 'Dubai Arena',
      service: 'Premium Wash',
      price: '130 AED',
      status: 'Pending',
    },
  ];

  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={{ top: 0, left: 0, right: 0, borderBottomLeftRadius: 28, borderBottomRightRadius: 28, overflow: 'hidden' }}>
        <ImageBackground source={images.DriverDashboardMain} style={[styles.headerImage, { paddingTop: (insets.top + 5) }]} >
          <ProfileHeader onBack={() => { }} />
          
        </ImageBackground>
      </View>
      <View style={[styles.greetingCard, { marginTop: metrics.width(50) }]}>
        <Text style={styles.greetingTitle}>Good Evening, James Robert! 👋</Text>
        <Text style={styles.greetingSubtitle}>Start your services</Text>
      </View>
      <View style={[styles.headerBackground, {}]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Upcoming Jobs</Text>
              <Text style={styles.statValue}>3</Text>
              <Image source={images.Upcoming} style={styles.statImage} />
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statLabel}>Pending Jobs</Text>
              <Text style={styles.statValue}>2</Text>
              <Image source={images.TotalServices} style={styles.statImage} />
            </View>
          </View>

          <Text style={styles.sectionTitle}>Assigned Jobs</Text>

          {assignedJobs.map(job => (
            <Pressable key={job.id} style={styles.jobCard}>
              <View style={styles.jobHeader}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>M</Text>
                </View>
                <View style={styles.jobInfo}>
                  <Text style={styles.jobName}>{job.name}</Text>
                  <Text style={styles.jobSub}>{job.car}</Text>
                </View>
              </View>

              <View style={styles.jobMetaRow}>
                <View style={styles.metaItem}>
                  <Svgs.CalanderIcon width={14} height={14} />
                  <Text style={styles.metaText}>{job.date}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Svgs.ClockIcon width={14} height={14} />
                  <Text style={styles.metaText}>{job.time}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Svgs.Location width={14} height={14} />
                  <Text style={styles.metaText}>{job.location}</Text>
                </View>
              </View>

              <Text style={styles.serviceTitle}>{job.service}</Text>
              <View style={styles.jobFooter}>
                <Text style={styles.price}>{job.price}</Text>
                <View style={styles.statusPill}>
                  <Text style={styles.statusText}>{job.status}</Text>
                </View>
              </View>
            </Pressable>
          ))}

        </ScrollView>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  content: {
    paddingHorizontal: spacing.appMarginHorizontal,
    paddingBottom: metrics.width(240),
    gap: spacing.mdl2,
    //   marginTop: spacing.xxxl,
  },
  headerBackground: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl,
    marginTop: metrics.width(50)
  },
  greetingCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    marginHorizontal: spacing.appMarginHorizontal,
    width: '90%',
    position:'absolute',
    top:100,
    alignSelf: 'center',
    
    ...shadows.md,
  },
  greetingTitle: {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize.lg,
    color: colors.text.title,
  },
  greetingSubtitle: {
    marginTop: spacing.xs,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    color: colors.secondary,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
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
  sectionTitle: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.lg,
    color: colors.text.title,
  },
  jobCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxl,
    borderWidth: 1,
    borderColor: colors.border.light,
    padding: spacing.mdl,
    ...shadows.md,
    gap: spacing.sm,
  },
  jobHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.lg,
    color: colors.white,
  },
  jobInfo: {
    gap: spacing.xs,
  },
  jobName: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xsm,
    color: colors.text.title,
  },
  jobSub: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.secondary,
  },
  jobMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  metaText: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xxs2,
    color: colors.secondary,
  },
  serviceTitle: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    color: colors.text.title,
  },
  jobFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: typography.fontFamily.semiBold,
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },
  statusPill: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
  },
  statusText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.white,
  },
  headerImage: {
    width: metrics.screenWidth,
    height: 200,
    resizeMode: 'cover',
    left: 0,
    right: 0,
    //position: 'absolute',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
});