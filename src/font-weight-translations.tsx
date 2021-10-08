interface Map {
  [key: string]: string | undefined;
}

const FontWeightTranslations: Map = {
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
