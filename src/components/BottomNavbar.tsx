import { View, StyleSheet, Text } from "react-native"
import { FONTSIZES, SCREENDIMENSIONS } from "../constants"
import { Navbar } from "./Navbar"
import { NavButton } from "./NavButton"


export const BottomNavbar = ({index, length, onClick}:any) => {
    return(
       <Navbar position="bottom">
            {index>0?<NavButton label="Baya" direction="left" icon={"icon-previous"} onClick = {()=>onClick(-1)}/>:<View></View>}
            {index<length-1?<NavButton label="Gaba" direction="right" icon={"icon-next"} onClick = {()=>onClick(1)}/>:<View></View>}
            
        </Navbar>
    )
}
