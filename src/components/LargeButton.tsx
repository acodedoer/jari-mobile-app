import React, { useState } from "react"
import { StyleSheet, View, Text, Pressable } from "react-native"
import { COLORS, COMMONDIMENSIONS, FONTSIZES, LARGEBTNDIMENSIONS, SCREENDIMENSIONS } from "../constants"
import { Button } from "./Button"

type ButtonProps = {
    label: string;
    icon: JSX.Element
}

export const LargeButton = ({label, icon}:ButtonProps) => {
    const [pressed, setPressed] = useState(false);

    return(
        <Pressable onPressIn={()=>setPressed(true)} onPressOut={()=>setPressed(false)}>
            <View testID="largeButtonView" style={[styles.container, pressed?styles.containerPressed:null]}>
                {icon}
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