import React, { useState } from "react"
import { StyleSheet, View, Text, Pressable } from "react-native"
import { COLORS, COMMONDIMENSIONS, FONTSIZES, LARGEBTNDIMENSIONS, SCREENDIMENSIONS } from "../constants"
import { Button } from "./Button"
import { ButtonProps } from "../types"
import { ImageIcon } from "./ImageIcon"

type LargeButtonProps = ButtonProps & {
    setScreen: any
}
export const LargeButton = ({label, icon, setScreen}:LargeButtonProps) => {
    const [pressed, setPressed] = useState(false);

    return(
        <Pressable onPressIn={()=>{setPressed(true); setScreen()}} onPressOut={()=>setPressed(false)}>
            <View testID="largeButtonView" style={[styles.container, pressed?styles.containerPressed:null]}>
                <ImageIcon image={icon} type="largeButton" />
                <Text style={[styles.label, pressed?styles.labelPressed:null]}>{label}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width: LARGEBTNDIMENSIONS.side,
        height: LARGEBTNDIMENSIONS.side,
        backgroundColor:"#fff",
        borderRadius: COMMONDIMENSIONS.borderRadius,
        justifyContent:"center",
        alignItems:"center",
    },
    containerPressed:{
        backgroundColor:COLORS.primaryLight,

    },
    label:{
        fontSize: FONTSIZES.largeBtn,
        fontFamily:"balsamiq-regular",
        color:COLORS.secondary
    },
    labelPressed:{
        color:COLORS.primary,
    }
})