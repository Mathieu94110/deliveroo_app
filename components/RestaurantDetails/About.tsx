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
  <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
);

const RestaurantName = (props: any) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props: any) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
