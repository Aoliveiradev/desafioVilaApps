import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        source={require('../../assets/vilaAppsLogo.png')}
      />
      <Text style={{color: 'black', margin: 5, textAlign: 'justify'}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            margin: 10,
            color: 'black',
          }}>
          Crie um aplicativo em React Native com os seguintes requisitos: {'\n'}
        </Text>
        Um aplicativo de contagem regressiva em dias para determinada atividade.
        O usuário poderá criar um evento e colocar a quantidade de dias até o
        evento ocorrer, ou poderá colocar a data do evento (o aplicativo deverá
        aceitar as duas formas). {'\n'}
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Versão do aplicativo: {'\n'}
        </Text>
        <Text> Maior ou igual a 0.6 {'\n'}</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Aplicativo deverá conter: {'\n'}
        </Text>
        - Modal para criação do evento (deverá ter entradas de título do evento,
        quantidade de dias ou data do evento e descrição do evento); - Lista dos
        eventos e da quantidade de dias restantes até a realização do mesmo; -
        Botão para excluir um evento.{'\n'}
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Adicionais (opcional):{'\n'}
        </Text>
        - Layout e experiência do usuário agradáveis; - Adicionar navegação ao
        aplicativo (de preferência React Navigation).
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ChallengeScreen');
        }}>
        <FontAwesome5 name={'umbrella'} size={20} color={'white'} />
        <Text style={styles.textButton}>CHALLENGE</Text>
      </TouchableOpacity>
    </View>
  );
}
