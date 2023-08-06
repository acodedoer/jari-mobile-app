import React, { useState } from "react"
import { StyleSheet, View, Text, Pressable } from "react-native"
import { COLORS, DIMENSIONS } from "../constants"
import { Button } from "./Button"

type ButtonProps = {
    label: string;
    icon: JSX.Element
}

export const LargeButton = ({label, icon}:ButtonProps) => {
    const [pressed, setPressed] = useState(false);

    return(
        <Pressable onPressIn={()=>setPressed(true)} onPressOut={()=>setPressed(false)}>
            <View style={[styles.container, pressed?styles.containerPressed:null]}>
                {icon}
                <Text style={[styles.label, pressed?styles.labelPressed:null]}>{label}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width: DIMENSIONS.half_vw - (DIMENSIONS.half_vw *0.2),
        height: DIMENSIONS.half_vw - (DIMENSIONS.half_vw *0.2),
        backgroundColor:"#fff",
        borderRadius: 5,
        justifyContent:"center",
        alignItems:"center",
    },
    containerPressed:{
        backgroundColor:"#FFE4D6",

    },
    label:{
        fontSize: DIMENSIONS.vw/15,
        fontFamily:"balsamiq-regular",
        color:COLORS.secondary
    },
    labelPressed:{
        color:COLORS.primary,
    }
})