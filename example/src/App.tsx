import React from 'react';

import { StyleSheet, View } from 'react-native';
import Text from 'react-native-fontext';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.thin}>Noto Sans Mono thin</Text>
      <Text style={styles.medium}>Noto Sans Mono medium</Text>
      <Text style={styles.regular}>Noto Sans Mono regular</Text>
      <Text style={styles.extraLight}>Noto Sans Mono extra light</Text>
      <Text style={styles.extraBold}>Noto Sans Mono extra bold</Text>
      <Text style={styles.bolt}>Noto Sans Mono bolt</Text>
      <Text style={styles.black}>Noto Sans Mono black</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  thin: {
    fontFamily: 'NotoSansMono',
    fontWeight: '100',
  },
  medium: {
    fontFamily: 'NotoSansMono',
    fontWeight: '500',
  },
  regular: {
    fontFamily: 'NotoSansMono',
    fontWeight: '400',
  },
  extraLight: {
    fontFamily: 'NotoSansMono',
    fontWeight: '200',
  },
  extraBold: {
    fontFamily: 'NotoSansMono',
    fontWeight: '800',
  },
  bolt: {
    fontFamily: 'NotoSansMono',
    fontWeight: '700',
  },
  black: {
    fontFamily: 'NotoSansMono',
    fontWeight: '900',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
