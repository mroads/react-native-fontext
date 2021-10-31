import type { TextStyle } from 'react-native';

type FontWeight = Exclude<TextStyle['fontWeight'], void>;

const FontWeightTranslations: Record<FontWeight, string> = {
  '100': 'Thin',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  'normal': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',
  'bold': 'Bold',
};

export default FontWeightTranslations;
