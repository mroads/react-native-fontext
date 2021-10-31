import React, { ReactNode } from 'react';
import { StyleSheet, TextProps, Text as RNText, TextStyle } from 'react-native';
import FontWeightTranslations from './font-weight-translations';

export function computeFontDefault(
  fontFamily: string,
  fontWeight: TextStyle['fontWeight'] = 'normal'
): string {
  return fontFamily + '-' + FontWeightTranslations[fontWeight];
}

interface CustomProps extends TextProps {
  children?: ReactNode;
  component?: React.ComponentType<TextProps>;
  computeFont?: (
    fontFamily: string,
    fontWeight?: TextStyle['fontWeight']
  ) => string;
}

function Text({
  style,
  component: Component = RNText,
  computeFont = computeFontDefault,
  ...props
}: CustomProps) {
  let { fontFamily, fontWeight } = StyleSheet.flatten(style) || {};

  if (fontFamily) {
    fontFamily =
      computeFont?.(fontFamily, fontWeight) ??
      computeFontDefault(fontFamily, fontWeight);
  }

  return (
    <Component
      style={[style, { fontFamily, fontWeight: undefined }]}
      {...props}
    />
  );
}

export default Text;
