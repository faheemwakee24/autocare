import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileHeader } from '../components/ui';
import { borderRadius, colors, shadows, spacing, typography } from '../constants';
import { metrics } from '../utils';
import { Svgs } from '../assets/icons';
import { useNavigation } from '../hooks';

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

const DriverTrackScreen = () => {
    const activeIndex = 0;
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader onBack={() => navigation.goBack()} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >


                <View style={styles.mapCard}>
                    <Image source={{ uri: MAP_URI }} style={styles.mapImage} />
                </View>


                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Client Details</Text>
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
                <View style={styles.actionStack}>
                    <TouchableOpacity style={styles.primaryAction}>
                        <Svgs.WhiteCircularTick width={22} height={22} />
                        <Text style={styles.primaryActionText}>Continue Your Job</Text>
                    </TouchableOpacity>

                    <View style={styles.actionDivider} />

                    <TouchableOpacity style={styles.secondaryAction}>
                        <View style={styles.secondaryIcon} />
                        <Text style={styles.secondaryActionText}>Mark As Arrived</Text>
                    </TouchableOpacity>

                    <View style={styles.actionDivider} />

                    <TouchableOpacity style={styles.secondaryAction}>
                        <View style={styles.secondaryIcon} />
                        <Text style={styles.secondaryActionText}>Mark As Complete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Rating' as any)} style={[styles.primaryAction, { marginTop: spacing.mdl, maxWidth: '70%', alignSelf: 'center', minWidth: '60%' }]}>
                        <Text style={styles.primaryActionText}>
                            Give Rating
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default DriverTrackScreen;

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
        ...shadows.md,
        marginTop: spacing.lg,
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
        marginTop: spacing.sm,
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
    actionStack: {
        gap: spacing.xs,
        paddingTop: spacing.xl,
        paddingBottom: spacing.xl,
    },
    primaryAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.sm,
        backgroundColor: colors.primary,
        paddingVertical: spacing.mdl2,
        borderRadius: borderRadius.xxxl,
        ...shadows.md,
    },
    primaryActionText: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.md,
        color: colors.white,
    },
    secondaryAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.sm,
        backgroundColor: colors.background.primary7,
        paddingVertical: spacing.mdl,
        borderRadius: borderRadius.xxxl,
        borderWidth: 1,
        borderColor: colors.border.primary7,
    },
    secondaryActionText: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.md,
        color: colors.secondary,
    },
    secondaryIcon: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: colors.primary,
        backgroundColor: 'transparent',
    },
    actionDivider: {
        alignSelf: 'center',
        width: 2,
        height: 18,
        borderRadius: 1,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: colors.primary,
    },
});
