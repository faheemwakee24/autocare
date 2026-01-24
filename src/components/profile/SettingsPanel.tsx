import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

import { Svgs } from '../../assets';
import { borderRadius, colors, shadows, spacing, typography } from '../../constants';

type ListItemProps = {
    title: string;
    onPress?: () => void;
    hideDivider?: boolean;
};

const ListItem: React.FC<ListItemProps> = ({ title, onPress, hideDivider }) => (
    <View
        style={[
            styles.listItem,
            hideDivider && styles.listItemLast,
        ]}
        onTouchEnd={onPress}
    >
        <Text style={styles.listTitle}>{title}</Text>
        <Svgs.ArrowRight width={20} height={20} />
    </View>
);

type Props = {
    remindersOn: boolean;
    onToggleReminders: (value: boolean) => void;
    onChangePassword?: () => void;
    onPrivacyPolicy?: () => void;
    onTerms?: () => void;
    onDeleteAccount?: () => void;
};

export const SettingsPanel: React.FC<Props> = ({
    remindersOn,
    onToggleReminders,
    onChangePassword,
    onPrivacyPolicy,
    onTerms,
    onDeleteAccount,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionLabel}>Notifications</Text>
            <View style={styles.card}>

                <View style={styles.listItem}>
                    <Text style={styles.listTitle}>Reminders</Text>
                    <Switch
                        value={remindersOn}
                        onValueChange={onToggleReminders}
                        thumbColor={colors.white}
                        trackColor={{ false: colors.gray[300], true: colors.primary }}
                    />
                </View>
            </View>
            <Text style={styles.sectionLabel}>Privacy & Security</Text>
            <View style={styles.card}>

                <ListItem title="Change Password" onPress={onChangePassword} />
                <ListItem title="Privacy Policy" onPress={onPrivacyPolicy} />
                <ListItem title="Terms & Conditions" onPress={onTerms} hideDivider />
            </View>

            <View style={styles.card}>
                <ListItem title="Delete Account" onPress={onDeleteAccount} hideDivider />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: spacing.lg,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.xl,
        paddingHorizontal: spacing.lg,
        borderWidth: 1,
        borderColor: colors.border.light,
        ...shadows.sm,
    },
    sectionLabel: {
        alignSelf: 'flex-start',
        fontFamily: typography.fontFamily.medium,
        fontSize: typography.fontSize.lg,
        color: colors.text.title,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: spacing.mdl2,


    },
    listItemLast: {
        borderBottomWidth: 0,
        paddingBottom: spacing.md,
    },
    listTitle: {
        fontFamily: typography.fontFamily.regular,
        fontSize: typography.fontSize.lg,
        color: colors.text.title,
    },
});
