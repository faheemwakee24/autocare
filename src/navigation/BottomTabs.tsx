import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  useWindowDimensions,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

import SubscriptionScreen from '../screens/services';
import {
  colors,
  spacing,

  typography,
  shadows,
} from '../constants';
import { TabParamList } from '../types';
import ServicesScreen from '../screens/services/ServicesScreen';

// Import SVG icons
import HomeOutline from '../assets/svg/home.svg';
import HomeFilled from '../assets/svg/filled-home.svg';
import CarOutline from '../assets/svg/car.svg';
import CarFilled from '../assets/svg/filled-car.svg';
import AIOutline from '../assets/svg/ai.svg';
import AIFilled from '../assets/svg/ai-filled.svg';
import ProfileOutline from '../assets/svg/profile.svg';
import ProfileFilled from '../assets/svg/filled-profile.svg'; 

const Tab = createBottomTabNavigator<TabParamList>();

type TabIconProps = { active: boolean; color: string; size?: number };

const HomeIcon = ({ active, color, size = 24 }: TabIconProps) => {
  const Icon = active ? HomeFilled : HomeOutline;
  return <Icon width={size} height={size} color={color} />;
};

const CarIcon = ({ active, color, size = 24 }: TabIconProps) => {
  const Icon = active ? CarFilled : CarOutline;
  return <Icon width={size} height={size} color={color} />;
};

const SparkleIcon = ({ active, color, size = 24 }: TabIconProps) => {
  const Icon = active ? AIFilled : AIOutline;
  return <Icon width={size} height={size} color={color} />;
};

const ProfileIcon = ({ active, color, size = 24 }: TabIconProps) => {
  const Icon = active ? ProfileFilled : ProfileOutline;
  return <Icon width={size} height={size} color={color} />;
};

const BAR_HEIGHT = 88;
const NOTCH_WIDTH = 122;
const NOTCH_DEPTH = 28;
const FLOAT_SIZE = 54;

const buildPath = (width: number, tabWidth: number, index: number) => {
  const notchCenter = tabWidth * index + tabWidth / 2;
  const notchStart = notchCenter - NOTCH_WIDTH / 2;
  const notchEnd = notchCenter + NOTCH_WIDTH / 2;
  const curve = NOTCH_WIDTH / 4;

  return [
    `M0 0`,
    `H${notchStart}`,
    `C${notchStart + curve} 0 ${notchStart + curve} ${NOTCH_DEPTH} ${notchStart + curve * 2
    } ${NOTCH_DEPTH}`,
    `C${notchCenter - curve} ${NOTCH_DEPTH} ${notchCenter - curve
    } ${NOTCH_DEPTH} ${notchCenter} ${NOTCH_DEPTH}`,
    `C${notchCenter + curve} ${NOTCH_DEPTH} ${notchCenter + curve
    } ${NOTCH_DEPTH} ${notchEnd - curve * 2} ${NOTCH_DEPTH}`,
    `C${notchEnd - curve} ${NOTCH_DEPTH} ${notchEnd - curve} 0 ${notchEnd} 0`,
    `H${width}`,
    `V${BAR_HEIGHT}`,
    `H0`,
    `Z`,
  ].join(' ');
};

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const tabWidth = width / state.routes.length;
  const animatedIndex = useRef(new Animated.Value(state.index)).current;
  const ActiveIcon = descriptors[state.routes[state.index].key].options
    .tabBarIcon as React.ComponentType<TabIconProps>;

  useEffect(() => {
    Animated.spring(animatedIndex, {
      toValue: state.index,
      useNativeDriver: true,
      friction: 8,
      tension: 80,
    }).start();
  }, [state.index, animatedIndex]);

  const translateX = animatedIndex.interpolate({
    inputRange: [0, state.routes.length - 1],
    outputRange: [0, tabWidth * (state.routes.length - 1)],
  });

  return (
    <View
      style={[styles.tabContainer, { height: BAR_HEIGHT / 2 }]}
    >
      <Svg width={width} height={BAR_HEIGHT} style={styles.svg}>
        <Path
          d={buildPath(width, tabWidth, state.index)}
          fill={colors.primary}
        />
      </Svg>

      <Animated.View
        style={[
          styles.floating,
          {
            left: tabWidth / 2 - FLOAT_SIZE / 2,
            transform: [{ translateX }],
          },
        ]}
        pointerEvents="none"
      >
        <View style={styles.floatingCircle}>
          <ActiveIcon active color={colors.primary} size={24} />
        </View>
        <Text style={styles.activeLabel}>
          {descriptors[state.routes[state.index].key].options.tabBarLabel ??
            state.routes[state.index].name}
        </Text>
      </Animated.View>

      <View
        style={[
          styles.items,
          { width, paddingBottom: insets.bottom || spacing.md },
        ]}
      >
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;
          const iconOpacity = isFocused ? 0 : 1;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const color = isFocused ? colors.primary : colors.white;
          const Icon = options.tabBarIcon as React.ComponentType<TabIconProps>;

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              style={[styles.item, { width: tabWidth }]}
              onPress={onPress}
            >
              <View
                style={[styles.iconWrapper, isFocused && styles.iconHidden]}
              >
                <Icon active={isFocused} color={color} />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (props: TabIconProps) => <HomeIcon {...props} />,
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: (props: TabIconProps) => <CarIcon {...props} />,
        }}
      />
      <Tab.Screen
        name="Subscriptions"
        component={SubscriptionScreen}
        options={{
          tabBarLabel: 'Subscription',
          tabBarIcon: (props: TabIconProps) => <SparkleIcon {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: (props: TabIconProps) => <ProfileIcon {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'transparent',
  },
  svg: {
    position: 'absolute',
    bottom: 0,
  },
  items: {
    flexDirection: 'row',
    height: BAR_HEIGHT,
    position: 'absolute',
    bottom: 0,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: spacing.md,
  },
  iconWrapper: {
    marginTop: 10
  },
  iconHidden: {
    opacity: 0,
  },
  label: {
    fontSize: typography.fontSize.md,
    fontFamily: typography.fontFamily.medium,
  },
  floating: {
    position: 'absolute',
    bottom: BAR_HEIGHT - NOTCH_DEPTH / 1.2,
    width: FLOAT_SIZE,
    height: FLOAT_SIZE,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 100
  },
  floatingCircle: {
    width: FLOAT_SIZE,
    height: FLOAT_SIZE,
    borderRadius: FLOAT_SIZE / 2,
    backgroundColor: colors.white,
    ...shadows.sm,
    borderWidth: 1,
    borderColor: colors.border.dark2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeLabel: {
    marginTop: spacing.xs,
    color: colors.text.white,
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fontFamily.medium,
    position: 'absolute',
    bottom: -30,
    width: 100,
    textAlign: 'center'
  },
});
