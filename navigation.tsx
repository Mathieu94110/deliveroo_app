import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurantDetailsScreen from './screens/RestaurantDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';

import Home from './screens/HomeScreen';
function RootNavigation() {
  const Stack = createStackNavigator<AppStackParamList>();
  const screenOptions = {
    headerShown: false,
  };

  type AppStackParamList = {
    Home: undefined;
    RestaurantDetails: undefined;
  };

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
export default RootNavigation;
