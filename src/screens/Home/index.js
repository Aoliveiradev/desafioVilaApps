import styles from './styles.js';
import React from 'react';
import {Image, SafeAreaView, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <View>
        <Image source={require('../../assets/vilaAppsLogo.png')} />
      </View>
    </SafeAreaView>
  );
}
