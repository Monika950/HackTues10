import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

import Account from '../../components/Account'
import { Session } from '@supabase/supabase-js'

//import EditScreenInfo from '@/components/EditScreenInfo';
import { Alert, View, Button, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // Sign in with email and password
  const onSignInPress = async () => {
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  // Create a new user
  const onSignUpPress = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Spinner visible={loading} />
      <Image style={styles.curve} source={require('../../assets/images/curve.png')} />
      <Image style={styles.down1} source={require('../../assets/images/down1.png')} />
      <Image style={styles.up1} source={require('../../assets/images/up1.png')} />
      <Text style={styles.header}>Login</Text>

      <TextInput
        autoCapitalize="none"
        placeholder="john@doe.com"
        value={email}
        onChangeText={setEmail}
        style={styles.inputField}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword} 
        secureTextEntry
        style={styles.inputField}
      />

      <TouchableOpacity onPress={onSignInPress} style={styles.button}>
        <Text style={{ color: '#fff' }}>Sign in</Text>
      </TouchableOpacity>
      <Button onPress={onSignUpPress} title="Create Account" color={'#fff'}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  curve: {
    width: "100%",
    height: "100%",
    position: 'absolute',
    opacity: 1,
    resizeMode:"cover"
  },
  up1: {
    width: 170,
    height: 170,
    position: 'absolute',
    opacity: 1,
    resizeMode:"contain"
  },
  down1: {
    width: 130,
    height: 130,
    bottom: 0,
    right: 0,
    position: 'absolute',
    opacity: 1,
    resizeMode:"contain"
  },
  container: {
    flex: 1,
    paddingTop: 200,
    //padding: 20,
    backgroundColor: '#151515',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    margin: 50,
    color: '#fff',
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#2b825b',
    borderRadius: 4,
    padding: 10,
    color: '#fff',
    backgroundColor: '#363636',
  },
  button: {
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: '#2b825b',
    padding: 12,
    borderRadius: 4,
  },
})



export default Login

