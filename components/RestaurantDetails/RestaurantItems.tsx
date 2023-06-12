import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { HeartIcon } from 'react-native-heroicons/outline';
import { HomeProps, restaurantData } from '../../types/types';

export default function RestaurantItems({
  navigation,
  restaurantData,
}: {
  navigation: HomeProps;
  restaurantData: restaurantData[];
}) {
  return (
    <>
      {restaurantData.length > 0 ? (
        restaurantData.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            className="mb-7"
            onPress={() =>
              navigation.navigate('RestaurantDetails', {
                restaurantId: restaurant.id,
              })
            }
          >
            <View className="p-4 bg-white">
              <>
                <Image
                  source={{
                    uri: restaurant.image_url,
                  }}
                  className="w-full h-44"
                />
                <TouchableOpacity className="absolute right-5 top-5">
                  <HeartIcon color={'white'} />
                </TouchableOpacity>
              </>
              <View className="flex-row justify-between items-center mt-2.5">
                <View>
                  <Text className="text-base font-semibold">{restaurant.name}</Text>
                  <Text className="text-sm text-gray-100">30-45 • min</Text>
                </View>
                <View className="bg-[#eee] h-7 w-7 items-center justify-center rounded-2xl">
                  <Text>{restaurant.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <>
          <Text
            className="text-blue-500 text-lg text-fontsemibold p-2 mt-12 text-center"
            onPress={() => {
              Linking.openURL('https://cors-anywhere.herokuapp.com/corsdemo');
            }}
          >
            Activer le serveur de démonstration
          </Text>
          <Text className="p-2 text-blue-500 text-center text-fontsemibold">
            Une fois la demande d'accès au serveur effectuée , rafraichissez la page
          </Text>
        </>
      )}
    </>
  );
}
