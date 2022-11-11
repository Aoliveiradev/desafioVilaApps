import HomeScreen from './screens/HomeScreen';
import CalendarScreen from './screens/CalendarScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CalendarScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
