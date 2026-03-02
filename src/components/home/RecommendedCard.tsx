import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

import { borderRadius, colors, shadows, spacing, typography } from '../../constants';
import { metrics } from '../../utils';

type Props = {
  title: string;
  image: ImageSourcePropType;
  rating?: string;
  subtitle?: string;
  price?: string;
  actionLabel?: string;
};

export const RecommendedCard: React.FC<Props> = ({
  title,
  image,
  rating,
  subtitle,
  price,
  actionLabel,
}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.body}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          {rating && (
            <View style={styles.ratingRow}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.rating}>{rating}</Text>
            </View>
          )}
        </View>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        <View style={styles.footer}>
          {price && <Text style={styles.price}>{price}</Text>}
          {actionLabel && (
            <View style={styles.cta}>
              <Text style={styles.ctaText}>{actionLabel}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: metrics.width(300),
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    borderWidth: 1,
    borderColor: colors.border.light,
    overflow: 'hidden',
    ...shadows.sm,
  },
  image: {
    width: '100%',
    height: metrics.width(180),
  },
  body: {
    padding: spacing.sml,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  title: {
    flex: 1,
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xsm,
    color: colors.text.title,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  star: {
    color: '#F3C343',
    fontSize: typography.fontSize.md,
  },
  rating: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xxxxs,
    color: colors.text.title,
  },
  subtitle: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.xs,
    color: colors.secondary,
    marginTop: spacing.xs,
  },
  footer: {
    marginTop: spacing.mdl2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xsm,
    color: colors.primary,
  },
  cta: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xxxl,
  },
  ctaText: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xs,
    color: colors.white,
  },
});
