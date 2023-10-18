// @ts-nocheck
import { useEffect, useState } from "react"
import { View, StyleSheet, Text, Pressable } from "react-native"
import { HomeButton } from "../components/HomeButton"
import { ImageIcon } from "../components/ImageIcon"
import { Saying } from "../components/Saying"
import { Navbar } from "../components/Navbar"
import { COLORS, COMMONDIMENSIONS, FONTSIZES, SCREENDIMENSIONS } from "../constants"
import { setSayings, state, setSayingsIndex } from "../state"
import { ButtonProps, IconProps } from "../types"
import { TopNavbar } from "../components/TopNavbar"
import { BottomNavbar } from "../components/BottomNavbar"
import axios from 'axios';
import { useSnapshot } from "valtio"

export const SayingsViewer = () => {
    const {sayings,tagView, tagSayings, sayingsIndex} = useSnapshot(state)
    const [data, setData] = useState<any>(sayings)

    useEffect(()=>{
        if(tagView){
            console.log(sayingsIndex);
            console.log(sayings[sayingsIndex]);
            console.log(sayings );
            let temp = tagSayings.findIndex((el:any)=> el._id === sayings[sayingsIndex]._id)
            console.log(temp);
            setData(tagSayings)
            setSayingsIndex(temp<0?0:temp);
        }
        else {
            console.log(sayingsIndex);
            let temp = 0;
            if(tagSayings.length>0) temp = sayings.findIndex((el:any)=> el._id === tagSayings[sayingsIndex]._id)
            console.log(temp);
            setData(sayings);
            setSayingsIndex(temp<0?0:temp);

        }
    },[tagView])

    // useEffect(()=>{
    //     if(tagView){
    //         console.log(sayingsIndex);
    //         console.log(tagSayings);
    //         let temp = tagSayings.findIndex((el:any)=> el.id === sayings[sayingsIndex].id)
    //         console.log(temp);
    //         setSayingsIndex(temp<0?0:temp);
    //     }
    //     else if(tagSayings.length>0) {
    //         console.log(sayingsIndex);
    //         console.log(sayings);
    //         let temp = sayings.findIndex((el:any)=> el.id === tagSayings[sayingsIndex].id)
    //         console.log(temp);
    //         setSayingsIndex(temp<0?0:temp);
    //     }
    // },[data])

    const onClickNav = (inc: number) => {
        setSayingsIndex(sayingsIndex+inc);
    }

    return(
        data && <View style={styles.container}>
            <TopNavbar title="magana"/>
            <Saying data = {data[sayingsIndex]} total={data.length}/>
            <BottomNavbar index={sayingsIndex} length={data.length} onClick={onClickNav}/>
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