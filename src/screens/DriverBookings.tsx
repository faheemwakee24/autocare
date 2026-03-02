import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileHeader, SegmentedTabs } from '../components/ui';
import { colors, spacing, typography, borderRadius, shadows } from '../constants';
import { useNavigation } from '../hooks';
import { Svgs } from '../assets/icons';
import { metrics } from '../utils';
import GradientLine from '../components/ui/GradientLine';
import LinearGradient from 'react-native-linear-gradient';

type TabKey = 'upcoming' | 'completed';

const DriverBookings = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState<TabKey>('upcoming');

    const tabs = useMemo(
        () => [
            { key: 'upcoming', label: 'Upcoming' },
            { key: 'completed', label: 'Completed' },
        ],
        [],
    );

    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader onBack={() => navigation.goBack()} />

            <SegmentedTabs
                items={tabs}
                activeKey={activeTab}
                onChange={key => setActiveTab(key as TabKey)}
                containerStyle={styles.tabs}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DriverTrackScreen')}>
                    <View style={styles.cardHeader}>
                        <View>
                            <Text style={styles.title}>Premium Wash</Text>
                            <Text style={styles.subTitle}>Booking ID: 12345-12233</Text>
                        </View>
                        <LinearGradient colors={colors.goldGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.statusPill}>
                            <Text style={[styles.statusText, { color: colors.gold }]}>Upcoming</Text>
                        </LinearGradient>
                    </View>

                    <View style={styles.metaRow}>
                        <View style={styles.itemContainer}>
                            <Svgs.CalanderIcon height={metrics.width(14)} width={metrics.width(14)} />
                            <Text style={styles.metaText}>23/07/2026</Text>
                        </View>
                        <View style={styles.itemContainer}>
                            <Svgs.ClockIcon height={metrics.width(14)} width={metrics.width(14)} />
                            <Text style={styles.metaText}>10:00 AM</Text>
                        </View>
                        <View style={styles.itemContainer}>
                            <Svgs.Location height={metrics.width(14)} width={metrics.width(14)} />
                            <Text style={styles.metaText}>Dubai Arena</Text>
                        </View>
                    </View>
                    <GradientLine height={1} />
                    <View style={styles.footerRow}>
                        <View style={styles.driverRow}>
                            <View style={styles.driverAvatar}>
                                <Text style={styles.driverInitial}>M</Text>
                            </View>
                            <Text style={styles.driverName}>Mohammad Ali</Text>
                        </View>
                        <View style={styles.footerRight}>
                            <Text style={styles.price}>130 AED</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DriverTrackScreen' as any)}>
                    <View style={styles.cardHeader}>
                        <View>
                            <Text style={styles.title}>Premium Wash</Text>
                            <Text style={styles.subTitle}>Booking ID: 12345-12233</Text>
                        </View>
                        <LinearGradient colors={[colors.completedGreen, colors.completedGreen]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.statusPill}>
                            <Text style={[styles.statusText, { color: colors.primary }]}>Completed</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.metaRow}>
                        <View style={styles.itemContainer}>
                            <Svgs.CalanderIcon height={metrics.width(14)} width={metrics.width(14)} />
                            <Text style={styles.metaText}>23/07/2026</Text>
                        </View>
                        <View style={styles.itemContainer}>
                            <Svgs.ClockIcon height={metrics.width(14)} width={metrics.width(14)} />
                            <Text style={styles.metaText}>10:00 AM</Text>
                        </View>
                        <View style={styles.itemContainer}>
                            <Svgs.Location height={metrics.width(14)} width={metrics.width(14)} />
                            <Text style={styles.metaText}>Dubai Arena</Text>
                        </View>
                    </View>
                    <GradientLine height={1} />
                    <View style={styles.footerRow}>
                        <View style={styles.driverRow}>
                            <View style={styles.driverAvatar}>
                                <Text style={styles.driverInitial}>M</Text>
                            </View>
                            <Text style={styles.driverName}>Mohammad Ali</Text>
                        </View>
                        <View style={styles.footerRight}>
                            <Text style={styles.price}>130 AED</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DriverBookings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.secondary,
    },
    tabs: {
        paddingHorizontal: spacing.lg,
        marginTop: spacing.lg,
    },
    content: {
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.xxxl,
        paddingTop: spacing.lg,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.xxl,
        borderWidth: 1,
        borderColor: colors.border.light,
        padding: spacing.mdl,
        ...shadows.md,
        gap: spacing.sml,
        marginBottom: spacing.sml,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing.md,
    },
    title: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.xsm,
        color: colors.text.title,
    },
    subTitle: {
        marginTop: spacing.xs,
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.xs,
        color: colors.secondary,
    },
    statusPill: {
        borderRadius: borderRadius.xxl2,
    },
    statusText: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.xxs2,
        color: colors.primary,
        marginHorizontal: metrics.width(12),
        marginVertical: metrics.width(4),
    },
    metaRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: spacing.sm,
    },
    metaText: {
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.xs,
        color: colors.secondary,
    },
    metaDot: {
        color: colors.secondary,
    },
    etaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background.primary19,
        borderRadius: borderRadius.sml,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderColor: colors.primaryColors.primary38,
        borderWidth: 1
    },
    etaText: {
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.xxs2,
        color: colors.secondary,
    },
    etaTime: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.xxs2,
        color: colors.secondary,
    },
    footerRow: {
    },
    driverRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },
    driverAvatar: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    driverInitial: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.xs,
        color: colors.white,
    },
    driverName: {
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.xs,
        color: colors.text.title,
    },
    footerRight: {
        flexDirection: 'row',
        gap: spacing.xs,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: metrics.width(10),
    },
    price: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.sm,
        color: colors.primary,
    },
    trackButton: {
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.full,
        backgroundColor: colors.primary,
    },
    trackText: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.xs,
        color: colors.white,
    },
    itemContainer: {
        flexDirection: 'row',
        gap: spacing.xs,
        alignItems: 'center'
    }
});
