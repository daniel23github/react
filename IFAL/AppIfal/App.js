import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Img2 from './components/Img2'

export default function App() {
  return (
    <View style={styles.container}>
      <Img2 src='https://th.bing.com/th/id/OIP.OKA8iuxLlUoHgLvV8ueJ9QHaE8?pid=ImgDet&rs=1' tipo='gato'></Img2>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
