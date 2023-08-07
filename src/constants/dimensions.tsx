import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const SCREENDIMENSIONS = {
    vw: width,
    vh: height,
    half_vw: width/2,
    half_vh: height/2,
    padding: 0.1
}

export const COMMONDIMENSIONS = {
    borderRadius: 5
}

export const LARGEBTNDIMENSIONS = {
    offset: SCREENDIMENSIONS.half_vw *(SCREENDIMENSIONS.padding*2),
    side: SCREENDIMENSIONS.half_vw * (1 - SCREENDIMENSIONS.padding*2),
}

export const FONTSIZES = {
    title:SCREENDIMENSIONS.vw/5,
    largeBtn:(SCREENDIMENSIONS.vw  - LARGEBTNDIMENSIONS.offset)/15,
    saying:(SCREENDIMENSIONS.vw  - LARGEBTNDIMENSIONS.offset)/20,
    tag:(SCREENDIMENSIONS.vw  - LARGEBTNDIMENSIONS.offset)/25
}