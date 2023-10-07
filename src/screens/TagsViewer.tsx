import { View, StyleSheet} from "react-native"
import {COMMONDIMENSIONS, SCREENDIMENSIONS } from "../constants"
import { state } from "../state"
import { TopNavbar } from "../components/TopNavbar"
import { useSnapshot } from "valtio"
import { Tag } from "../components/Tag"

export const TagsViewer = () => {
    const {tags} = useSnapshot(state)
    return(
        <View style={styles.container}>
            <View style={styles.tags}>
                {tags && tags.map((tag:any)=> <Tag label={tag.name} id={tag._id}/>)}
            </View>
            <TopNavbar title="ire-ire"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"flex-start",
        alignItems:"center",
        width: SCREENDIMENSIONS.vw,
        height: SCREENDIMENSIONS.vh,
    },
    tags:{
        position:"relative",
        flexDirection:"row",
        flexWrap:"wrap",
        paddingTop:SCREENDIMENSIONS.half_vw/10+SCREENDIMENSIONS.vw*(SCREENDIMENSIONS.padding/2)*2 - COMMONDIMENSIONS.borderRadius,
        width: SCREENDIMENSIONS.vw * (1-SCREENDIMENSIONS.padding) 
    }
})