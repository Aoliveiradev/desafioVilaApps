import {styles} from './styles.js';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CardComponent from '../../components/Card';
import {ReactNativeModal} from 'react-native-modal';
import {Input} from '@rneui/themed';

export default function ChallengeScreen() {
  const sucessImage = require('../../assets/Success.png');
  const errorImage = require('../../assets/Error.png');

  const [isModalVisible, setModalVisible] = useState(false);
  const [conclusionImage, setConclusionImage] = useState(sucessImage);
  const [modalError, setModalError] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundWhite}>
        <View style={styles.backgroundUpBlue}>
          <Text style={styles.textTittle}>Crie um Evento</Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!isModalVisible);
            }}
            style={styles.modalButton}>
            <FontAwesome5
              name={'calendar-week'}
              style={styles.iconModalButton}
              size={30}
            />
          </TouchableOpacity>
          <ReactNativeModal
            isVisible={isModalVisible}
            backdropOpacity={0.8}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={600}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}>
            <View style={styles.centeredView}>
              <View style={styles.modalContainer}>
                <Input
                  label="Data do Evento"
                  placeholder="01/05/2022"
                  mask="00/00/0000"
                  leftIcon={{type: 'font-awesome', name: 'calendar'}}
                />
                <Input
                  label="Titulo do Evento"
                  placeholder="Titulo do Evento"
                  leftIcon={{type: 'font-awesome5', name: 'flag'}}
                />
                <Input
                  label="Descrição do Evento"
                  placeholder="Descrição do Evento"
                  leftIcon={{type: 'font-awesome5', name: 'edit'}}
                />

                <TouchableOpacity
                  style={styles.ButtonOk}
                  onPress={() => {
                    setModalVisible(!isModalVisible);
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
          </ReactNativeModal>
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
