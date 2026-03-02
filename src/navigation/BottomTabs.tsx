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
import SettingsScreen from '../screens/SettingsScreen';
import SubscriptionScreen from '../screens/services';
import {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
} from '../constants';
import { TabParamList } from '../types';
import ServicesScreen from '../screens/services/ServicesScreen';
import { Svgs } from '../assets';

const Tab = createBottomTabNavigator<TabParamList>();

type TabIconProps = { active?: boolean; color: string; size?: number; focused?: boolean };

const BAR_HEIGHT = 88;
const NOTCH_WIDTH = 122;
const NOTCH_DEPTH = 28;
const FLOAT_SIZE = 60;

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
          <ActiveIcon active focused color={colors.primary} size={28} />
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
                <Icon active={isFocused} color={color} focused={isFocused} size={24} />
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
          tabBarIcon: (props: any) =>
            props.focused ? (
              <Svgs.PrimaryHome width={24} height={24} />
            ) : (
              <Svgs.WhiteHome width={24} height={24} />
            ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: (props: any) =>
            props.focused ? (
              <Svgs.PrimaryCar width={24} height={24} />
            ) : (
              <Svgs.WhiteCar width={24} height={24} />
            ),
        }}
      />
      <Tab.Screen
        name="Subscriptions"
        component={SubscriptionScreen}
        options={{
          tabBarLabel: 'Subscription',
          tabBarIcon: (props: any) =>
            props.focused ? (
              <Svgs.StarsPrimary width={24} height={24} />
            ) : (
              <Svgs.StarssWhite width={24} height={24} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: (props: any) =>
            props.focused ? (
              <Svgs.PrimaryProfile width={24} height={24} />
            ) : (
              <Svgs.WhiteProfile width={24} height={24} />
            ),
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
    borderWidth: 1,
    borderColor: colors.border.light,
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
