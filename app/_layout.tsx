import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Safescreen from "@/components/SafeScreen";
import { useFonts } from "expo-font";
import { View } from "react-native";
export default function RootLayout() {
  const [loaded] = useFonts({
    'spaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'titalium': require("../assets/fonts/TitilliumWeb-SemiBold.ttf"),
    'poppins': require("../assets/fonts/Poppins-SemiBold.ttf"),

  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }
  return (

    <SafeAreaProvider>
      <Safescreen>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="index" />
        </Stack>
        <StatusBar style="dark" />
      </Safescreen>
    </SafeAreaProvider>
  )
}
