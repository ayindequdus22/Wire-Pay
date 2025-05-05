import { Text, View } from "react-native";
import "../global.css"
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
     className="bg-sky-500"
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/(auth)/login"}>Go to Login</Link>
    </View>
  );
}
