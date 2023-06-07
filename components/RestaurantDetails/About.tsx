import React from 'react';
import { View, Text, Image } from 'react-native';

export default function About(props: any) {
  const {
    name,
    image,
    price,
    review_count,
    rating,
    categories,
    phone,
    display_address,
    image_url,
    id,
    distance,
    display_phone,
    coordinates,
  } = props.route.params.restaurant;

  const formattedCategories = categories.map((cat: any) => cat.title).join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${review_count}+)`;
  return (
    <View>
      <RestaurantImage image={image_url} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props: any) => (
  <Image source={{ uri: props.image }} className="w-full h-44" />
);

const RestaurantName = (props: any) => (
  <Text className="text-3xl font-semi-bold mt-2.5 mx-4">{props.name}</Text>
);

const RestaurantDescription = (props: any) => (
  <Text className="mt-2.5 mx-4 text-base">{props.description}</Text>
);
