import React, { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { COLORS, COMMONDIMENSIONS, FONTSIZES, SCREENDIMENSIONS } from "../constants"
import { ImageIcon } from "./ImageIcon"
import { Tag } from "./Tag"
import { state, setScreen, setTagView } from "../state"
import { useSnapshot } from "valtio"
import Ionicons from '@expo/vector-icons/Ionicons';

export const Saying = ({data, total, tag}:any) => {
    const {tagView, selectedTag, sayingsIndex} = useSnapshot(state)
    return(
        data?<View style={styles.container}>
            <View style={styles.infoBar}>
                <Text style={styles.info}>{`${sayingsIndex+1}/${total}`}</Text>
                {tagView?
                <View>
                    <Ionicons name="ios-close-circle-outline" size={8} style={{position:"absolute", top:-2, right:-2, zIndex:900}} color="white" />
                    <Ionicons onPress={()=>setTagView(false)} name="close-circle" size={8} style={{position:"absolute", top:-2, right:-2, zIndex:1000}} color="#11263c" />
                    <Text style={styles.info}>{selectedTag}</Text>
                </View>:null}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{data.saying}</Text>
            </View>
            <View style={styles.tagsContainer}>
                {data.tagDetails.map(({name, _id}:any)=>
                    <Tag label={name} id={_id} />
                )}
            </View>
        </View>
        :<View></View>
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