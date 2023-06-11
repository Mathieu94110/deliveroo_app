import React from 'react';
import HomeScreen from './screens/Home';
import RestaurantDetailsScreen from './screens/RestaurantDetails';
import OrderCompletedScreen from './screens/OrderCompleted';
import InformationsScreen from './screens/Informations';
import CoordinatesScreen from './screens/Coordinates';
import SchedulesScreen from './screens/Schedules';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store/store';
import { AppStackParamList } from './types/types';

function RootNavigation() {
  const Stack = createStackNavigator<AppStackParamList>();
  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen} />
            <Stack.Screen name="OrderCompleted" component={OrderCompletedScreen} />
            <Stack.Screen name="Informations" component={InformationsScreen} />
            <Stack.Screen name="Coordinates" component={CoordinatesScreen} />
            <Stack.Screen name="Schedules" component={SchedulesScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </ReduxProvider>
  );
}
export default RootNavigation;
