import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth screens
import {
  WelcomeScreen,
  LoginScreen,
  SignupScreen,
  OnboardingScreen,
  SplashScreen,
} from '../screens/auth';

// Main app screens
import { BottomTabsNavigator } from './BottomTabs';

// Navigation types
import { RootStackParamList } from '../types';

// Hooks and utils
import { authStorage } from '../utils';
import ForgotPaswordAddEmailScreen from '../screens/auth/ForgotPaswordAddEmail';
import ForgotPaswordAddPasswordScreen from '../screens/auth/ForgotPaswordAddPassword';
import ForgotPaswordAddOTPScreen from '../screens/auth/ForgotPaswordAddOTP';
import EditProfileScreen from '../screens/EditProfileScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasCheckedAuth = useRef(false);

  // Check authentication status on app start
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Check if user is logged in
        const isLoggedInStatus = await authStorage.isLoggedIn();
        setIsLoggedIn(isLoggedInStatus);
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
        hasCheckedAuth.current = true;
      }
    };

    if (!hasCheckedAuth.current) {
      checkAuthStatus();
    }
  }, []);

  // Show splash screen while checking auth
  if (isLoading || isLoggedIn === null) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'MainTabs' }
        screenOptions={{
          headerShown: false,
          animation: 'default',
        }}
      >
        {/* Auth Stack */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
        />
        <Stack.Screen
          name="ForgotPasswordAddEmail"
          component={ForgotPaswordAddEmailScreen}
        />
        <Stack.Screen
          name="ForgotPasswordAddPassword"
          component={ForgotPaswordAddPasswordScreen}
        />
        <Stack.Screen
          name="ForgotPasswordAddOTP"
          component={ForgotPaswordAddOTPScreen}
        />
        <Stack.Screen
          name="EditAccount"
          component={EditProfileScreen}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
        />
      
        {/* Main App */}
        <Stack.Screen
          name="MainTabs"
          component={BottomTabsNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}