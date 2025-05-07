import { TouchableOpacity, View,Image, Dimensions } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Link } from "expo-router";
import "../global.css"
import ThemeText from "@/components/ThemeText";
export default function Index() {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
  return (
    <View
      className="bg-[#E5E5E5] flex-1 justify-center items-center"
    >
      <View>
        <Image style={{  width: scale(200),
        height: scale(200),
        padding: moderateScale(5),
          backgroundColor: '#0553',
        }}
        className="rounded-full"
         source={require("../assets/images/welcome.png")} 
        // className="h-60" style={{width:100}}
        />
        <ThemeText>Flowa</ThemeText>
      </View>
      <View>
        <ThemeText>Experience the</ThemeText>
        <ThemeText className="underline"> easier way </ThemeText>
        <ThemeText>for transaction!</ThemeText>
      </View>
      <ThemeText>Connect your money to your friends & brands.</ThemeText>
      <TouchableOpacity><ThemeText>Get Started</ThemeText></TouchableOpacity>
    </View>
  );
}
