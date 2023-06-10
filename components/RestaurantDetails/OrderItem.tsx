import React from 'react';
import { View, Text } from 'react-native';
import { localMenu } from '../../types/types';

export default function OrderItem({ item }: { item: localMenu }) {
  const { title, price } = item;
  return (
    <View className="flex-row justify-between p-5 border-b border-b-[#999]">
      <Text className="font-semibold">{title}</Text>
      <Text className="opacity-70">{price}</Text>
    </View>
  );
}
