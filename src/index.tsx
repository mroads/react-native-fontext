// export function multiply(a: number, b: number): Promise<number> {
//   return Promise.resolve(a * b);
// }

import React from 'react';
import { StyleSheet, TextProps, Text as RNText } from 'react-native';
import FontWeightTranslations from './font-weight-translations';

export function computeFontDefault(
  fontFamily: string | undefined,
  fontWeight: string = 'normal'
): string {
  let prepareFontFamily = '';
  if (fontFamily) {
    prepareFontFamily = fontFamily + '-' + FontWeightTranslations[fontWeight];
  }
  return prepareFontFamily;
}

interface CustomProps extends TextProps {
  component: React.FC<TextProps>;
  computeFont: Function;
}

function Text({
  style,
  component: Component,
  computeFont,
  ...props
}: CustomProps) {
  const combinedStyle = StyleSheet.flatten(style) || {};
  let fontFamily = combinedStyle.fontFamily;
  let fontWeight = combinedStyle.fontWeight;
  if (fontFamily && computeFont && typeof computeFont === 'function') {
    fontFamily = computeFont(fontFamily, fontWeight);
  } else {
    fontFamily = computeFontDefault(fontFamily, fontWeight);
  }

  return Component ? (
    <Component
      style={{ ...combinedStyle, fontFamily, fontWeight: undefined }}
      {...props}
    />
  ) : (
    <RNText
      style={{ ...combinedStyle, fontFamily, fontWeight: undefined }}
      {...props}
    />
  );
}

export default Text;
