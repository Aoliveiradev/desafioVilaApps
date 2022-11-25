import {styles} from './styles.js';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CardComponent from '../../components/Card';
import {Input} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

export default function ChallengeScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [eventDate, setEventDate] = useState('');
  const [eventTittle, setEventTittle] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const navigation = useNavigation();
  const criarEvento = async (eventDate, eventTittle, eventDescription) => {
    const response = await fetch(
      'https://63707eb008218c267e005b81.mockapi.io/api/ajaxCalendarEvents/callendarEvents',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          event_date: eventDate,
          event_tittle: eventTittle,
          event_description: eventDescription,
        }),
      },
    ).then(response => response.json());

    if (response.sucesso) {
      return response.evento;
    }

    return null;
  };
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
            {/*<View style={styles.sectionTittle}>*/}
            {/*  <Text style={styles.sectionTextTittle}>Eventos da Semana</Text>*/}
            {/*</View>*/}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
