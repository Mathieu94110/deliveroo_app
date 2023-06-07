import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurantDetailsScreen from './screens/RestaurantDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store/store';

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
    <ReduxProvider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="RestaurantDetails" component={RestaurantDetailsScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    </ReduxProvider>
  );
}
export default RootNavigation;
