import React from 'react';
import { RestaurantDetailsProps, restaurantData } from '../../types/types';
import { Button, SafeAreaView, SectionList, Text, TouchableOpacity, View } from 'react-native';

const AboutMenu = ({
  infos,
  navigation,
}: {
  infos: restaurantData;
  navigation: RestaurantDetailsProps;
}) => {
  const {
    alias,
    coordinates,
    display_phone,
    distance,
    is_closed,
    location,
    hours,
    name,
    image_url,
    review_count,
    rating,
    categories,
  } = infos;

  const aboutMenuItems = [
    {
      title: 'Informations',
      data: {
        image_url: image_url,
        alias: alias,
        name: name,
        display_phone: display_phone,
        categories: categories,
        rating: rating,
        review_count: review_count,
      },
      key: 'Informations',
    },
    {
      title: 'Horaires',
      data: { is_closed: is_closed, hours: hours },
      key: 'Schedules',
    },
    {
      title: 'Coordonnées',
      data: { coordinates: coordinates, distance: distance, location: location },
      key: 'Coordinates',
    },
  ];
  return (
    <SafeAreaView className="flex-1 flex flex-row text-sm">
      {aboutMenuItems.map((item) => (
        <TouchableOpacity
          key={item.key}
          onPress={() => navigation.navigate(item.key, { data: item.data })}
        >
          <Text className="p-1 m-1 border gb-b text-white font-semi-bold text-sm bg-sky-400">
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default AboutMenu;
