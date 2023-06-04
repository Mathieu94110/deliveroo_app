import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const items = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'A récupérer',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Boissons',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Boulangerie',
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Sur mesure',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Thé/Café',
  },
  {
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

export default function Categories() {
  return (
    <View className="pt-1.5 background-white py-2.5 pl-5">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} className="items-center mr-7 ">
            <Image source={item.image} className="w-12 h-10 object-contain" />
            <Text className="text-sm font-black">{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
