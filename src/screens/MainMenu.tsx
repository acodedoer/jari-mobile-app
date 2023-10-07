import { View, Text, StyleSheet } from "react-native";
import { LargeButton } from "../components/LargeButton";
import { COLORS,SCREENDIMENSIONS } from "../constants";
import { FONTSIZES, LARGEBTNDIMENSIONS } from "../constants/dimensions";
import { useSnapshot } from "valtio/react";
import { setScreen, state } from "../state";

export const MainMenu = () => {
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>j</Text>
            <Text style={styles.title_}>a</Text>
            <Text style={styles.title}>ri</Text>
            </View>

            <View style={styles.buttonsContainer}>
            <View style={[styles.buttonLContainer,styles.buttonContainer]}>
                <LargeButton label={"magana"} callback={()=>setScreen(1)} icon={"icon-parrot"}/>
            </View>
            <View style={[styles.buttonRContainer,styles.buttonContainer]}>
                <LargeButton label={"ire-ire"}  callback={()=>setScreen(2)} icon={"icon-tag"}/>
            </View>
            {/* <View style={[styles.buttonLContainer,styles.buttonContainer]}>
                <LargeButton label={"zababbu"}  callback={()=>setScreen(3)} icon={"icon-saved"}/>
            </View>
            <View style={[styles.buttonRContainer,styles.buttonContainer]}>
                <LargeButton label={"bayanin mu"}  callback={()=>setScreen(4)} icon={"icon-speaker"}/>
            </View> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    width:SCREENDIMENSIONS.vw,
    height:SCREENDIMENSIONS.vh,
    alignItems:"center",
    justifyContent:"center",
  },
  title:{
    fontFamily:"balsamiq-bold",
    fontSize:FONTSIZES.title,
    color:COLORS.secondary
  },
  title_:{
    fontFamily:"balsamiq-bold",
    fontSize:FONTSIZES.title,
    color:COLORS.primary
  },
  titleContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    width:SCREENDIMENSIONS.vw,
    paddingBottom: SCREENDIMENSIONS.half_vw * SCREENDIMENSIONS.padding
  },
  buttonsContainer:{
    height:SCREENDIMENSIONS.vw,
    width:SCREENDIMENSIONS.vw,
    flexDirection:"row",
    flexWrap:"wrap",
  },
  buttonContainer:{
    height:SCREENDIMENSIONS.half_vw *(1-LARGEBTNDIMENSIONS.offset),
    width:SCREENDIMENSIONS.half_vw,
    justifyContent:"center",
    alignItems:"center",
    paddingBottom:LARGEBTNDIMENSIONS.offset/1.5,
  },
  buttonRContainer:{
    paddingRight:LARGEBTNDIMENSIONS.offset/3
  },
  buttonLContainer:{
    paddingLeft:LARGEBTNDIMENSIONS.offset/3
  }
})