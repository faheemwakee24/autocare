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
import { Provider } from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import { store } from './src/store';

// Disable development error/warning toasts (red/grey overlay)
LogBox.ignoreAllLogs(true);

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

// Styles are now handled in individual screen components

export default App;
