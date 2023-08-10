import React, { useState } from "react"
import { StyleSheet, View, Text, Pressable } from "react-native"
import { COLORS, COMMONDIMENSIONS, FONTSIZES, LARGEBTNDIMENSIONS, SCREENDIMENSIONS } from "../constants"
import { Button } from "./Button"
import { ButtonProps } from "../types"
import { ImageIcon } from "./ImageIcon"

type LargeButtonProps = ButtonProps & {
    callback: any
}
export const LargeButton = ({label, icon, callback}:LargeButtonProps) => {
    const [pressed, setPressed] = useState(false);

    return(
        <Pressable onPressIn={()=>setPressed(true)} onPressOut={()=>{setPressed(false); callback()}}>
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
        shadowOffset: {width: -0.5, height: 1},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
        elevation: 1, 
    },
    containerPressed:{
        backgroundColor:COLORS.primaryLight,
        shadowOffset: {width: 0, height: 0},  
        shadowColor: '#171717',  
        shadowOpacity: 0.0,  
        shadowRadius: 0,  
        elevation: 0, 

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