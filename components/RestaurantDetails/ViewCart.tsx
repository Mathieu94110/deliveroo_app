import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import OrderItem from './OrderItem';
import { useAppSelector } from '../../redux/store/hooks';
import { cartSelector } from '../../redux/features/cartSlice';

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const selectedUsers = useAppSelector(cartSelector);
  const { items, restaurantName } = selectedUsers.selectedItems;

  const total = items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View className="flex-1 justify-end bg-zinc-950/90">
          <View className="bg-white p-4 h-[32rem] border">
            <Text className="text-center font-semibold text-lg mb-2.5">{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View className="flex-row justify-between mt-4">
              <Text className="text-left font-semibold mb-2.5">Sous total</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View className="flex-row justify-center">
              <TouchableOpacity
                className="mt-5 bg-black items-center p-3 rounded-3xl w-72 relative"
                onPress={() => setModalVisible(false)}
              >
                <Text className="color-white text-xl">Valider</Text>
                <Text className="absolute right-5 top-4 color-white">{total ? totalUSD : ''}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View className="flex-1 w-full items-center justify-center flex-row absolute bottom-32 z-10">
          <View className="w-full flex-row justify-center ">
            <TouchableOpacity
              className="mt-5 bg-black	flex-row justify-center p-3.5 rounded-full w-64	relative"
              onPress={() => setModalVisible(true)}
            >
              <Text className="text-white text-xl mr-8">Voir la carte</Text>
              <Text className="text-white text-xl">{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
