import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, Input, ProfileHeader } from '../components/ui';
import { Svgs } from '../assets';
import { borderRadius, colors, shadows, spacing, typography } from '../constants';
import { metrics } from '../utils';

const AVATAR_URI = 'https://i.pravatar.cc/300?img=47';

type PillFieldProps = {
    label: string;
    value: string;
    rightContent?: React.ReactNode;
};

const PillField = ({ label, value, rightContent }: PillFieldProps) => (
    <View style={styles.fieldGroup}>
        <Text style={styles.fieldLabel}>{label}</Text>
        <View style={styles.fieldPill}>
            <Text style={styles.fieldValue}>{value}</Text>
            {rightContent}
        </View>
    </View>
);

const EditProfileScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <ProfileHeader onBack={() => { }} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >


                <Text style={styles.title}>Edit Profile</Text>

                <View style={styles.avatarWrap}>
                    <Image source={{ uri: AVATAR_URI }} style={styles.avatarImage} />
                    <View style={styles.avatarBadge}>
                        <Svgs.EditIcon width={22} height={22} />
                    </View>
                </View>

                <View style={styles.form}>
                    <Input
                        label="Name"
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={setName}
                        rightIcon={<Svgs.GrayEdit width={22} height={22} />}
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Save Changes" onPress={() => { }} size="lg" style={styles.submit} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EditProfileScreen;

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
    avatarWrap: {
        marginTop: spacing.mdl4,
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 3,
        borderColor: colors.primary,
        overflow: 'visible',
        alignSelf: 'center',
        ...shadows.sm,
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        overflow: 'hidden'
    },
    avatarBadge: {
        position: 'absolute',
        right: -metrics.width(5),
        bottom: -metrics.width(5),
        width: spacing.xl2,
        height: spacing.xl2,
        borderRadius: borderRadius.full,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        marginTop: spacing.xl,
        gap: spacing.lg,
    },
    fieldGroup: {
        gap: spacing.sm,
    },
    fieldLabel: {
        fontFamily: typography.fontFamily.heading,
        fontSize: typography.fontSize.md,
        color: colors.text.title,
    },
    fieldPill: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.md,
        borderRadius: borderRadius.xxxl,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border.light,
        ...shadows.sm,
    },
    fieldValue: {
        flex: 1,
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.lg,
        color: colors.secondary,
    },
    verifiedPill: {
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.full,
        backgroundColor: '#E3F1E9',
    },
    verifiedText: {
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.sm,
        color: colors.secondary,
    },
    submit: {
        marginTop: metrics.width(20),
    },
    buttonContainer: {
        maxWidth: '80%',
        alignSelf: 'center',
    },
});
