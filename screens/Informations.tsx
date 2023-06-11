import React, { useEffect, useState } from 'react';
import { RestaurantDetailsProps, restaurantData } from '../types/types';
import { ActivityIndicator, Button, Image, Text, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const Informations = ({
  route,
  navigation,
}: {
  route: RestaurantDetailsProps;
  navigation: RestaurantDetailsProps;
}) => {
  const [informations, setInformations] = useState<Partial<restaurantData | null>>(null);
  useEffect(() => {
    console.log(route.params.data);
    setInformations(route.params.data);
  }, [route.params.data]);
  return (
    <View className="w-full h-full p-4">
      <View className="w-32 my-4 flex flex-row">
        <ArrowLeftIcon color="gray" size={30} onPress={() => navigation.goBack()} />
      </View>
      {informations ? (
        <View>
          <Image source={informations.image_url} className="w-full h-44" />
          <Text className="p-3 text-lg bg-sky-400 border border-black">
            <Text className="font-semibold text-white">Nom </Text>
            <Text className="font-semibold">{informations.name}</Text>
          </Text>
          <Text className="p-3 text-lg bg-sky-400 border border-black">
            <Text className="font-semibold  text-white">Alias </Text>
            <Text className="font-semibold">{informations.alias}</Text>
          </Text>
          <Text className="p-3 text-lg bg-sky-400 border border-black">
            <Text className="font-semibold  text-white">Categories </Text>
            <Text className="font-semibold">
              {informations.categories.map((c: { alias: string; title: string }) => c.title)}
            </Text>
          </Text>
          <Text className="p-3 text-lg bg-sky-400 border border-black">
            <Text className="font-semibold  text-white">Évaluation/5 </Text>
            <Text className="font-semibold">{informations.rating}</Text>
          </Text>
          <Text className="p-3 text-lg bg-sky-400 border border-black">
            <Text className="font-semibold  text-white">Nombre d'avis </Text>
            <Text className="font-semibold">{informations.review_count}</Text>
          </Text>
          <Text className="p-3 text-lg bg-sky-400 border border-black">
            <Text className="font-semibold  text-white">Téléphone </Text>
            <Text className="font-semibold">{informations.display_phone}</Text>
          </Text>
        </View>
      ) : (
        <View className="w-full h-full flex flex-col justify-center items-center">
          {' '}
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

export default Informations;
