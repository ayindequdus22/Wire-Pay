import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function login() {
  return (
    <View>
      <Link href={"/"}>
      Looomogm</Link>

      <Link href={"/(auth)/register"}>
      Register</Link>
      <Text>login</Text>
    </View>
  )
}