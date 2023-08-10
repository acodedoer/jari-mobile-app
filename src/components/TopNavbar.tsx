import { HomeButton } from "./HomeButton"
import { Navbar } from "./Navbar"
import {Text, StyleSheet} from "react-native"
import { FONTSIZES } from "../constants"

type TopNavbarProps = {
    title: string
}

export const TopNavbar = ({title}: TopNavbarProps) => {
    return(
        <Navbar position="top">
            <HomeButton/>
            <Text style={styles.title}>{title} </Text>
        </Navbar>
    )
}

const styles = StyleSheet.create({
    title:{
        fontFamily:"balsamiq-regular",
        fontSize:FONTSIZES.tag*1.5,
    }
})