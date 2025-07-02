import Colors from '@/components/colors'
import ThemeText from '@/components/ThemeText'
import React, { useState } from 'react'
import { Image, TextInput, View, TouchableHighlight, Button, TouchableOpacity } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function login() {
  const [secureText, setSecureText] = useState(true);
  return (
    <View className='bg-[#E5E5E5] flex-1 items-center' style={{ paddingHorizontal: moderateScale(14), paddingTop: moderateScale(40) }}>
      <Image source={require("../../assets/images/login-image.png")} style={{
        width: scale(140),
        height: scale(140),
      }} />
      <ThemeText type='title' style={{ paddingTop: verticalScale(20) }}>Login</ThemeText>
      <ThemeText type='details' style={{ paddingTop: verticalScale(10) }} className={`text-tertiary-text text-center font-poppins font-normal`}>Set a name for your profile, here's
        the password</ThemeText>
      <View className='w-full' style={{ gap: moderateScale(15), marginTop: verticalScale(40), marginBottom: verticalScale(25) }}>
        <TextInput placeholder='Username' className='border-[1px] rounded-xl w-full border-tertiary-text' style={{ height: verticalScale(40), paddingHorizontal: moderateScale(10) }} />

        <View className='border-[1px] items-center rounded-xl w-full border-tertiary-text flex flex-row relative' style={{ height: verticalScale(40), paddingHorizontal: moderateScale(10), }}>

          <TextInput placeholder='Password' secureTextEntry={secureText} className='' />
          <Ionicons name="eye-off-outline" color={Colors.tertiaryText} size={moderateScale(28)} className='absolute  right-2' onPress={() => setSecureText(!secureText)} />
        </View>
        <View className='flex flex-row justify-end w-full'>
          <TouchableOpacity><ThemeText className='text-tertiary-text'>Forgot password?</ThemeText></TouchableOpacity>
        </View></View>
      <TouchableOpacity className='bg-primary w-full rounded-md flex items-center justify-center ' style={{ height: verticalScale(40), marginTop: verticalScale(40) }}><ThemeText className='text-white font-semibold uppercase' type='body'>Login</ThemeText></TouchableOpacity>
      <View className='flex flex-row' style={{ marginTop: verticalScale(15) }}>
        <ThemeText className=''>Don’t have an account?</ThemeText>
        <ThemeText className='underline' type='link'>Signup</ThemeText>
      </View>
    </View>
  )
}