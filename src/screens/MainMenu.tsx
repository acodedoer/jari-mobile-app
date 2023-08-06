import { View, Text, StyleSheet } from "react-native";
import { ImageIcon } from "../components/ImageIcon";
import { LargeButton } from "../components/LargeButton";
import { COLORS, DIMENSIONS } from "../constants";

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
    width:DIMENSIONS.vw,
    height:DIMENSIONS.vh,
    alignItems:"center",
    justifyContent:"center",
  },
  title:{
    fontFamily:"balsamiq-bold",
    fontSize:DIMENSIONS.vw/5,
    color:COLORS.secondary
  },
  title_:{
    fontFamily:"balsamiq-bold",
    fontSize:DIMENSIONS.vw/5,
    color:COLORS.primary
  },
  titleContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    width:DIMENSIONS.vw,
    paddingBottom: DIMENSIONS.half_vw *0.15
  },
  buttonsContainer:{
    height:DIMENSIONS.vw,
    width:DIMENSIONS.vw,
    flexDirection:"row",
    flexWrap:"wrap",
  },
  buttonContainer:{
    height:DIMENSIONS.half_vw *0.8,
    width:DIMENSIONS.half_vw,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:(DIMENSIONS.half_vw *0.2)/1.5,
  },
  buttonRContainer:{
    paddingRight:(DIMENSIONS.half_vw *0.2)/3
  },
  buttonLContainer:{
    paddingLeft:(DIMENSIONS.half_vw *0.2)/3
  }
})