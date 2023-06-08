import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/RestaurantDetails/About';
import MenuItems from '../components/RestaurantDetails/MenuItems';
import ViewCart from '../components/RestaurantDetails/ViewCart';
import { foods } from '../locales/locales';

export default function RestaurantDetails({ route, navigation }: { route: any; navigation: any }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.restaurant.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
