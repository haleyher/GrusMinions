import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import PointsSystem from './home-components/PointsSystem';
import PointsSummary from './home-components/PointsSummary';
import RecycleQuests from './home-components/RecycleQuests';


export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PointsSystem/>
      <PointsSummary/>
      <RecycleQuests/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFFCC',
  }
});
