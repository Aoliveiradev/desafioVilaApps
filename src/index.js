import React from 'react';
import HomeScreen from './screens/Home';
import ButtonHome from './components/ButtonHome';
import {View} from 'react-native';
import {styles} from './styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <ButtonHome />
    </View>
  );
}
