import { View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ThemeText from '@/components/ThemeText'

export default function register() {
  return (
    <View className='bg-[#E5E5E5] flex-1 items-center' style={{ paddingHorizontal: moderateScale(14), paddingTop: moderateScale(40) }}>
      <ThemeText type='title' className='text-secondary'>Registration</ThemeText>
      <ThemeText className='text-center text-tertiary-text'>Enter your mobile phone number, we will send
        you OTP to verify later.</ThemeText>
      <Image source={require("@/assets/images/register-image.png")} style={{ height: scale(120), width: scale(120) }} />

      <TextInput placeholder='Phonenumber'  className='border-[1px] rounded-xl w-full border-tertiary-text' style={{ height: verticalScale(40), paddingHorizontal: moderateScale(10) }} />
      <TouchableOpacity className='bg-primary w-full flex justify-center items-center rounded-xl' style={{ height: verticalScale(40) }}>
        <ThemeText className='text-white uppercase' type='body'>Send Via SMS</ThemeText>
      </TouchableOpacity>
      <TouchableOpacity className='bg-secondary w-full flex justify-center items-center rounded-xl' style={{ height: verticalScale(40) }}>
        <ThemeText className='text-white uppercase' type='body'>Send Via WhatsApp</ThemeText>
      </TouchableOpacity>
      <View className='flex-row'>
        <ThemeText>By creating and/or using an account, you
          agree to our </ThemeText>
        <TouchableOpacity>
          <ThemeText className='text-primary'>Terms & Conditions.</ThemeText>
        </TouchableOpacity>
      </View>
    </View>
  )
}