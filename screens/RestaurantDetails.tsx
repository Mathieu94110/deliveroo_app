import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/RestaurantDetails/About';
import MenuItems from '../components/RestaurantDetails/MenuItems';
import ViewCart from '../components/RestaurantDetails/ViewCart';
import { foods } from '../locales/locales';

export default function RestaurantDetails({ route, navigation }: { route: any; navigation: any }) {
  useEffect(() => {
    console.log(route);
  });
  return (
    <View>
      <About route={route} />
      <Divider className="my-5 w-0.5" />
      <MenuItems restaurantName={route.params.restaurant.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
