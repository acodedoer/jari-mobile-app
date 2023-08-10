import React from "react"
import { StyleSheet, Text, Image} from "react-native"
import { FONTSIZES, SCREENDIMENSIONS } from "../constants"
import { IconProps } from "../types"
const images:any = {
    "icon-parrot": require("../../assets/images/icon-parrot.png"),
    "icon-tag": require("../../assets/images/icon-tag.png"),
    "icon-saved": require("../../assets/images/icon-saved.png"),
    "icon-speaker": require("../../assets/images/icon-speaker.png"),
    "icon-previous": require("../../assets/images/icon-previous.png"),
    "icon-next": require("../../assets/images/icon-next.png"),
    "icon-random": require("../../assets/images/icon-random.png"),
    "icon-cross": require("../../assets/images/icon-cross.png"),
}
export const ImageIcon = ({image, type}:IconProps): JSX.Element => {
    return <Image testID="imageIcon" accessibilityRole="image" style={type==="largeButton"?styles.imageLargeBtn:type==="imageHome"?styles.imageHome:styles.imageTag} source={images[image]}/>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    imageLargeBtn: {
        width: SCREENDIMENSIONS.half_vw/3,
        height: SCREENDIMENSIONS.half_vw/3,
    },
    imageTag: {
        width: FONTSIZES.tag,
        height:FONTSIZES.tag,
    },
    imageHome: {
        width: SCREENDIMENSIONS.half_vw/10,
        height: SCREENDIMENSIONS.half_vw/10,
    }
})