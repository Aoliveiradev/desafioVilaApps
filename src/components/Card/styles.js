import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  card: {
    alignSelf: 'center',
    width: 300,
    height: 60,
    backgroundColor: 'white',
    borderColor: 'blue',
    flexDirection: 'row',
    borderRadius: 12,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    marginRight: 10,
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
    marginRight: 10,
  },
  cardIconClock: {
    color: '#4682B4',
    alignSelf: 'center',
    marginRight: 10,
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
  cardTextHour: {
    alignSelf: 'center',
    color: '#485162',
    fontWeight: 'bold',
    fontSize: 12,
  },
  crudIconsEdit: {
    color: '#5f6405',
    margin: 5,
    alignSelf: 'center',
  },
  crudIconsDelete: {
    color: 'red',
    margin: 5,
    alignSelf: 'center',
  },
});
