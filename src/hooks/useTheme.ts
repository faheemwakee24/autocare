import { useColorScheme } from 'react-native';
import { theme } from '../constants';

export const useTheme = () => {
  const colorScheme = useColorScheme();

  // For now, we'll use the default theme
  // In the future, this could be extended to support custom themes
  return {
    theme,
    isDark: colorScheme === 'dark',
    colors: theme.colors,
    spacing: theme.spacing,
    borderRadius: theme.borderRadius,
    typography: theme.typography,
    shadows: theme.shadows,
  };
};