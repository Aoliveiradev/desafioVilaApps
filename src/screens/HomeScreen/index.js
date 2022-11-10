import React from 'react';
import {View} from 'react-native';
import {styles} from './styles.js';
import CalendarScreen from '../CalendarScreen';
import ButtonHome from '../../components/ButtonHome';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CalendarScreen />
      <ButtonHome />
    </View>
  );
}
