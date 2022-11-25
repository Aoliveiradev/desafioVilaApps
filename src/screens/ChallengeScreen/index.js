import {styles} from './styles.js';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CardComponent from '../../components/Card';
import {useNavigation} from '@react-navigation/native';

export default function ChallengeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundWhite}>
        <View style={styles.backgroundUpBlue}>
          <FontAwesome5
            name={'arrow-left'}
            size={25}
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
            style={{position: 'absolute', margin: 25}}
          />
          <Text style={styles.textTittle}>Crie um Evento</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateScreen');
            }}
            style={styles.modalButton}>
            <FontAwesome5
              name={'calendar-week'}
              style={styles.iconModalButton}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerSuport}>
          <View style={styles.backgroundDownWhite}>
            <View style={styles.sectionTittle}>
              <Text style={styles.sectionTextTittle}>Eventos do Dia</Text>
            </View>
            <CardComponent />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
