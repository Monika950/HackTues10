import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import QuizComponent from '@/components/Quiz';

export default function TabThreeScreen() {
    //console.log(globalVariable.GPTOutput);
    console.log('123');
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
});
