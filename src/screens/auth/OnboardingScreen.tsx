import React, { memo, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  ViewToken,
  StatusBar,
} from 'react-native';

// Components
import { Button } from '../../components/ui';

// Assets
import { FontFamily, images } from '../../assets';

// Hooks
import { useNavigation } from '../../hooks';

// Constants
import { colors, spacing, typography } from '../../constants';
import { metrics } from '../../utils';

type OnboardingStep = {
  id: string;
  title: string;
  description: string;
  image: number;
};

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList<OnboardingStep>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = useMemo<OnboardingStep[]>(
    () => [
      {
        id: '1',
        title: 'Eco-Friendly Car Wash',
        description:
          'Professional waterless car wash using biodegradable products. Safe for your car and the environment.',
        image: images.onboardingImage1,
      },
      {
        id: '2',
        title: 'Service at Your Doorstep',
        description:
          'Book a car wash at your home, office, or any location in Dubai. We come to you.',
        image: images.onboardingImage2,
      },
      {
        id: '3',
        title: 'Flexible Scheduling',
        description:
          'Choose your preferred date and time slot. Track your service in real-time on the map.',
        image: images.onboardingImage3,
      },
    ],
    [],
  );

  const handleNext = () => {
    const nextIndex = activeIndex + 1;
    if (nextIndex < slides.length) {
      listRef.current?.scrollToIndex({ index: nextIndex });
    } else {
      navigation.navigate('Signup');
    }
  };
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
  ).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 60 });

  const renderItem = ({ item }: { item: OnboardingStep }) => (
    <View style={[styles.slide, { width }]}>
      <View style={styles.illustrationWrapper}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        
        barStyle="dark-content"
      />
      <FlatList
        ref={listRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef.current}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>

        <Button
          title={activeIndex === slides.length - 1 ? 'Get Started' : 'Continue'}
          onPress={handleNext}
          size="lg"
          style={styles.primaryButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  topBar: {
    alignItems: 'flex-end',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  skipText: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
    fontFamily: FontFamily.playfair.medium,
  },
  slide: {
    flex: 1,
    justifyContent: 'space-between',
  
  },
  illustrationWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    width: '100%',
    height: '100%',
  
  },
  textBlock: {
    paddingBottom: spacing.xl,
    alignItems: 'center',
    marginHorizontal:metrics.width(30)
  },
  title: {
    fontSize: typography.fontSize.xxl,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
    fontFamily: FontFamily.playfair.bold,
  },
  description: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: typography.lineHeight.relaxed * 16,
    fontFamily: FontFamily.playfair.regular,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
    paddingBottom:spacing.xl2,
    gap: spacing.lg,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  dotInactive: {
    backgroundColor: '#555555',
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 28,
  },
  primaryButton: {
    marginVertical: 0,

  },
});
