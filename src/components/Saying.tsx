import { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { COLORS, COMMONDIMENSIONS, FONTSIZES, SCREENDIMENSIONS } from "../constants"
import { ImageIcon } from "./ImageIcon"

type TagProps = {
    label:string
}
const Tag = ({label}:TagProps) => {
    const [pressed, setPressed] = useState(false);
    return(
        <Pressable onPressIn={()=>setPressed(true)} onPressOut={()=>setPressed(false)}>
            <View style={[styles.tagContainer, pressed?styles.tagContainerPressed:null]}>
                <ImageIcon image="icon-tag" type="imageTag" />
                <Text style={[styles.tagLabel, pressed? styles.tagLabelPressed:null]}>
                    {label}
                </Text>
            </View>
        </Pressable>
    )
}
export const Saying = () => {
    return(
        <View style={styles.container}>
            <View style={styles.infoBar}>
                <Text style={styles.info}>1/200</Text>
                <Text style={styles.info}>zamantakewa</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Gani ya kori ji.</Text>
            </View>
            <View style={styles.tagsContainer}>
                <Tag label="sutura" />
                <Tag label="nasiha" />
                <Tag label="zamantakewa" />
                <Tag label="gaskiya" />
                <Tag label="aboki" />
                <Tag label="wando" />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: SCREENDIMENSIONS.vw,
        height: SCREENDIMENSIONS.vw * 0.6,
        justifyContent:"flex-start",
        alignItems:"center"
    },
    text :{
        fontSize: FONTSIZES.saying,
        fontFamily:"balsamiq-regular",
        textAlign:"center",
        color:COLORS.secondary
    },
    textContainer: {
        backgroundColor:"#fff",
        height: SCREENDIMENSIONS.vw * 0.3,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width: SCREENDIMENSIONS.vw * (1 - SCREENDIMENSIONS.padding),
        padding:SCREENDIMENSIONS.vw * SCREENDIMENSIONS.padding/2,
        marginBottom:SCREENDIMENSIONS.vw * SCREENDIMENSIONS.padding/2,
    },
    tagContainer:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#fff",
        padding:COMMONDIMENSIONS.borderRadius,
        borderRadius:COMMONDIMENSIONS.borderRadius,
        margin:COMMONDIMENSIONS.borderRadius,
        shadowOffset: {width: -0.5, height: 1},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
        elevation: 1, 
    },
    tagContainerPressed:{
        backgroundColor:COLORS.primaryLight,
        shadowOpacity:0,
        elevation:0
    },
    tagsContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
        paddingLeft:SCREENDIMENSIONS.vw * SCREENDIMENSIONS.padding/2,
        paddingRight:SCREENDIMENSIONS.vw * SCREENDIMENSIONS.padding/2,
    },
    tagLabel: {
        color:COLORS.secondary,
        fontFamily:"balsamiq-regular",
        fontSize:FONTSIZES.tag,
        paddingLeft:COMMONDIMENSIONS.borderRadius
    },
    tagLabelPressed: {
        color:COLORS.primary,
    },
    infoBar: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:SCREENDIMENSIONS.vw * (1 - SCREENDIMENSIONS.padding),
    },
    info:{
        fontFamily:"balsamiq-regular",
        fontSize:FONTSIZES.tag,
        borderColor:COLORS.secondary,
        borderWidth:1,
        borderRadius: COMMONDIMENSIONS.borderRadius,
        padding:COMMONDIMENSIONS.borderRadius,
        marginBottom: COMMONDIMENSIONS.borderRadius*2,
        color:COLORS.secondary
    }

})