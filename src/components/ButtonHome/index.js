import {styles} from './styles.js';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ButtonHome(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('');
        }}>
        <FontAwesome5 name={'calendar'} size={20} color={'white'} />
        <Text style={styles.textButton}>CALLENDAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
