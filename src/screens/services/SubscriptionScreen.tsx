import React, { FC, useMemo, useState } from 'react';
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageSourcePropType
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, ProfileHeader } from '../../components';
import { colors, spacing, typography, borderRadius, shadows } from '../../constants';
import { useNavigation } from '../../hooks';
import { metrics } from '../../utils';
import { images, Svgs } from '../../assets';
import { SvgProps } from 'react-native-svg';

type Plan = {
    id: string;
    name: string;
    price: string;
    period: string;
    savings: string;
    ideal: string;
    icon: FC<SvgProps>;
    tint: string;
    Badge: ImageSourcePropType,
    benefits: { id: string; label: string }[]
};
const benefits = [
    { id: 'eco', label: '2× EcoX Wash Package (valued at AED 140)' },
    { id: 'schedule', label: 'Flexible scheduling' },
    { id: 'support', label: 'Standard support' },
    { id: 'reporting', label: 'Standard analytics & reporting' },
];
const plans: Plan[] = [
    {
        id: 'bronze',
        name: 'Bronze',
        price: '37 AED',
        period: '/month',
        savings: 'Save 20 AED',
        ideal: 'Occasional car care',
        icon: Svgs.SubscriptionStar,
        tint: '#B9DFDF',
        Badge: images.RocketIcon,
        benefits: benefits
    },
    {
        id: 'silver',
        name: 'Silver',
        price: '120 AED',
        period: '/month',
        savings: 'Save 35 AED',
        ideal: 'Regular upkeep',
        icon: Svgs.SubscriptionSilver,
        tint: '#CBE5F4',
        Badge: images.SilverIcon,
        benefits: benefits
    },
    {
        id: 'gold',
        name: 'Gold',
        price: '230 AED',
        period: '/month',
        savings: 'Save 60 AED',
        ideal: 'Premium protection',
        icon: Svgs.SubscriptionGold,
        tint: '#F7E2C7',
        Badge: images.CrownIcon,
        benefits: benefits
    },
    {
        id: 'daimond',
        name: 'Gold',
        price: '230 AED',
        period: '/month',
        savings: 'Save 60 AED',
        ideal: 'Premium protection',
        icon: Svgs.SubscriptionDaimond,
        tint: '#F7E2C7',
        Badge: images.DaimondIcon,
        benefits: benefits
    },
];



