import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return <Stack >
    <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
    <Stack.Screen name="index"/>
         {/* <StatusBar style="auto" /> */}
  </Stack>;
}
