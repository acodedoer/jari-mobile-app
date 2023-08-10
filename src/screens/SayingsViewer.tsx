import { useState } from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"
import { HomeButton } from "../components/HomeButton"
import { ImageIcon } from "../components/ImageIcon"
import { Saying } from "../components/Saying"
import { Navbar } from "../components/Navbar"
import { COLORS, COMMONDIMENSIONS, FONTSIZES, SCREENDIMENSIONS } from "../constants"
import { ButtonProps, IconProps } from "../types"
import { TopNavbar } from "../components/TopNavbar"
import { BottomNavbar } from "../components/BottomNavbar"

export const SayingsViewer = () => {
    return(
        <View style={styles.container}>
            <TopNavbar title="magana"/>
            <Saying/>
            <BottomNavbar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
        width: SCREENDIMENSIONS.vw,
        height: SCREENDIMENSIONS.vh,
    },
    navbar:{
        position:"absolute",
        bottom:SCREENDIMENSIONS.vw*(SCREENDIMENSIONS.padding/2),
        flexDirection:"row",
        justifyContent:"space-between",  
        width:SCREENDIMENSIONS.vw * (1-SCREENDIMENSIONS.padding)      
    },
    
    pressable:{
        display:"flex", 
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center",
       
    }
})