const SubscriptionScreen = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const [activePlanId, setActivePlanId] = useState(plans[0].id);

    const activePlan = useMemo(
        () => plans.find(plan => plan.id === activePlanId) ?? plans[0],
        [activePlanId],
    );

    const handleBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    const handleChoosePlan = () => {
        Alert.alert('Plan selected', `${activePlan.name} plan chosen`);
    };
    return (
        <View style={[styles.safeArea, { paddingTop: insets.top }]}>
                      <ProfileHeader onBack={handleBack} onHistory={() => { }} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    styles.content,
                ]}
            >
      
                <View style={styles.heading}>
                    <Text style={styles.title}>Subscription Plans</Text>
                    <Text style={styles.subtitle}>
                        Choose a plan that fits your car care needs and save more
                    </Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.planList}
                >
                    {plans.map(plan => {
                        const isActive = plan.id === activePlanId;

                        return (
                            <View>
                                <Pressable
                                    key={plan.id}
                                    style={[styles.planCard, isActive && styles.planCardActive]}
                                    onPress={() => setActivePlanId(plan.id)}
                                >
                                    <View style={styles.planHeader}>
                                        {/* <View style={[styles.planIcon, ]}>
                                            <plan.icon width={24} height={24} />
                                        </View>  */}
                                        <Image source={plan.Badge} style={{ height: metrics.width(30), width: metrics.width(30) }} />
                                        <Text style={styles.planName}>{plan.name}</Text>
                                    </View>
                                    <View style={styles.planPriceRow}>
                                        <Text style={styles.planPrice}>{plan.price}</Text>
                                        <Text style={styles.planPricePeriod}>{plan.period}</Text>
                                    </View>

                                    <View style={styles.savingsPill}>
                                        <Text style={styles.savingsText}>{plan.savings}</Text>
                                    </View>

                                    <Text style={styles.planIdeal}>Ideal for: {plan.ideal}</Text>

                                    <View style={{ position: 'absolute', right: 0, bottom: 0 }}>
                                        <plan.icon />
                                    </View>
                                </Pressable>
                                <View style={styles.benefitsContainer}>
                                    <Text style={styles.sectionTitle}>Subscription benefits</Text>
                                    <View style={styles.benefitsList}>
                                        {plan.benefits.map((benefit, index) => (
                                            <View style={[styles.benefitRow, index === plan.benefits.length - 1 && { borderBottomWidth: 0 }]}>
                                                <View style={styles.benefitIcon}>
                                                    <Svgs.SaperateTickIcon />
                                                </View>
                                                <Text style={styles.benefitText}>{benefit.label}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
                <View style={styles.ctaContainer}>
                    <Button
                        title="Choose this Plan"
                        onPress={handleChoosePlan}
                        style={styles.cta}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.appBackground,
    },
    content: {
        
        paddingTop: spacing.lg,
        gap: spacing.mdl2,
    },
    heading: {
        alignItems: 'center',
        gap: spacing.sm,
    },
    title: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.xl,
        color: colors.text.title,
    },
    subtitle: {
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.xsm,
        textAlign: 'center',
        color: colors.secondary,
        lineHeight: 24,
        maxWidth: '80%',
    },
    planList: {
        paddingVertical: spacing.sm,
        gap: spacing.md,
        paddingHorizontal:spacing.lg
    },
    planCard: {
        width: metrics.screenWidth * 0.8,
        backgroundColor: colors.white,
        borderRadius: borderRadius.xxl,
        borderWidth: 1,
        borderColor: colors.border.medium,
        padding: spacing.mdl2,
        marginRight: spacing.md,
        
        ...shadows.md,
        
    },
    planCardActive: {
        borderColor: colors.primaryColors.primary32,
        shadowOpacity: 0.18,
    },
    planHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
    },
    planIcon: {
        width: spacing.xl2,
        height: spacing.xl2,
        borderRadius: borderRadius.full,
        alignItems: 'center',
        justifyContent: 'center',
    },

    planName: {
        fontFamily: typography.fontFamily.semiBold,
        fontSize: typography.fontSize.xl,
        color: colors.primary,
    },
    planPriceRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: spacing.xs,
        marginTop: spacing.sml,
    },
    planPrice: {
        fontFamily: typography.fontFamily.semiBold,
        fontSize: typography.fontSize.xl,
        color: colors.primary,
    },
    planPricePeriod: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.sm,
        color: colors.secondary,

    },
    savingsPill: {
        alignSelf: 'flex-start',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.full,
        backgroundColor: colors.background.primary19,
        marginTop: spacing.md,
    },
    savingsText: {
        fontFamily: typography.fontFamily.medium,
        color: colors.secondary,
    },
    planIdeal: {
        marginTop: spacing.md,
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.xs,
        color: colors.secondary,
    },


    sectionTitle: {
        fontFamily: typography.fontFamily.semiBold,
        fontSize: typography.fontSize.xl,
        color: colors.primary,
        marginTop: spacing.md
    },
    benefitRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        marginTop: spacing.sml,

        // borderBottomColor: colors.border.medium,
        borderBottomWidth: 2,
        paddingBottom: spacing.sm,
        borderStyle: 'dashed',
        borderColor: colors.border.medium,
    },


    benefitText: {
        flex: 1,
        fontSize: typography.fontSize.xsm,
        color: colors.text.title,
        fontFamily: typography.fontFamily.regular,
        maxWidth: metrics.screenWidth * 0.7
    },
    cta: {
        marginTop: spacing.lg,
        width: '100%',
    },
    benefitsContainer: {

    },
    benefitsList: {
        gap: spacing.sm,
    },
    benefitIcon: {
        width: spacing.xl,
        height: spacing.xl,
        borderRadius: borderRadius.full,
        backgroundColor: colors.border.primary7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ctaContainer: {
        flexDirection: 'row',
        width: '70%',
        alignSelf: 'center',
    }
});
