
import { Image, ImageSourcePropType, Pressable, View } from 'react-native';

import { images, Svgs } from '../../assets';
import { colors, spacing, borderRadius, shadows } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { metrics } from '../../utils';

type Props = {
    onBack?: () => void;
    onHistory?: () => void;
    onNotification?: () => void;

    avatarSource?: ImageSourcePropType;
    hideBackButton?: boolean;
};

export const ProfileHeader = ({
    onBack,
    onHistory,
    onNotification,
    avatarSource,
    hideBackButton=false
}: Props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {hideBackButton ?<View style={{ width: spacing.xl2 }} /> : (
            <Pressable style={styles.circleButton} onPress={onBack ? onBack : ()=>navigation.goBack()}>
                <Svgs.BackIcon width={20} height={20} />
            </Pressable>
            )}

            <View style={styles.actions}>
                <Pressable style={styles.circleButton} onPress={onHistory}>
                    <Svgs.HistoryIcon width={28} height={28} />
                </Pressable>
                <Pressable style={styles.circleButton} onPress={onNotification?onNotification:()=>navigation.navigate('Notifications' as any)}>
                    <Svgs.NotificationIcon width={30} height={30} />
                </Pressable>
                {avatarSource ? (
                    <Image source={avatarSource} style={styles.avatar} />
                ) : (
                   <Image source={images.TempProfile} style={styles.avatar} />
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
        marginTop: metrics.width(5),
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
        borderWidth: 1,
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
