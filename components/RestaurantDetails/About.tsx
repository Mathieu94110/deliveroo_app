import { View, Text, Image } from 'react-native';
import { restaurantRoute } from '../../types/types';

export default function About(props: restaurantRoute) {
  const {
    name,
    price,
    review_count,
    rating,
    categories,
    phone,
    image_url,
    id,
    distance,
    display_phone,
    coordinates,
  } = props.route.params.restaurant;

  const formattedCategories = categories.map((cat) => cat.title).join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${review_count}+)`;

  return (
    <View>
      <Image source={{ uri: image_url }} className="w-full h-44" />
      <Text className="text-3xl font-semi-bold mt-2.5 mx-4">{name}</Text>
      <Text className="mt-2.5 mx-4 text-base">{description}</Text>
    </View>
  );
}
