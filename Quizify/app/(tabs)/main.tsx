import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
  import { Pressable, View, Text} from 'react-native';
  import GetText from '@/components/ImageToText';
  import { Stack } from 'expo-router'

  import Colors from '@/constants/Colors';
  import { useColorScheme } from '@/components/useColorScheme';
  import { useClientOnlyValue } from '@/components/useClientOnlyValue';
  import {globalVariable} from '@/globals';
  import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

import { Slot, useRouter, useSegments } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
  
  // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  // function TabBarIcon(props: {
  //     name: React.ComponentProps<typeof FontAwesome>['name'];
  //     color: string;
  // }) {
  //   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
  // }

  
  
  export default function TabLayout() {
    //const colorScheme = useColorScheme();
    const router = useRouter()


    return (
      <View>

      <GetText />
      
      <Stack
      screenOptions={{
          // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          // // Disable the static render of the header on web
          // // to prevent a hydration error in React Navigation v6.
          // headerShown: useClientOnlyValue(false, true),
          headerStyle: {
            backgroundColor: '#0f0f0f',
          },
          headerTintColor: '#fff',
          headerShown: false,
        }}>
    

        <Stack.Screen name="main"/>
    <Stack.Screen
      name="two"
      options={{
        headerTitle: 'My Files',
        headerShown: true,
        headerRight: () => (
          // <Link href="../list/index" >
          //   <Pressable>
          //     <Text>Storage</Text>
          //   </Pressable>
          //  {/* // <Button onPress={NavStorage } title="Storage" ></Button> */}
          // </Link>
          <View></View>
        ),
      }}
      />
    </Stack>
  
      </View>
  );
  } 
