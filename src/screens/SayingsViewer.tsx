import { useEffect, useState } from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"
import { HomeButton } from "../components/HomeButton"
import { ImageIcon } from "../components/ImageIcon"
import { Saying } from "../components/Saying"
import { Navbar } from "../components/Navbar"
import { COLORS, COMMONDIMENSIONS, FONTSIZES, SCREENDIMENSIONS } from "../constants"
import { setSayings, state } from "../state"
import { ButtonProps, IconProps } from "../types"
import { TopNavbar } from "../components/TopNavbar"
import { BottomNavbar } from "../components/BottomNavbar"
import axios from 'axios';
import { useSnapshot } from "valtio"

export const SayingsViewer = () => {
    const [index, setIndex] = useState(0);
    const {sayings,tagView, tagSayings} = useSnapshot(state)
    const [data, setData] = useState(sayings)

    useEffect(()=>{
        if(tagView){
            setData(tagSayings)
        }
        else {
            setData(sayings);
        }
    },[tagView])

    const onClickNav = (inc: number) => {
        setIndex(index+inc);
    }

    return(
        data && <View style={styles.container}>
            <TopNavbar title="magana"/>
            <Saying data = {data[index]} total={data.length} index={index+1}/>
            <BottomNavbar index={index} length={data.length} onClick={onClickNav}/>
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