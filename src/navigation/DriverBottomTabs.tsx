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
import Svg, { Path, Circle } from 'react-native-svg';
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
import { DriverTabParamList, TabParamList } from '../types';
import ServicesScreen from '../screens/services/ServicesScreen';
import DriverHome from '../screens/DriverHome';
import DriverBookings from '../screens/DriverBookings';
import { Svgs } from '../assets';

const Tab = createBottomTabNavigator<DriverTabParamList>();

type TabIconProps = { active?: boolean; color: string; size?: number; focused?: boolean };

const HomeIcon = ({ active, color, size = 24 }: TabIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5a.5.5 0 0 1-.5-.5v-4a1.5 1.5 0 0 0-3 0v4a.5.5 0 0 1-.5.5H5a1 1 0 0 1-1-1v-9.5Z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={active ? 'none' : 'transparent'}
    />
  </Svg>
);

const CarIcon = ({ color, size = 26 }: TabIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 14v3.5a1.5 1.5 0 0 0 3 0V16h10v1.5a1.5 1.5 0 0 0 3 0V14l-1-4.5a2 2 0 0 0-1.95-1.5H6.95A2 2 0 0 0 5 9.5L4 14Z"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 12h10m-8-2h6"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SparkleIcon = ({ color, size = 24 }: TabIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 4.5 13.6 8.4 17.5 10 13.6 11.6 12 15.5 10.4 11.6 6.5 10l3.9-1.6L12 4.5Z"
      stroke={color}
      strokeWidth={1.6}
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M6.25 14.5 7 16.5l2 .75-2 .75-.75 2-.75-2-2-.75 2-.75.75-2Z"
      stroke={color}
      strokeWidth={1.4}
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

const ProfileIcon = ({ color, size = 26 }: TabIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="8" r="3.5" stroke={color} strokeWidth={1.6} />
    <Path
      d="M18.5 18c0-2.486-2.91-4.5-6.5-4.5S5.5 15.514 5.5 18"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
    />
  </Svg>
);

const BAR_HEIGHT = 70;
const NOTCH_WIDTH = 122;
const NOTCH_DEPTH = 35;
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

const DriverBottomTabs = ({ state, descriptors, navigation }: any) => {
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

export function DriverBottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={props => <DriverBottomTabs {...props} />}
    >
      <Tab.Screen
        name="DriverHome"
        component={DriverHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: (props: any) =>{return props.focused ? <Svgs.PrimaryHome width={24} height={24} /> :<View  style={{marginTop:10}}> <Svgs.WhiteHome width={24} height={24} /></View>},
        }}
      />
      <Tab.Screen
        name="DriverBookings"
        component={DriverBookings}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: (props: any) => {return props.focused ? <Svgs.PrimaryCar width={24} height={24} /> : <View  style={{marginTop:10}}> <Svgs.WhiteCar width={24} height={24} /></View>},
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
