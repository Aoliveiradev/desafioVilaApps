import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonOpen: {
    backgroundColor: '#ffffff',
    width: '80%',
    height: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#007aff',
    shadowOffset: {
      width: 5,
      height: 6,
    },
  },
  imageModal: {
    alignSelf: 'center',
  },
  modalText: {
    fontSize: 14,
    color: '#007aff',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 15,
  },
  ButtonOk: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    backgroundColor: '#007AFF',
    color: '#FFF',
  },
});
