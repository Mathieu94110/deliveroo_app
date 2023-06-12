import React, { useEffect, useState } from 'react';
import { RestaurantDetailsProps } from '../types/types';
import { ArrowLeftIcon, MapPinIcon } from 'react-native-heroicons/outline';
import { ActivityIndicator, Text, View } from 'react-native';

const Coordinates = ({
  route,
  navigation,
}: {
  route: RestaurantDetailsProps;
  navigation: RestaurantDetailsProps;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<any>(null);

  useEffect(() => {
    setIsLoading(true);
    console.log(route.params.data);
    console.log(Array.isArray(route.params.data.location.display_address));
    setCoordinates(route.params.data);
    setIsLoading(false);
  }, [route.params.data]);

  return (
    <View>
      <View className="w-32 my-4 flex flex-row">
        <ArrowLeftIcon color="gray" size={30} onPress={() => navigation.goBack()} />
      </View>
      {!isLoading && coordinates ? (
        <View className="bg-sky-400 p-4">
          {Array.isArray(coordinates.location.display_address) && (
            <View className="flex flex-row justify-center items-center my-2">
              <MapPinIcon color="white" />
              <Text className="ml-3 font-semibold text-white">
                {coordinates.location.display_address.join(',').replace(',', ' ')}
              </Text>
            </View>
          )}
        </View>
      ) : (
        <View className="w-full h-full flex flex-col justify-center items-center">
          <ActivityIndicator size="large" color="#3399cc" />
        </View>
      )}
    </View>
  );
};

export default Coordinates;
