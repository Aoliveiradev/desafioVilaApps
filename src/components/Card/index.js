import {styles} from './styles.js';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Input} from '@rneui/themed';

export default function CardComponent() {
  const errorImage = require('../../assets/Error.png');
  const deleteMesage = 'TEM CERTEZA QUE DESEJA EXCLUIR O EVENTO ?';

  const [eventDate, setEventDate] = useState('');
  const [eventTittle, setEventTittle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);
  const [isModalEditVisible, setModalEditVisible] = useState(false);
  const [isModalVisibleDelete, setModalVisibleDelete] = useState(false);
  const [isModalVisibleDescription, setModalVisibleDescription] =
    useState(false);
  const [eventId, setEventId] = useState(0);
  const [eventIdEdit, setEventIdEdit] = useState(0);
  const [modalTextError, setModalTextError] = useState(deleteMesage);
  const [modalDeleteImage, setModalDeleteImage] = useState(errorImage);
  const [dayNew, setDayNew] = useState(0);
  const [dayOld, setDayOld] = useState(0);
  const [monthNew, setMonthNew] = useState(0);
  const [monthOld, setMonthOld] = useState(0);
  const [yearNew, setYearNew] = useState(0);
  const [yearOld, setYearOld] = useState(0);
  const [countDownText, setcountDownText] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const countdown = () => {
    const newDate = new Date();

    const newDateSubstring = newDate.toISOString().substring(0, 10);
    const dateOld = eventDate;
    const dateNew = newDateSubstring;

    const [dayOld, monthOld, yearOld] = dateOld.split('/');
    const [yearNew, monthNew, dayNew] = dateNew.split('-');
    console.log('Inicio', eventDate, countDownText);

    setDayNew(dayNew);
    setDayOld(dayOld);
    setMonthNew(monthNew);
    setMonthOld(monthOld);
    setYearNew(yearNew);
    setYearOld(yearOld);
    const days = dayOld - dayNew;
    if (days <= 0) {
      setcountDownText(0);
    } else {
      setcountDownText(days);
    }
    console.log('dayOld: ', dayOld, 'dayNew: ', dayNew);
    console.log('123', countDownText);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const editarEvento = async (
    eventDate,
    eventTittle,
    eventDescription,
    eventIdEdit,
  ) => {
    const response = await fetch(
      'https://63707eb008218c267e005b81.mockapi.io/api/ajaxCalendarEvents/callendarEvents/' +
        eventIdEdit,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          created_at: new Date().toISOString(),
          event_date: eventDate,
          event_tittle: eventTittle,
          event_description: eventDescription,
          event_id: eventIdEdit,
        }),
      },
    ).then(response => response.json());
    console.log('RESPONSE', response);

    if (response.sucesso) {
      return response.evento;
    }

    return null;
  };

  const deleteEvento = async eventId => {
    console.log(eventId);
    const id = eventId;
    const response = await fetch(
      'https://63707eb008218c267e005b81.mockapi.io/api/ajaxCalendarEvents/callendarEvents/' +
        id,
      {
        method: 'DELETE',
      },
    ).then(response => response.json());

    if (response.sucesso) {
      return response.evento;
    }

    return null;
  };
  const getData = async () => {
    try {
      const response = await fetch(
        'https://63707eb008218c267e005b81.mockapi.io/api/ajaxCalendarEvents/callendarEvents/',
      );
      const json = await response.json();
      console.log(json);
      setData(json);
      countdown();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView
        RefreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.scrollView}>
        {data.map((event, index) => {
          return (
            <View key={index} style={styles.container}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisibleDescription(!isModalVisibleDescription);
                  setEventId(event.event_id);
                  setEventDate(event.event_date);
                }}
                style={styles.card}>
                <View style={styles.cardContainer}>
                  <FontAwesome5
                    name={'calendar-day'}
                    size={18}
                    style={styles.cardIconDate}
                  />
                  <View style={styles.cardContainerDate}>
                    <Text style={styles.cardTextDate}>{event.event_date}</Text>
                  </View>
                </View>
                <View style={styles.cardContainer}>
                  <FontAwesome5
                    name={'flag'}
                    size={18}
                    color={'green'}
                    style={styles.cardIconTittle}
                  />
                  <Text style={styles.cardTextTitle}>{event.event_tittle}</Text>
                </View>
                <View style={styles.cardContainerCountDown}>
                  <FontAwesome5
                    name={'clock'}
                    size={18}
                    color={'green'}
                    style={styles.cardIconTittle}
                  />
                  <Text style={styles.cardTextTitle}>{countDownText}</Text>
                </View>
              </TouchableOpacity>
              <Modal
                animationType="fade"
                transparent={true}
                visible={isModalEditVisible}>
                <View style={styles.centeredView}>
                  <View style={styles.modalContainer}>
                    <Input
                      onChangeText={newText => {
                        setEventDate(newText);
                      }}
                      label="Data do Evento"
                      placeholder={eventDate}
                      leftIcon={{type: 'font-awesome', name: 'calendar'}}
                    />
                    <Input
                      onChangeText={newText => {
                        setEventTittle(newText);
                      }}
                      label="Titulo do Evento"
                      placeholder={eventTittle}
                      leftIcon={{type: 'font-awesome5', name: 'flag'}}
                    />
                    <Input
                      onChangeText={newText => {
                        setEventDescription(newText);
                      }}
                      label="Descrição do Evento"
                      placeholder={eventDescription}
                      leftIcon={{type: 'font-awesome5', name: 'edit'}}
                    />

                    <TouchableOpacity
                      style={styles.ButtonOk}
                      onPress={async () => {
                        await editarEvento(
                          eventDate,
                          eventTittle,
                          eventDescription,
                          eventIdEdit,
                        );

                        await getData();
                        setModalEditVisible(!isModalEditVisible);
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
              </Modal>
              <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisibleDelete}>
                <View style={styles.centeredView}>
                  <View style={styles.modalContainer}>
                    <Image
                      source={modalDeleteImage}
                      style={styles.imageModal}
                    />

                    <Text style={styles.modalDeleteText}>{modalTextError}</Text>
                    <View style={styles.confirmSection}>
                      <TouchableOpacity
                        style={styles.ButtonDelete}
                        onPress={async () => {
                          await deleteEvento(eventId);
                          await getData();
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
                          setEventId(0);
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
              </Modal>
              <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisibleDescription}>
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
                        {eventDescription}
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
              </Modal>
              <View style={styles.crudSection}>
                <TouchableOpacity
                  onPress={() => {
                    setEventIdEdit(event.event_id);
                    setEventDate(event.event_date);
                    setEventTittle(event.event_tittle);
                    setEventDescription(event.event_description);
                    setModalEditVisible(!isModalEditVisible);
                  }}>
                  <FontAwesome5
                    name={'edit'}
                    size={20}
                    style={styles.crudIconsEdit}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setEventId(event.event_id);
                    console.log('pqp12312321', eventId);
                    setModalVisibleDelete(!isModalVisibleDelete);
                    setModalDeleteImage(errorImage);
                    setModalTextError(deleteMesage);
                  }}>
                  <FontAwesome5
                    name={'trash'}
                    size={20}
                    style={styles.crudIconsDelete}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
