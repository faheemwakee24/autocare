/**
 * AutoCare React Native App
 * Navigation-enabled automotive companion app
 *
 * @format
 */

import 'react-native-gesture-handler'; // Must be at the top
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

// Styles are now handled in individual screen components

export default App;
