import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import QuizComponent from '@/components/Quiz';
import React from 'react';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab Two</Text>
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
