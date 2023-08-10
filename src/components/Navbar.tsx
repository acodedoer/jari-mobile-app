import { View, StyleSheet, Text } from "react-native"
import { SCREENDIMENSIONS } from "../constants"

type NavbarProps = {
    position: string,
    children: JSX.Element[]
}
export const Navbar = ({position, children}:NavbarProps) => {
    return(
        <View style={[styles.container, styles[position]]}>
            {children}
        </View>
    )
}

const styles:any = StyleSheet.create({
    container:{
        position:"absolute",
        
        flexDirection:"row",
        justifyContent:"space-between",  
        alignItems:"center",
        width:SCREENDIMENSIONS.vw * (1-SCREENDIMENSIONS.padding)      
    },
    top:{
        top:SCREENDIMENSIONS.vw*(SCREENDIMENSIONS.padding/2)
    },
    bottom:{
        bottom:SCREENDIMENSIONS.vw*(SCREENDIMENSIONS.padding/2)
    }
})