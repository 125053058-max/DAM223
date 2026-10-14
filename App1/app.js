
//ZONA IMPORTACIONES

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludos } from './components/Saludo.js';

// 2 Zona Main (Conmponente o Screens)
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo React Native</Text>
    <image source= {requestAnimationFrame('./assets/wave.png')} ></image>
    <Saludo></Saludo>

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