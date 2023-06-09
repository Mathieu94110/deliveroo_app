import { View, Text, Image, TouchableOpacity } from 'react-native';
import { HeartIcon } from 'react-native-heroicons/outline';
import { restaurantData } from '../../types/types';
import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

export default function RestaurantItems({
  navigation,
  restaurantData,
}: {
  navigation: any;
  restaurantData: restaurantData[];
}) {
  const [loading, setLoading] = useState(true);
  const loadingContainer = useRef(null);
  useEffect(() => {
    console.log(navigation);
    console.log(restaurantData);
  });
  useEffect(() => {
    lottie.loadAnimation({
      animationData: require('../../assets/animations/loader.json'),
      autoplay: true,
      container: loadingContainer.current!,
      loop: true,
      renderer: 'svg',
    });
    if (restaurantData) {
      setLoading(false);
    }
  }, [restaurantData]);

  return (
    <>
      {loading ? (
        <View className="bg-black absolute opacity-60	justify-center items-center h-screen w-full">
          <div ref={loadingContainer} id="loading-container"></div>
          {/* <LottieView
                    style={{ height: 200 }}
                    source={require('../../assets/animations/scanner.json')}
                    autoPlay
                    speed={3}
                  /> */}
        </View>
      ) : restaurantData.length ? (
        restaurantData.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            className="mb-7"
            onPress={() =>
              navigation.navigate('RestaurantDetails', {
                restaurant: restaurant,
              })
            }
          >
            <View className="mt-2.5 p-4 bg-white">
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
        <Text
          className="text-sky-300"
          onPress={() => {
            Linking.openURL('https://cors-anywhere.herokuapp.com/corsdemo');
          }}
        >
          Activer le serveur de démonstration
        </Text>
      )}
    </>
  );
}
