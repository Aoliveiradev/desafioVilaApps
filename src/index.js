import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './screens/Home';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <HomeScreen />;
}
