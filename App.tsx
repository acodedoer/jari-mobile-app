import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS, SCREENDIMENSIONS } from './src/constants';
import { useCallback, useState } from 'react';
import { useFonts } from 'expo-font';
import { MainMenu } from './src/screens/MainMenu';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
      'gothic': require('./assets/fonts/DidactGothic-Regular.ttf'),
      'balsamiq-bold': require('./assets/fonts/BalsamiqSans-Bold.ttf'),
      'balsamiq-boldItalic': require('./assets/fonts/BalsamiqSans-BoldItalic.ttf'),
      'balsamiq-italic': require('./assets/fonts/BalsamiqSans-Italic.ttf'),
      'balsamiq-regular': require('./assets/fonts/BalsamiqSans-Regular.ttf'),
  });
 
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.style} onLayout={onLayoutRootView}>  
      <StatusBar hidden={true}/> 
      <MainMenu/>
    </View>
  );
}

const styles = StyleSheet.create({
  style:{
      backgroundColor: COLORS.background,
      width: SCREENDIMENSIONS.vw,
      height: SCREENDIMENSIONS.vh
  }
})