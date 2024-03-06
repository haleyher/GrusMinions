import { StyleSheet, Animated } from 'react-native';
import { Text, View } from '@/components/Themed';
import * as Progress from "react-native-progress";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>


      <Text style={styles.title}>Rank</Text>
      <Text style={styles.pointcount}>250 Points</Text>

        <View style = {styles.progressbar}>
          <Progress.Bar progress={0.33} height={13} width={300} color={"#3B5704"} unfilledColor={"#81B622"}/>
        </View>

      <View style={styles.separator} lightColor="#3B5704" darkColor="#3B5704" />

      <Text style={styles.title}>Points Summary</Text>

      <View style={styles.separator} lightColor="#3B5704" darkColor="#3B5704" />

      <Text style={styles.title}>Recycle Quests</Text>
      <View style={styles.questline}>
        <Text style={styles.quest}>Recycle 10 Cans</Text>
        <Text style={styles.questamount}>9/10</Text>
      </View>
      <View style={styles.questline}>
        <Text style={styles.quest}>Recycle 20 Anything</Text>
        <Text style={styles.questamount}>+100 Points 5/5</Text>
      </View>
      <View style={styles.questline}>
        <Text style={styles.quest}>Recycle 2 Bottles</Text>
        <Text style={styles.questamount}>1/2</Text>
      </View>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#EDFFCC',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 50,
  },
  pointcount:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 50,
  },
  questline:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  quest:{
    paddingTop: 0,
    fontSize: 15,
    fontWeight: 'normal',
    paddingLeft: 50,
  },
  questamount:{
    paddingTop: 0,
    fontSize: 15,
    fontWeight: 'normal',
    paddingRight: 50,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    alignItems: 'center',
  },
  progressbar: {
    height: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#EDFFCC"
  },
});
