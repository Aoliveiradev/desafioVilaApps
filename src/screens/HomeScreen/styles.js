import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageLogo: {
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 60,
    backgroundColor: '#0F3F49',
    borderRadius: 50,
    position: 'absolute',
    bottom: 50,
  },
  textButton: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
