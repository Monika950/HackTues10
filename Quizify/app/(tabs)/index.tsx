import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import Auth from '../../components/Auth'
import Account from '../../components/Account'
import { Session } from '@supabase/supabase-js'
// import { Image } from 'expo-image'
import { StyleSheet, ScrollView, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

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
      <ScrollView style={styles.scrollView}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
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
  scrollView: {
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: "100%",
    position: 'absolute',
  }
});
