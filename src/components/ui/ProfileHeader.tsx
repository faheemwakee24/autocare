
import { Image, ImageSourcePropType, Pressable, View } from 'react-native';

import { Svgs } from '../../assets';
import { colors, spacing, borderRadius, shadows } from '../../constants';
import { useNavigation } from '@react-navigation/native';

type Props = {
    onBack?: () => void;
    onHistory?: () => void;
    onNotification?: () => void;
    avatarSource?: ImageSourcePropType;
};

export const ProfileHeader = ({
    onBack,
    onHistory,
    onNotification,
    avatarSource,
}: Props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Pressable style={styles.circleButton} onPress={onBack ? onBack : navigation.goBack}>
                <Svgs.BackIcon width={20} height={20} />
            </Pressable>

            <View style={styles.actions}>
                <Pressable style={styles.circleButton} onPress={onHistory}>
                    <Svgs.HistoryIcon width={28} height={28} />
                </Pressable>
                <Pressable style={styles.circleButton} onPress={onNotification}>
                    <Svgs.NotificationIcon width={30} height={30} />
                </Pressable>
                {avatarSource ? (
                    <Image source={avatarSource} style={styles.avatar} />
                ) : (
                    <View style={[styles.avatar, styles.avatarPlaceholder]} />
                )}
            </View>
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
    },
    circleButton: {
        width: spacing.xl2,
        height: spacing.xl2,
        borderRadius: borderRadius.full,
        borderWidth: 2,
        borderColor: '#C0CCCE',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        ...shadows.sm,
    },
    avatar: {
        width: spacing.xl2,
        height: spacing.xl2,
        borderRadius: borderRadius.full,
        borderWidth: 3,
        borderColor: '#7BC3C6',
    },
    avatarPlaceholder: {
        backgroundColor: colors.background.primary5 ?? '#E9F4F5',
    },
};
