import { Stack } from 'expo-router'
import {useAuth} from '../../components/Auth'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View} from 'react-native';

// Simple stack layout within the authenticated area
const StackLayout = () => {
  const { signOut } = useAuth()

  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0f0f0f',
      },
      headerTintColor: '#fff',
      headerShown: false,
    }}
    >
      <Stack.Screen
        name="list"
// import React from 'react';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Link, Tabs } from 'expo-router';
// import { Pressable, View} from 'react-native';

// import Colors from '@/constants/Colors';
// import { useColorScheme } from '@/components/useColorScheme';
// import { useClientOnlyValue } from '@/components/useClientOnlyValue';
// import {globalVariable} from '@/globals';
// import { StyleSheet } from 'react-native';

// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//       <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         // Disable the static render of the header on web
//         // to prevent a hydration error in React Navigation v6.
//         headerShown: useClientOnlyValue(false, true),
//       }}>
//       <Tabs.Screen
//         name="index"
        options={{
          headerTitle: 'My Files',
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity onPress={signOut}>
              <Ionicons name="log-out-outline" size={30} color={'#fff'} />
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>
    </Stack>
  )
}

export default StackLayout
      {/* />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
        <Tabs.Screen
          name="three"
          options={{
            title: '',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color='white'/>,
            headerShown: false,
            tabBarShowLabel: false,
          }}
        />
    </Tabs>

  );
} */}
