import { StyleSheet, Animated } from 'react-native';
import { Text, View } from '@/components/Themed';
import * as Progress from "react-native-progress";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rank</Text>
        <View style = {styles.progressbar}>
          <Progress.Bar progress={0.3} width={300} color={"#3B5704"} unfilledColor={"#81B622"}/>
        </View>
        <View style={styles.separator} lightColor="#3B5704" darkColor="#3B5704" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFFCC',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
  },
  progressbar: {
    height: 50,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#EDFFCC"
  }
});
