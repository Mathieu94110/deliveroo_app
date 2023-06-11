import { View, Text, Image } from 'react-native';
import { RestaurantDetailsProps, restaurantData } from '../../types/types';
import { useEffect, useState } from 'react';
import AboutMenu from './AboutMenu';

export default function About({
  infos,
  navigation,
}: {
  infos: restaurantData;
  navigation: RestaurantDetailsProps;
}) {
  useEffect(() => {
    console.log(infos);
  });
  const formattedCategories = infos?.categories?.map((cat) => cat.title).join(' • ');
  const description = `${formattedCategories} ${infos.price ? ' • ' + infos.price : ''} • 🎫 • ${
    infos.rating
  } ⭐ (${infos.review_count}+)`;

  return (
    <View>
      <Image source={{ uri: infos.image_url }} className="w-full h-44" />
      <AboutMenu infos={infos} navigation={navigation} />
      <Text className="text-3xl font-semi-bold mt-2.5 mx-4">{infos.name}</Text>
      <Text className="mt-2.5 mx-4 text-base">{description}</Text>
    </View>
  );
}
