import React from "react"
import { StyleSheet, Text, Image} from "react-native"
import { SCREENDIMENSIONS } from "../constants"


type IconProps = {
    image:string
}
const images:any = {
    "icon-parrot": require("../../assets/images/icon-parrot.png"),
    "icon-tag": require("../../assets/images/icon-tag.png"),
    "icon-saved": require("../../assets/images/icon-saved.png"),
    "icon-speaker": require("../../assets/images/icon-speaker.png")
}
export const ImageIcon = ({image}:IconProps): JSX.Element => {
    return <Image testID="imageIcon" accessibilityRole="image" style={styles.image} source={images[image]}/>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    image: {
        width: SCREENDIMENSIONS.half_vw/3,
        height: SCREENDIMENSIONS.half_vw/3,
    },
})