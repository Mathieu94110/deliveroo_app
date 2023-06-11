import React, { useEffect, useState } from 'react';
import { RestaurantDetailsProps, restaurantData } from '../types/types';
import { ActivityIndicator, Button, Image, Text, View } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const Schedules = ({
  route,
  navigation,
}: {
  route: RestaurantDetailsProps;
  navigation: RestaurantDetailsProps;
}) => {
  const [schedules, setSchedules] = useState<Partial<restaurantData | null>>(null);
  useEffect(() => {
    console.log(route.params.data);
    setSchedules(route.params.data);
  }, [route.params.data]);
  let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  return (
    <View className="w-full h-full p-4">
      <View className="w-32 my-4 flex flex-row">
        <ArrowLeftIcon color="gray" size={30} onPress={() => navigation.goBack()} />
      </View>
      {schedules ? (
        <View>
          <Text className="p-3 text-lg bg-sky-400 border border-black">
            <Text className="font-semibold text-white">Ouvert </Text>
            <Text className="font-semibold">{schedules.is_closed ? 'Non' : 'Oui'}</Text>
            {schedules.hours[0].open.map((day: any, index: number) => {
              return (
                <Text>
                  `{days[index]} Horaires: `: {day.start} - ${day.end}
                </Text>
              );
            })}
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

export default Schedules;
