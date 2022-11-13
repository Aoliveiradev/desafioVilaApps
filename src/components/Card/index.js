import {styles} from './styles.js';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function CardComponent() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
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
        <View style={styles.crudSection}>
          <FontAwesome5 name={'edit'} size={20} style={styles.crudIconsEdit} />
          <FontAwesome5
            name={'trash'}
            size={20}
            style={styles.crudIconsDelete}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
