import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import "../global.css"
export default function Index() {
  
const blurhash =
'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View
      className="bg-[#E5E5E5] flex-1 justify-center items-center"
    >
      <View>
        <Image style={{flex: 1,
    width: '100%',
    backgroundColor: '#0553',
}}
           source="https://picsum.photos/seed/696/3000/2000"
           placeholder={{ blurhash }}
           contentFit="cover"
           transition={1000}
        //  source={require("../assets/images/welcome.png")} className="h-60" style={{width:100}}
         />
        <Text>Flowa</Text>
      </View>
      <View>
        <Text>Experience the</Text>
         <Text className="underline"> easier way </Text>
        <Text>for transaction!</Text>
      </View>
      <Text>Connect your money to your friends & brands.</Text>
      <TouchableOpacity><Text>Get Started</Text></TouchableOpacity>
    </View>
  );
}
