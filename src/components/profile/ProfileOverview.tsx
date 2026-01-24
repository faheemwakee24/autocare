import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Button } from '../ui';
import { Svgs } from '../../assets';
import { borderRadius, colors, shadows, spacing, typography } from '../../constants';
import { metrics } from '../../utils';

type Props = {
  avatarUri: string;
  name: string;
  email: string;
  onEditProfile?: () => void;
  onLogout?: () => void;
};

export const ProfileOverview: React.FC<Props> = ({
  avatarUri,
  name,
  email,
  onEditProfile,
  onLogout,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrap}>
        <Image source={{ uri: avatarUri }} style={styles.avatarImage} />
        <View style={styles.avatarBadge}>
          <Svgs.EditIcon width={18} height={18} />
        </View>
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <Text style={styles.sectionLabel}>Account</Text>
      <TouchableOpacity style={styles.listRow} onPress={onEditProfile}>
        <View style={styles.listIconCircle}>
          <Svgs.ProfileIcon width={20} height={20} />
        </View>
        <Text style={styles.listTitle}>Edit Profile</Text>
        <Svgs.ArrowRight width={20} height={20} />
      </TouchableOpacity>

      <Button title="Log Out" onPress={onLogout ?? (() => { })} style={styles.logoutButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.lg,
  },
  avatarWrap: {
    marginTop: spacing.xl,
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: colors.primary,
    overflow: 'visible',
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
  name: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.text.title,
    textAlign: 'center',
  },
  email: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xsm,
    color: colors.secondary,
    textAlign: 'center',
  },
  sectionLabel: {
    alignSelf: 'flex-start',
    marginTop: spacing.lg,
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.lg,
    color: colors.text.title,
  },
  listRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
   
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
    paddingBottom:metrics.width(16),
    borderRadius:20
  },
  listIconCircle: {
    width: spacing.xl2,
    height: spacing.xl2,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listIconText: {
    fontSize: typography.fontSize.md,
    color: colors.white,
  },
  listTitle: {
    flex: 1,
    marginLeft: spacing.md,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.lg,
    color: colors.text.title,
  },
  logoutButton: {
    width: '100%',
    marginTop: spacing.xxl,
  },
});
