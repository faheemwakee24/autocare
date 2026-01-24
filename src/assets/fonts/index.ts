import { Platform } from 'react-native';

// Platform-aware font names (iOS PostScript vs Android file names)
export const FontFamily = {
  playfair: {
    regular:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-Regular'
        : 'PlayfairDisplay-Regular',
    medium:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-Medium'
        : 'PlayfairDisplay-Medium',
    semiBold:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-SemiBold'
        : 'PlayfairDisplay-SemiBold',
    bold:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-Bold'
        : 'PlayfairDisplay-Bold',
    extraBold:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-ExtraBold'
        : 'PlayfairDisplay-ExtraBold',
    black:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-Black'
        : 'PlayfairDisplay-Black',
    italic:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-Italic'
        : 'PlayfairDisplay-Italic',
    mediumItalic:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-MediumItalic'
        : 'PlayfairDisplay-MediumItalic',
    semiBoldItalic:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-SemiBoldItalic'
        : 'PlayfairDisplay-SemiBoldItalic',
    boldItalic:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-BoldItalic'
        : 'PlayfairDisplay-BoldItalic',
    extraBoldItalic:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-ExtraBoldItalic'
        : 'PlayfairDisplay-ExtraBoldItalic',
    blackItalic:
      Platform.OS === 'ios'
        ? 'PlayfairDisplay-BlackItalic'
        : 'PlayfairDisplay-BlackItalic',
  },
} as const;

// Backwards-compatible flat map
export const appFonts = {
  regular: FontFamily.playfair.regular,
  medium: FontFamily.playfair.medium,
  semiBold: FontFamily.playfair.semiBold,
  bold: FontFamily.playfair.bold,
  extraBold: FontFamily.playfair.extraBold,
  black: FontFamily.playfair.black,
  italic: FontFamily.playfair.italic,
  mediumItalic: FontFamily.playfair.mediumItalic,
  semiBoldItalic: FontFamily.playfair.semiBoldItalic,
  boldItalic: FontFamily.playfair.boldItalic,
  extraBoldItalic: FontFamily.playfair.extraBoldItalic,
  blackItalic: FontFamily.playfair.blackItalic,
};

export type AppFontKey = keyof typeof appFonts;
