import { useState } from "react";
import { Pressable, View, StyleSheet } from "react-native"
import { COLORS, COMMONDIMENSIONS, SCREENDIMENSIONS } from "../constants"
import { ImageIcon } from "./ImageIcon"
import { setSayingsIndex, setScreen, setTagView} from "../state";

export const HomeButton = () => {
    const [pressed, setPressed] = useState(false);
    return(
        <Pressable onPressIn={()=>setPressed(true)} onPressOut={()=>{setPressed(false);; setScreen(0); setTagView(false); setSayingsIndex(0)}}>
            <View style={[styles.container, pressed?styles.containerPressed:null]}>
                <ImageIcon image= "icon-cross" type="imageHome"/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        shadowOffset: {width: -0.5, height: 1},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
        elevation: 1, 
        padding:COMMONDIMENSIONS.borderRadius,
        borderRadius: COMMONDIMENSIONS.borderRadius,
        backgroundColor:"#fff",
    },
    containerPressed: {
        backgroundColor:COLORS.primaryLight,
        shadowOffset: {width: 0, height: 0},  
        shadowColor: '#171717',  
        shadowOpacity: 0.0,  
        shadowRadius: 0,  
        elevation: 0, 
    }
})