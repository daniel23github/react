import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import Upper from './components/Upper'
import { estilos} from './estilos/app.module'

export default function App() {
  return (
    <View style={estilos.container}>
      <Upper style={{color: 'black'}}>Regaae</Upper>
      <View style={estilos.red}></View>
      <View style={estilos.yellow}><Image style={estilos.logo} source={require('./imagens/regaae.png')}/></View>
      <View style={estilos.green}></View>
    </View>
  );
}

