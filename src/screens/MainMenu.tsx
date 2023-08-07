import { View, Text, StyleSheet } from "react-native";
import { ImageIcon } from "../components/ImageIcon";
import { LargeButton } from "../components/LargeButton";
import { COLORS,SCREENDIMENSIONS } from "../constants";
import { FONTSIZES } from "../constants/dimensions";

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
                <LargeButton label={"magana"} icon={<ImageIcon image={"icon-parrot"}/>}/>
            </View>
            <View style={[styles.buttonRContainer,styles.buttonContainer]}>
                <LargeButton label={"ire-ire"} icon={<ImageIcon image={"icon-tag"}/>}/>
            </View>
            <View style={[styles.buttonLContainer,styles.buttonContainer]}>
                <LargeButton label={"zababbu"} icon={<ImageIcon image={"icon-saved"}/>}/>
            </View>
            <View style={[styles.buttonRContainer,styles.buttonContainer]}>
                <LargeButton label={"bayanin mu"} icon={<ImageIcon image={"icon-speaker"}/>}/>
            </View>
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
    paddingBottom: SCREENDIMENSIONS.half_vw *0.15
  },
  buttonsContainer:{
    height:SCREENDIMENSIONS.vw,
    width:SCREENDIMENSIONS.vw,
    flexDirection:"row",
    flexWrap:"wrap",
  },
  buttonContainer:{
    height:SCREENDIMENSIONS.half_vw *0.8,
    width:SCREENDIMENSIONS.half_vw,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:(SCREENDIMENSIONS.half_vw *0.2)/1.5,
  },
  buttonRContainer:{
    paddingRight:(SCREENDIMENSIONS.half_vw *0.2)/3
  },
  buttonLContainer:{
    paddingLeft:(SCREENDIMENSIONS.half_vw *0.2)/3
  }
})