// index.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChatGPT from '../../src/ChatGPT';
import GetText from '../../components/ImageToText'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <GetText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});