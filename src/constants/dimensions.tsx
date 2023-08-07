import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const SCREENDIMENSIONS = {
    vw: width,
    vh: height,
    half_vw: width/2,
    half_vh: height/2
}

export const FONTSIZES = {
    title:SCREENDIMENSIONS.vw/5
}
