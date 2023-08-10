import { View, StyleSheet, Text } from "react-native"
import { FONTSIZES, SCREENDIMENSIONS } from "../constants"
import { Navbar } from "./Navbar"
import { NavButton } from "./NavButton"


export const BottomNavbar = () => {
    return(
       <Navbar position="bottom">
            <NavButton label="Baya" direction="left" icon={"icon-previous"}/>
            <NavButton label="Gaba" direction="right" icon={"icon-next"}/>
        </Navbar>
    )
}
