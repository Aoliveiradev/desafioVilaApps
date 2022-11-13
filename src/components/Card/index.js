import {styles} from './styles.js';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import sucessImage from '../../assets/Success.png';
import {Input} from '@rneui/themed';
import {ReactNativeModal} from 'react-native-modal';
import errorImage from '../../assets/Error.png';

export default function CardComponent() {
  const sucessImage = require('../../assets/Success.png');
  const sucessMesage = 'EVENTO EXCLUIDO COM SUCESSO !!!';
  const errorImage = require('../../assets/Error.png');
  const deleteMesage = 'TEM CERTEZA QUE DESEJA EXCLUIR O EVENTO ?';

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleDelete, setModalVisibleDelete] = useState(false);
  const [isModalVisibleDescription, setModalVisibleDescription] =
    useState(false);
  const [modalTextError, setModalTextError] = useState(deleteMesage);
  const [modalDeleteImage, setModalDeleteImage] = useState(errorImage);

  // const closeModal = setTimeout(() => {
  //   setModalVisibleDelete(false);
  // }, 10000);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setModalVisibleDescription(!isModalVisibleDescription);
        }}
        style={styles.card}>
        <View style={styles.cardContainer}>
          <FontAwesome5
            name={'calendar-day'}
            size={18}
            style={styles.cardIconDate}
          />
          <View style={styles.cardContainerDate}>
            <Text style={styles.cardTextDate}>Segunda</Text>
            <Text style={styles.cardTextDate}> 01/Out</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FontAwesome5
            name={'flag'}
            size={18}
            color={'green'}
            style={styles.cardIconTittle}
          />
          <Text style={styles.cardTextTitle}>Agendamento do seguro</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.crudSection}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!isModalVisible);
          }}>
          <FontAwesome5 name={'edit'} size={20} style={styles.crudIconsEdit} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setModalVisibleDelete(!isModalVisibleDelete);
            setModalDeleteImage(errorImage);
            setModalTextError(deleteMesage);
            // closeModal();
          }}>
          <FontAwesome5
            name={'trash'}
            size={20}
            style={styles.crudIconsDelete}
          />
        </TouchableOpacity>
      </View>
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
      <ReactNativeModal
        isVisible={isModalVisibleDelete}
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <View style={styles.centeredView}>
          <View style={styles.modalContainer}>
            <Image source={modalDeleteImage} style={styles.imageModal} />

            <Text style={styles.modalDeleteText}> {modalTextError} </Text>
            <View style={styles.confirmSection}>
              <TouchableOpacity
                style={styles.ButtonDelete}
                onPress={() => {
                  setModalDeleteImage(sucessImage);
                  setModalTextError(sucessMesage);
                  setModalVisibleDelete(!isModalVisibleDelete);
                }}>
                <FontAwesome5
                  name={'thumbs-up'}
                  size={25}
                  style={{alignSelf: 'center'}}
                  color={'#16600f'}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.ButtonCancelDelete}
                onPress={() => {
                  setModalVisibleDelete(!isModalVisibleDelete);
                }}>
                <FontAwesome5
                  name={'thumbs-down'}
                  size={25}
                  style={{alignSelf: 'center'}}
                  color={'#e80000'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ReactNativeModal>
      <ReactNativeModal
        isVisible={isModalVisibleDescription}
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <View style={styles.centeredView}>
          <View style={styles.modalContainer}>
            <View
              style={{
                height: '80%',
                justifyContent: 'flex-start',
                top: 20,
              }}>
              <Text style={styles.tittleDescricao}>Descrição</Text>
              <Text style={styles.textDescricao}>
                AUYEGAYUEYUAGEYUGAYEUGAYUGEUYAGEGAEGUYAGEYUGAEYUGAYUEGYUAGEYUAGYUEGAUYGEYAUEYUGAaueaueiuaheuiaeuiaeuiaeuiauieauiheuiaehYUEGAUYEUYAEYAGEYUGAYUEGUYGEUYEYUAEUYAUYEAUY
              </Text>
            </View>
            <TouchableOpacity
              style={styles.ButtonClose}
              onPress={() => {
                setModalVisibleDescription(!isModalVisibleDescription);
              }}>
              <FontAwesome5
                name={'times'}
                size={25}
                style={{alignSelf: 'center'}}
                color={'red'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
}
