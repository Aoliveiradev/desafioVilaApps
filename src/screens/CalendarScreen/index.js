import {styles} from './styles.js';
import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';

export default function CalendarScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.imageLogo}
          source={require('../../assets/vilaAppsLogo.png')}
        />
      </View>
    </SafeAreaView>
  );
}
