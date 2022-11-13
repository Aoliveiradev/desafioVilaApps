import {styles} from './styles.js';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CardComponent from '../../components/Card';

export default function ChallengeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundWhite}>
        <View style={styles.backgroundUpBlue}>
          <Text style={styles.textTittle}>Crie um Evento</Text>
          <TouchableOpacity style={styles.modalButton}>
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
            <View style={styles.sectionTittle}>
              <Text style={styles.sectionTextTittle}>Eventos da Semana</Text>
            </View>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
