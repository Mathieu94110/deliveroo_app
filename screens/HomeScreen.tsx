import { View, SafeAreaView, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/Categories/Categories';
import HeaderTabs from '../components/Header/HeaderTabs';
import SearchBar from '../components/SearchBar/SearchBar';
import RestaurantItems from '../components/RestaurantItems/RestaurantItems';
import { localRestaurants } from '../locales/locales';
import { restaurantData } from '../types/types';
import { getRestaurantsFromYelp } from '../services/businessesService';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [restaurantData, setRestaurantData] = useState<any>(localRestaurants);
  const [city, setCity] = useState('Paris');

  const getRestaurantsOnCity = async () => {
    const response = await getRestaurantsFromYelp(city);
    if (response.ok) {
      const data = await response.json();
      console.log(data.businesses);
      setRestaurantData(data.businesses);
    } else {
      Alert.alert(`Problème lors du chargement des données`, `${response.statusText}`);
    }
  };

  useEffect(() => {
    getRestaurantsOnCity();
  }, []);

  return (
    <SafeAreaView className="bg-slate-300 flex-1">
      <View className="bg-white p-4">
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
