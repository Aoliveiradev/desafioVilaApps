import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    alignSelf: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 80,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  textButton: {
    margin: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
