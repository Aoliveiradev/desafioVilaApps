import {styles} from './styles.js';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {Input} from '@rneui/base';

export default function CreateScreen() {
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
              navigation.navigate('ChallengeScreen');
            }}
            style={{position: 'absolute', margin: 25}}
          />
        </View>
        <View style={styles.containerSuport}>
          <View style={styles.backgroundDownWhite}>
            <Text style={styles.textTittle}>Crie um Evento</Text>
            <View style={styles.centeredView}>
              <View style={styles.modalContainer}>
                <Input
                  autoFocus={false}
                  onChangeText={newText => {
                    setEventDate(newText);
                  }}
                  label="Data do Evento"
                  leftIcon={{type: 'font-awesome', name: 'calendar'}}
                />
                <Input
                  onChangeText={newText => {
                    setEventTittle(newText);
                  }}
                  label="Titulo do Evento"
                  leftIcon={{type: 'font-awesome5', name: 'flag'}}
                />
                <Input
                  onChangeText={newText => {
                    setEventDescription(newText);
                  }}
                  label="Descrição do Evento"
                  leftIcon={{type: 'font-awesome5', name: 'edit'}}
                />
              </View>
              <TouchableOpacity
                style={styles.ButtonOk}
                onPress={async () => {
                  await criarEvento(eventDate, eventTittle, eventDescription);
                  await navigation.navigate('ChallengeScreen');
                }}>
                <FontAwesome5
                  name={'cloud-upload-alt'}
                  size={25}
                  style={{alignSelf: 'center'}}
                  color={'#0F3F49'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
