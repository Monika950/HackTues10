import { Alert, View, Button, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'

import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import Auth from '../../components/Auth'
import Account from '../../components/Account'
import { Session } from '@supabase/supabase-js'

import EditScreenInfo from '@/components/EditScreenInfo';


export default function TabOneScreen() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  
  return (
    <View style={styles.container}>
      <Text>Quizify</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
     
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '90%',
  },
});
