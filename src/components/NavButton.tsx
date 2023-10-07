import { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { COLORS, COMMONDIMENSIONS, FONTSIZES, SCREENDIMENSIONS } from "../constants";
import { ButtonProps } from "../types"
import { ImageIcon } from "./ImageIcon";

type NavButtonPros  =  ButtonProps & {
    direction: string,
    onClick:any
}

export const NavButton = ({label, icon, direction, onClick}: NavButtonPros) => {
    const [pressed, setPressed] = useState(false);
    return(
        <Pressable onPressIn={()=>setPressed(true)} onPressOut={()=>{setPressed(false); onClick()}}>
            <View style={[styles.container, pressed?styles.containerPressed:null]}>
                {direction == "left" ? <ImageIcon image={icon} type="navButton"/> : null}
                <Text style={[styles.label, pressed?styles.labelPressed:null]}>{label}</Text>
                {direction == "right" ? <ImageIcon image={icon} type="navButton"/> : null}
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    containerPressed:{
        backgroundColor:COLORS.primaryLight,
        shadowOffset: {width: 0, height: 0},  
        shadowColor: '#171717',  
        shadowOpacity: 0.0,  
        shadowRadius: 0,  
        elevation: 0, 
    },
    container:{
        paddingTop:COMMONDIMENSIONS.borderRadius,
        paddingBottom:COMMONDIMENSIONS.borderRadius,
        borderRadius: COMMONDIMENSIONS.borderRadius,
        backgroundColor:"#fff",
        width:SCREENDIMENSIONS.vw/3,
        shadowOffset: {width: -0.5, height: 1},  
        shadowColor: '#171717',  
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
        elevation: 1, 
    },
    label: {
        fontFamily:"balsamiq-regular",
        fontSize:FONTSIZES.tag,
    },
    labelPressed: {
        color:COLORS.primary
    }
})