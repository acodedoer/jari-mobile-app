import React from "react"
import { Image } from "expo-image"
import { StyleSheet, Text, View} from "react-native"
import { DIMENSIONS } from "../constants"



type IconProps = {
    image:string
}

export const ImageIcon = ({image}:IconProps): JSX.Element => {
    switch (image){
        case "icon-parrot":
            return <View style={styles.container}><Image contentFit={"contain"} style={styles.image} source={require("../../assets/images/icon-parrot.png")}/></View>
        case "icon-tag":
            return <View style={styles.container}><Image contentFit={"contain"} style={styles.image} source={require("../../assets/images/icon-tag.png")}/></View>
        case "icon-saved":
            return <View style={styles.container}><Image contentFit={"contain"} style={styles.image} source={require("../../assets/images/icon-saved.png")}/></View>
        case "icon-speaker":
            return <View style={styles.container}><Image contentFit={"contain"} style={styles.image} source={require("../../assets/images/icon-speaker.png")}/></View>
        default:
            return <Text>Not Image Found</Text>
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    image: {
        width: DIMENSIONS.half_vw/3,
        height: DIMENSIONS.half_vw/3,
    },
})