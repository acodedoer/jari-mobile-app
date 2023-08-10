import { View, StyleSheet} from "react-native"
import {SCREENDIMENSIONS } from "../constants"
import { TopNavbar } from "../components/TopNavbar"

export const FavouritesViewer = () => {
    return(
        <View style={styles.container}>
            <TopNavbar title="zaɓaɓɓu"/>
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
    }
})