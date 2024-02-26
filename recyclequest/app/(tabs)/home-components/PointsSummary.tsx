import Colors from "@/constants/Colors"
import React from "react"
import {View, Text, StyleSheet, Animated} from "react-native"
import * as Progress from "react-native-progress"

const PointsSummary = () => {
    return (
        <View>
            <Text style = {{color:"#3B5704"}}>Points Summary</Text>
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

export default PointsSummary