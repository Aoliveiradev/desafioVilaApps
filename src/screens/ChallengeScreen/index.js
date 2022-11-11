import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

export default function ChallengeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={require('../../assets/Success.png')}
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <FontAwesome5 name={'calendar'} size={20} color={'white'} />
        <Text style={styles.textButton}>CALLENDAR</Text>
      </TouchableOpacity>
    </View>
  );
}
