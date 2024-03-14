// index.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChatGPT from '../../src/ChatGPT';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ChatGPT />
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