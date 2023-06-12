import { View, SafeAreaView, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { Divider } from 'react-native-elements';
import Categories from '../components/Categories/Categories';
import SearchBar from '../components/SearchBar/SearchBar';
import RestaurantItems from '../components/RestaurantDetails/RestaurantItems';
import { getRestaurantsFromYelp } from '../services/businessesService';
import { restaurantData, HomeProps } from '../types/types';

const Home = ({ navigation }: HomeProps) => {
  const [restaurantData, setRestaurantData] = useState<restaurantData[]>([]);
  const [city, setCity] = useState<string>('Paris');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRestaurantsOnCity = async () => {
    setIsLoading(true);
    const response = await getRestaurantsFromYelp(city);
    if (response.ok) {
      const data = await response.json();
      setRestaurantData(data.businesses);
      setIsLoading(false);
    } else {
      Alert.alert(`Problème lors du chargement des données`, `${response.statusText}`);
    }
  };

  useEffect(() => {
    getRestaurantsOnCity();
  }, [city]);

  return (
    <>
      {isLoading ? (
        <View className="w-full h-full flex flex-col justify-center items-center">
          <ActivityIndicator size="large" color="#3399cc" />
        </View>
      ) : (
        <SafeAreaView className="bg-sky-400 flex-1">
          <View className="bg-white p-4">
            <SearchBar cityHandler={setCity} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
          </ScrollView>
          <Divider width={1} />
        </SafeAreaView>
      )}
    </>
  );
};

export default Home;
