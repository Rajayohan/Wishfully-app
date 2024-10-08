import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import {
  Montserrat_900Black,
  Montserrat_500Medium,
  Montserrat_800ExtraBold,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    Montserrat_900Black,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccount" options={{ headerShown: false }} />
      <Stack.Screen name="FinishAccount1" options={{ headerShown: false }} />
      <Stack.Screen name="FinishAccount2" options={{ headerShown: false }} />
      <Stack.Screen name="Email" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
