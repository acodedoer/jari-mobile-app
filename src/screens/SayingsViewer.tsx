import { View, StyleSheet } from "react-native"
import { Saying } from "../components/Saying"
import { SCREENDIMENSIONS } from "../constants"

export const SayingsViewer = () => {
    return(
        <View style={styles.container}>
            <Saying/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width: SCREENDIMENSIONS.vw,
        height: SCREENDIMENSIONS.vh,
    }
})