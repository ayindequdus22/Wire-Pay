import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {  useRouter } from "expo-router";
import "../global.css"
import ThemeText from "@/components/ThemeText";
import { screenHeight, screenWidth } from "@/constant/screen"
export default function Index() {
  const router = useRouter();
  return (
    <View
      className="bg-[#E5E5E5] flex-1 justify-between items-center" style={{ paddingHorizontal: moderateScale(20),
         paddingVertical: moderateScale(60)
         }}
    >
      <View>
        <Image style={{
          width: scale(screenWidth * 0.5),
          height: scale(screenHeight * 0.2),
        }}
          className="rounded-full"
          source={require("../assets/images/welcome.png")}
        />
        <ThemeText className="text-center text-secondary font-titalium font-medium" style={{ fontSize: scale(25), paddingVertical: moderateScale(20) }}>Flowa</ThemeText>
      </View>
      <View>
        <View style={{ marginTop: verticalScale(20), marginBottom: verticalScale(10) }}>
          <ThemeText style={styles.baseText} className="font-semibold font-titalium">
            Experience the{' '}
            <ThemeText style={{
              fontSize: scale(32),
              lineHeight: verticalScale(35),
            }} className="text-primary underline">easier way
            </ThemeText>{' '}
            for transaction!
          </ThemeText>
        </View>
        <ThemeText className="text-[rgba(132,132,132,1)] font-poppins" style={styles.secondText}>Connect your money to your friends & brands.</ThemeText>
      </View>
      <TouchableOpacity style={{ height: scale(50), marginBottom: verticalScale(10) }} className="bg-primary flex rounded-lg shadow-[0_0_1px_rgba(44,44,44,1)] justify-center items-center w-full">
        <ThemeText className="text-white uppercase tracking-widest" style={{ fontSize: scale(20) }}>
          Get Started</ThemeText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  secondText: {
    fontSize: scale(20),
    lineHeight: verticalScale(25),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(60)
  },
  baseText: {
    fontSize: scale(32),
    lineHeight: verticalScale(35),
    color: "rgba(1, 26, 81, 0.82)",
    // paddingVertical: verticalScale(20),
  },
})