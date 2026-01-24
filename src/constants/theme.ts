import { FontFamily } from '../assets/fonts';
import { metrics } from '../utils';
export const colors = {
  // Primary colors
  primary: '#36969A',
  primaryLight: '#4DA3FF',
  primaryDark: '#0056CC',

  // Secondary colors
  secondary: '#5C7374',
  secondaryLight: '#7D7AFF',
  secondaryDark: '#3F3CC2',

  // Status colors
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  info: '#5AC8FA',
  appBackground: '#FFFFFF',
  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9F9F9',
    100: '#F2F2F2',
    200: '#E5E5E5',
    300: '#D1D1D1',
    400: '#B8B8B8',
    500: '#9B9B9B',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  primaryColors: {
    primary5: '#36969A0D',
    primary7: '#36969A12',
    primary19: '#36969A30',
    primary32: '#36969A52'
  }
  ,
  // Background colors
  background: {
    primary: '#F5F5F5',
    secondary: '#FFFFFF',
    card: '#FFFFFF',
    overlay: 'rgba(0, 0, 0, 0.5)',
    primary5: '#36969A0D',
    primary7: '#36969A12',
    primary19: '#36969A30'
  },

  // Text colors
  text: {
    primary: '#5C7374',
    secondary: '#4D4D4D',
    tertiary: '#9B9B9B',
    inverse: '#FFFFFF',
    disabled: '#B8B8B8',
    title: '#000000',
    white: '#FFFFFF'
  },

  // Border colors

  border: {
    light: '#E5E5E5',
    medium: '#5C737412',
    dark: '#B8B8B8',
    dark2: '#5C73743B',
    primary5: '#36969A0D',
    primary7: '#36969A12'

  },
};

export const spacing = {
  xs: metrics.width(4),
  sm: metrics.width(8),
  sml: metrics.width(10),
  md: metrics.width(13),
  mdl: metrics.width(14),
  mdl2: metrics.width(16),
  mdl3: metrics.width(18),
  mdl4: metrics.width(20),
  lg: metrics.width(24),
  xl: metrics.width(32),
  xl2: metrics.width(40),
  xxl: metrics.width(48),
  xxxl: metrics.width(64),
  appMarginHorizontal: metrics.width(30),
};

export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  xxl2: metrics.width(42),
  xxxl: 67,
  full: 9999,
};

export const typography = {
  fontSize: {
    xs: metrics.width(13),
    xsm: metrics.width(14),
    sm: metrics.width(15),
    md: metrics.width(17),
    lg: metrics.width(18),
    xl: metrics.width(20),
    xxl: metrics.width(24),
    xxxl: metrics.width(32),
    huge: metrics.width(48),
  },
  fontWeight: {
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  fontFamily: {
    regular: FontFamily.playfair.regular,
    medium: FontFamily.playfair.medium,
    semiBold: FontFamily.playfair.semiBold,
    bold: FontFamily.playfair.bold,
    heading: FontFamily.playfair.bold,
    italic: FontFamily.playfair.italic,
  },
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 16,
  },
};

export const theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
};