import Stack from "./Navigation/Stack";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import mobileAds from "react-native-google-mobile-ads";
import * as Font from "expo-font";
import SplashScreen from "react-native-splash-screen";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        mobileAds()
          .initialize()
          .then((adapterStatuses) => {
            // Initialization complete!
          });
        await Font.loadAsync(
          "Humanbumsuk",
          require("./Assets/Fonts/휴먼범석체.ttf")
        );
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        SplashScreen.hide();
      }
    }

    prepare();
  }, []);
  if (!appIsReady) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}
