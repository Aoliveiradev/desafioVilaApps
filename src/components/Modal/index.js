import {styles} from './styles.js';
import React, {useState} from 'react';
import {Button, Image, Modal, Text, TouchableOpacity, View} from 'react-native';

export default function ModalComponent() {
  const sucessImage = require('../../assets/Success.png');
  const errorImage = require('../../assets/Error.png');

  const [isModalVisible, setModalVisible] = useState(false);
  const [conclusionImage, setConclusionImage] = useState(sucessImage);
  const [modalError, setModalError] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{flex: 1, alignSelf: 'center'}}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal animationType="fancy" transparent={true} visible={isModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.buttonOpen}>
            <Image style={styles.imageModal} source={conclusionImage} />
            <Text style={styles.modalText}>{modalError}</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!isModalVisible);
              }}>
              <Text style={styles.ButtonOk}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
