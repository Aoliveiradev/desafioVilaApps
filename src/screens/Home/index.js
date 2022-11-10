import {styles} from './styles.js';
import React from 'react';
import {Image, SafeAreaView, useColorScheme, View} from 'react-native';

export default function HomeScreen() {
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
