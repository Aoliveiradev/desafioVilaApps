import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F3F49',
  },
  backgroundWhite: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d9d9d9',
    justifyContent: 'flex-start',
  },
  backgroundUpBlue: {
    width: '100%',
    height: 200,
    backgroundColor: '#0F3F49',
    borderBottomRightRadius: 70,
    padding: '10%',
  },
  containerSuport: {
    width: '50%',
    height: '100%',
    backgroundColor: '#0F3F49',
    justifyContent: 'flex-end',
  },
  backgroundDownWhite: {
    flexGrow: 1,
    width: '200%',
    height: '100%',
    backgroundColor: '#d9d9d9',
    borderTopLeftRadius: 70,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
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
});
