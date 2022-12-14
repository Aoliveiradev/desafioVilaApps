import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3F49',
  },
  backgroundWhite: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
  },
  backgroundUpBlue: {
    width: '100%',
    height: 200,
    backgroundColor: '#0F3F49',
    borderBottomRightRadius: 70,
    padding: '2%',
  },
  containerSuport: {
    width: '50%',
    height: '100%',
    backgroundColor: '#0F3F49',
    justifyContent: 'flex-end',
  },
  backgroundDownWhite: {
    width: '200%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 70,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 40,
  },
  textTittle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 10,
  },
  modalButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
  },

  sectionTittle: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#0F3F49',
    margin: 10,
  },
  sectionTextTittle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },

  iconModalButton: {
    alignSelf: 'center',
  },
  centeredView: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    width: '90%',
    height: 380,
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
  modalInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  ButtonOk: {
    borderWidth: 2,
    borderColor: '#0F3F49',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    color: '#0F3F49',
  },
});
