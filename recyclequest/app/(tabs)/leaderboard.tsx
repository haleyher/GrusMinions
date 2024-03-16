import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <ScrollView style={styles.board}></ScrollView>
      
    </View>
  );
}

// export function Leaderboard() {
//   return(
//     <ScrollView style={styles.board}>
//       <Text style={styles.boardname}>{database}</Text>
//       <Text style={styles.boardpoints}>200</Text>
//     </ScrollView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFFCC',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  board: {
    backgroundColor: '#3B5704',
    height: 10,
    width: '80%',
    paddingTop: 30
  },
  boardname: {
    flex: 1,
    fontSize: 30
  },
  boardpoints: {
    flex: 1,
    paddingLeft: 20
  }
});

const database = [
  {
    username: "Tim",
    points: "105"
  },
  {
    username: "Haley",
    points: "110"
  },
  {
    username: "JC",
    points: "120"
  },
  {
    username: "Esther",
    points: "50"
  },
  {
    username: "Jacob",
    points: "210"
  },
]