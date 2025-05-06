import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Safescreen from "@/components/SafeScreen";
export default function RootLayout() {
  return (<SafeAreaProvider>
    <Safescreen>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar style="dark" />
    </Safescreen>
  </SafeAreaProvider>)
}
