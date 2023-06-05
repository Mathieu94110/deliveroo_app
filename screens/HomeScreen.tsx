import { View, SafeAreaView, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/Categories/Categories';
import HeaderTabs from '../components/Header/HeaderTabs';
import SearchBar from '../components/SearchBar/SearchBar';
import RestaurantItems from '../components/RestaurantItems/RestaurantItems';
import { localRestaurants } from '../locales/locales';
import { restaurantData } from '../types/types';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [restaurantData, setRestaurantData] = useState<restaurantData[]>(localRestaurants);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-slate-300 flex-1">
      <View className="bg-white p-4">
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
