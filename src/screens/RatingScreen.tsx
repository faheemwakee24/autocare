import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, ProfileHeader } from '../components/ui';
import { Svgs } from '../assets/icons';
import { borderRadius, colors, shadows, spacing, typography } from '../constants';
import { useNavigation } from '../hooks';

const RatingScreen = () => {
    const navigation = useNavigation();
    const [rating, setRating] = useState(4);
    const [note, setNote] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader onBack={() => navigation.goBack()} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Text style={styles.title}>Rating</Text>
                <Text style={styles.subtitle}>Rate Your Client</Text>

                <View style={styles.card}>
                    <View style={styles.headerRow}>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>M</Text>
                        </View>
                        <View>
                            <Text style={styles.name}>Mohammad Ali</Text>
                            <Text style={styles.subText}>Toyota Model 3</Text>
                        </View>
                    </View>

                    <View style={styles.metaRow}>
                        <View style={styles.metaItem}>
                            <Svgs.CalanderIcon width={14} height={14} />
                            <Text style={styles.metaText}>23/07/2026</Text>
                        </View>
                        <View style={styles.metaItem}>
                            <Svgs.ClockIcon width={14} height={14} />
                            <Text style={styles.metaText}>10:00 AM</Text>
                        </View>
                        <View style={styles.metaItem}>
                            <Svgs.Location width={14} height={14} />
                            <Text style={styles.metaText}>Dubai Arena</Text>
                        </View>
                    </View>

                    <Text style={styles.service}>Premium Wash</Text>
                    <Text style={styles.price}>130 AED</Text>
                </View>

                <View style={styles.starsRow}>
                    <Svgs.FilledStar />
                    <Svgs.FilledStar />
                    <Svgs.FilledStar />
                    <Svgs.UnFilledStar />
                    <Svgs.UnFilledStar />
                </View>

                <Text style={styles.noteLabel}>Review Note</Text>
                <TextInput
                    value={note}
                    onChangeText={setNote}
                    placeholder="Add a Review"
                    placeholderTextColor={colors.text.tertiary}
                    style={styles.noteInput}
                    multiline
                    textAlignVertical="top"
                />

                <View style={styles.confirmButton}>
                    <Button
                        title='Confirm'
                        onPress={() => { }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RatingScreen;

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
        marginTop: spacing.lg,
        textAlign: 'center',
        fontFamily: typography.fontFamily.semiBold,
        fontSize: typography.fontSize.xl,
        color: colors.text.title,
    },
    subtitle: {
        marginTop: spacing.xs,
        textAlign: 'center',
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.sm,
        color: colors.secondary,
    },
    card: {
        marginTop: spacing.xl,
        backgroundColor: colors.white,
        borderRadius: borderRadius.xxl,
        borderWidth: 1,
        borderColor: colors.border.light,
        padding: spacing.lg,
        ...shadows.md,
        gap: spacing.sm,
    },
    headerRow: {
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
    name: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.md,
        color: colors.text.title,
    },
    subText: {
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.sm,
        color: colors.secondary,
    },
    metaRow: {
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
        fontSize: typography.fontSize.sm,
        color: colors.secondary,
    },
    service: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.md,
        color: colors.text.title,
    },
    price: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.md,
        color: colors.primary,
    },
    starsRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: spacing.md,
        marginTop: spacing.xl,
    },
    star: {
        fontSize: 32,
    },
    starActive: {
        color: '#F3C343',
    },
    starInactive: {
        color: '#F3C343',
        opacity: 0.4,
    },
    noteLabel: {
        marginTop: spacing.xl,
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.md,
        color: colors.text.title,
    },
    noteInput: {
        marginTop: spacing.sm,
        minHeight: 120,
        borderRadius: borderRadius.xxl,
        borderWidth: 1,
        borderColor: colors.border.light,
        padding: spacing.lg,
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.md,
        color: colors.text.title,
        backgroundColor: colors.white,
        ...shadows.md,
    },
    confirmButton: {
        marginTop: spacing.xxl,
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderRadius: borderRadius.xxxl,
        minWidth: '60%',
        ...shadows.md,
    },
    confirmText: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.md,
        color: colors.white,
    },
});
