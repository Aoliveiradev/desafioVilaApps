import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';

console.disableYellowBox = true;
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
