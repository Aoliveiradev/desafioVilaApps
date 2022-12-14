import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  buttonEdit: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  scrollView: {
    width: '100%',
  },
  card: {
    alignSelf: 'center',
    width: 280,
    height: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.58,
    shadowRadius: 56.0,
    elevation: 5,
  },

  cardContainer: {
    flexDirection: 'row',
  },
  cardContainerCountDown: {
    flexDirection: 'row',
    marginLeft: 15,
    justifyContent: 'center',
  },
  cardContainerDate: {
    flexDirection: 'column',
  },
  cardIconDate: {
    color: '#4682B4',
    alignSelf: 'center',
    marginRight: 10,
  },
  cardIconTittle: {
    color: '#4682B4',
    alignSelf: 'center',
    marginRight: 5,
  },
  cardTextDate: {
    alignSelf: 'center',
    color: '#485162',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 20,
  },
  cardTextTitle: {
    alignSelf: 'center',
    color: '#485162',
    fontWeight: 'bold',
    fontSize: 15,
  },
  crudSection: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  crudIconsEdit: {
    marginRight: 15,
    color: '#5f6405',
    alignSelf: 'center',
  },
  crudIconsDelete: {
    color: 'red',
    alignSelf: 'center',
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
    backgroundColor: 'transparent',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    width: '70%',
    height: 380,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#7c7c7c',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 14,
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
  modalDeleteText: {
    fontSize: 14,
    color: 'black',
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
  confirmSection: {
    width: '80%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 30,
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
  ButtonClose: {
    borderWidth: 2,
    borderColor: '#e80000',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  ButtonDelete: {
    borderWidth: 3,
    borderColor: '#16600f',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  ButtonCancelDelete: {
    borderWidth: 2,
    borderColor: '#e80000',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  tittleDescricao: {
    alignSelf: 'center',
    fontSize: 30,
    color: '#0F3F49',
    fontWeight: 'bold',
    marginVertical: 25,
  },
  textDescricao: {
    textAlign: 'justify',
    alignSelf: 'center',
    fontSize: 14,
    color: 'black',
  },
});
