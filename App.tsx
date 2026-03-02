/**
 * AutoCare React Native App
 * Navigation-enabled automotive companion app
 *
 * @format
 */

import 'react-native-gesture-handler'; // Must be at the top
import React from 'react';
import { LogBox, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';

// Disable development error/warning toasts (red/grey overlay)
LogBox.ignoreAllLogs(true);

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>

      <RootNavigator />
    </SafeAreaProvider>
  );
}

// Styles are now handled in individual screen components

export default App;
