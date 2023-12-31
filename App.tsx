import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { COLORS, SCREENDIMENSIONS } from './src/constants';
import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { MainMenu } from './src/screens/MainMenu';
import * as SplashScreen from 'expo-splash-screen';
import { SayingsViewer } from './src/screens/SayingsViewer';
import { useSnapshot } from "valtio/react";
import { state, setSayings, setTags } from "./src/state";
import { TagsViewer } from './src/screens/TagsViewer';
import { FavouritesViewer } from './src/screens/FavouritesViewer';
import { About } from './src/screens/About';
import axios from 'axios';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const {screen} = useSnapshot(state)

  useEffect(()=>{
    const url = "https://jari-server-api.onrender.com";
    axios.get(`${url}/sayings/0/-1`).then((response) => {
        setSayings(response.data);
    })
    .then(()=>{
      axios.get(`${url}/tags`).then((response) => {
        setTags(response.data);
    })
    });
  },[])

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
      {
        screen==0?<MainMenu />:
        screen==1?<SayingsViewer />:
        screen==2?<TagsViewer />:
        screen==3?<FavouritesViewer />:
        screen==4?<About />:
        null
      }
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