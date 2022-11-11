import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CalendarScreen from '../CalendarScreen';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={require('../../assets/vilaAppsLogo.png')}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('pqp123');
          navigation.navigate(CalendarScreen);
        }}>
        <FontAwesome5 name={'calendar'} size={20} color={'white'} />
        <Text style={styles.textButton}>CALLENDAR</Text>
      </TouchableOpacity>
    </View>
  );
}
