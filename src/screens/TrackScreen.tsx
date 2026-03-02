import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileHeader } from '../components/ui';
import { borderRadius, colors, shadows, spacing, typography } from '../constants';
import { metrics } from '../utils';
import { Svgs } from '../assets/icons';

const MAP_URI =
    'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1200&q=80';

const PROGRESS_CIRCLE_SIZE = 44;

const progressSteps = [
    { key: 'booked', label: 'Booked', icon: Svgs.Booked },
    { key: 'enroute', label: 'Enroute', icon: Svgs.Enroute },
    { key: 'arrived', label: 'Arrived', icon: Svgs.Location },
    { key: 'inService', label: 'In Service', icon: Svgs.InService },
    { key: 'completed', label: 'Completed', icon: Svgs.GrayTick },
];

const TrackScreen = () => {
    const activeIndex = 0;

    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <View style={styles.etaCard}>
                    <Text style={styles.etaTitle}>Estimated Arrival</Text>
                    <Text style={styles.etaValue}>30 min</Text>
                </View>

                <View style={styles.mapCard}>
                    <Image source={{ uri: MAP_URI }} style={styles.mapImage} />
                </View>

                <View style={styles.progressBlock}>
                    <Text style={styles.sectionTitle}>Service Progress</Text>
                    <View style={styles.progressWrap}>
                        <View style={styles.progressTrack} />
                        <View style={styles.progressRow}>
                            {progressSteps.map((step, index) => {
                                const isActive = index === activeIndex;
                                return (
                                    <View key={step.key} style={styles.progressItem}>
                                        <View
                                            style={[
                                                styles.progressCircle,
                                                isActive && styles.progressCircleActive,
                                            ]}
                                        >
                                            <step.icon />
                                        </View>
                                        <Text
                                            style={[
                                                styles.progressLabel,
                                                isActive && styles.progressLabelActive,
                                            ]}
                                        >
                                            {step.label}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Service Team</Text>
                    <View style={styles.teamRow}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>M</Text>
                        </View>
                        <View style={styles.teamInfo}>
                            <Text style={styles.teamName}>Mohammad Ali</Text>
                            <View style={styles.ratingRow}>
                                <Text style={styles.star}>★</Text>
                                <Text style={styles.rating}>4.9</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.detailsBlock}>
                        <Text style={styles.detailLabel}>Vehicle:</Text>
                        <Text style={styles.detailValue}>RDX-123</Text>
                        <Text style={styles.detailLabel}>Contact:</Text>
                        <Text style={styles.detailValue}>+93 677877654477</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Service:</Text>
                    <Text style={styles.detailValue}>Ecox Exterior Wash</Text>
                    <Text style={styles.cardTitle}>Date:</Text>
                    <Text style={styles.detailValue}>22/33/4444</Text>
                    <Text style={styles.cardTitle}>Time Slot:</Text>
                    <Text style={styles.detailValue}>8:00 AM - 9 AM</Text>
                    <Text style={styles.cardTitle}>Location:</Text>
                    <Text style={styles.detailValue}>Downtown Dubai</Text>
                    <Text style={styles.cardTitle}>Address:</Text>
                    <Text style={styles.detailValue}>House No #12, building 123, 7th Road</Text>
                    <Text style={styles.cardTitle}>Vehicle</Text>
                    <Text style={styles.detailValue}>Toyota Land Cruiser</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default TrackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.secondary,
    },
    content: {
        paddingHorizontal: spacing.lg,
        paddingBottom: spacing.xxxl,
        gap: spacing.lg,
    },
    etaCard: {
        backgroundColor: colors.primary,
        borderRadius: borderRadius.xxl,
        paddingVertical: spacing.mdl4,
        paddingHorizontal: spacing.mdl4,
        marginTop: spacing.lg,
        ...shadows.md,
    },
    etaTitle: {
        fontFamily: typography.fontFamily.semiBold,
        fontSize: typography.fontSize.md,
        color: colors.white,
    },
    etaValue: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.sm,
        color: colors.white,
        marginTop: metrics.width(3),
    },
    mapCard: {
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.border.light,
        ...shadows.sm,
    },
    mapImage: {
        width: '100%',
        height: 200,
    },
    progressBlock: {
        gap: spacing.sm,
    },
    sectionTitle: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.xs,
        color: colors.text.title,
    },
    progressWrap: {
        position: 'relative',
        paddingTop: spacing.xs,
    },
    progressTrack: {
        position: 'absolute',
        top: PROGRESS_CIRCLE_SIZE / 1.8,
        left: PROGRESS_CIRCLE_SIZE / 2,
        right: PROGRESS_CIRCLE_SIZE / 2,
        borderTopWidth: 2,
        borderColor: colors.border.medium,
        borderStyle: 'dashed',
    },
    progressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
    },
    progressItem: {
        alignItems: 'center',
        gap: spacing.xs,
        flex: 1,
    },
    progressCircle: {
        width: PROGRESS_CIRCLE_SIZE,
        height: PROGRESS_CIRCLE_SIZE,
        borderRadius: PROGRESS_CIRCLE_SIZE / 2,
        backgroundColor: colors.background.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    progressCircleActive: {
        backgroundColor: colors.primary,
    },
    progressIcon: {
        fontSize: typography.fontSize.md,
        color: colors.secondary,
    },
    progressIconActive: {
        color: colors.white,
    },
    progressLabel: {
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.xs,
        color: colors.secondary,
        textAlign: 'center',
    },
    progressLabelActive: {
        color: colors.primary,
    },
    card: {
        backgroundColor: colors.background.primary5,
        borderRadius: borderRadius.xl,
        borderWidth: 1,
        borderColor: colors.border.primary7,
        padding: spacing.lg,
        gap: spacing.xs,
    },
    cardTitle: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.xsm,
        color: colors.text.title,
    },
    teamRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        marginBottom: spacing.sm,
        marginTop:spacing.sm,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.lg,
        color: colors.white,
    },
    teamInfo: {
        gap: spacing.xs,
    },
    teamName: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.sm,
        color: colors.text.title,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.xs,
    },
    star: {
        color: '#F3C343',
        fontSize: typography.fontSize.sm,
    },
    rating: {
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.xsm,
        color: colors.secondary,
    },
    detailsBlock: {
        gap: spacing.xs,
    },
    detailLabel: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.sm,
        color: colors.text.title,
        marginTop: spacing.sm,
    },
    detailValue: {
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.xs,
        color: colors.secondary,
        marginTop: spacing.xs,
    },
});
