import Colors from "@/constants/Colors"
import React from "react"
import {View, Text, StyleSheet, Animated} from "react-native"
import * as Progress from "react-native-progress"


const PointsSystem = () => {
    return (
        <View>
            <Text style = {{color:"#3B5704"}}>Rank</Text>
                <View style = {styles.progressbar}>
                    <Progress.Bar progress={0.3} width={300} color={"#3B5704"} unfilledColor={"#81B622"}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressbar: {
        height: 50,
        width: "100%",
        alignItems:"center",
        backgroundColor: '#EDFFCC',
    }
  });



export default PointsSystem