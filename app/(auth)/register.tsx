import React from 'react'
import { View, Image, TouchableOpacity, TextInput } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ThemeText from '@/components/ThemeText'

export default function Register(): React.JSX.Element {
  return (
    <View className='bg-[#E5E5E5] flex-1 items-center' style={{ paddingHorizontal: moderateScale(14), paddingTop: moderateScale(40) }}>
      <ThemeText type='title' className='text-secondary text-center'>Registration</ThemeText>
      <ThemeText className='text-center text-tertiary-text' style={{ marginTop: verticalScale(10), marginBottom: verticalScale(20) }}>Enter your mobile phone number, we will send
        you OTP to verify later.</ThemeText>
      <Image source={require("@/assets/images/register-image.png")} style={{ height: scale(170), width: scale(170) }} />

      <TextInput placeholder='Phonenumber' autoComplete='tel' enterKeyHint='next' inputMode="tel" className='border-[1px] rounded-xl w-full border-tertiary-text' style={{ height: verticalScale(40), paddingHorizontal: moderateScale(10), marginTop: verticalScale(20) }} />
      <TouchableOpacity className='bg-primary w-full flex justify-center items-center rounded-xl' style={{ height: verticalScale(40), marginTop: verticalScale(90), marginBottom: verticalScale(10) }}>
        <ThemeText className='text-white uppercase' type='body'>Send Via SMS</ThemeText>
      </TouchableOpacity>
      <TouchableOpacity className='bg-secondary w-full flex justify-center items-center rounded-xl' style={{ height: verticalScale(40) }}>
        <ThemeText className='text-white uppercase' type='body'>Send Via WhatsApp</ThemeText>
      </TouchableOpacity>
      <View className='items-center' style={{ marginTop: verticalScale(40) }}>
        <ThemeText style={{ fontSize: moderateScale(18) }} className='text-center '>
          By creating and/or using an account, you agree to our{' '}

          <ThemeText onPress={() => { }} className='text-primary'>
            Terms & Conditions.
          </ThemeText>
        </ThemeText>
      </View>
    </View>
  )

}
