import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import QuizComponent from '@/components/Quiz';
import { globalVariable } from '@/globals';

export default function TabThreeScreen() {
    console.log(globalVariable.GPTOutput);
  return (
    <View style={styles.container}>
      <QuizComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

