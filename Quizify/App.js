import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabOneScreen from './app/(tabs)/index';
import TabThreeScreen from './app/(tabs)/three';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabOneScreen} />
        <Stack.Screen name="three" component={TabThreeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;