import { ActivityIndicator, Alert, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { useEffect, useState } from 'react';
import About from '../components/RestaurantDetails/About';
import MenuItems from '../components/RestaurantDetails/MenuItems';
import ViewCart from '../components/RestaurantDetails/ViewCart';
import { foods } from '../locales/locales';
import { getRestaurantInfo } from '../services/businessesService';
import { RestaurantDetailsProps, restaurantData } from '../types/types';

export default function RestaurantDetails({
  route,
  navigation,
}: {
  route: RestaurantDetailsProps;
  navigation: RestaurantDetailsProps;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [restaurantInfos, setRestaurantInfos] = useState<restaurantData | null>(null);

  const getRestaurantById = async (id: string) => {
    setIsLoading(true);
    const response = await getRestaurantInfo(id);
    if (response.ok) {
      const data = await response.json();
      setRestaurantInfos(data);
      setIsLoading(false);
    } else {
      Alert.alert(`Problème lors du chargement des données`, `${response.statusText}`);
    }
  };
  useEffect(() => {
    getRestaurantById(route.params.restaurantId);
  }, [route.params.restaurantId]);

  return (
    <>
      {restaurantInfos && !isLoading ? (
        <View>
          <About infos={restaurantInfos} navigation={navigation} />
          <Divider width={1.8} style={{ marginVertical: 20 }} />
          <MenuItems restaurantName={restaurantInfos?.name} foods={foods} hideCheckbox={false} />
          <ViewCart navigation={navigation} />
        </View>
      ) : (
        <View className="w-full h-full flex items-center justify-center">
          <ActivityIndicator size="large" color="#3399cc" />
        </View>
      )}
    </>
  );
}
