import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  card: {
    alignSelf: 'center',
    width: '95%',
    height: 60,
    backgroundColor: 'white',
    borderColor: 'blue',
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  cardContainer: {
    flexDirection: 'row',
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
    fontSize: 12,
  },
  cardTextTitle: {
    alignSelf: 'center',
    color: '#485162',
    fontWeight: 'bold',
    fontSize: 12,
  },
  crudSection: {
    flexDirection: 'row',
    paddingHorizontal: 10,
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
});
