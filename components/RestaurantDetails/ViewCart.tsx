import { View, Text, TouchableOpacity } from 'react-native';

export default function ViewCart() {
  return (
    <View className="flex-1 w-full items-center justify-center flex-row absolute bottom-32 z-10 ">
      <View className="w-full flex-row justify-center ">
        <TouchableOpacity className="mt-5 bg-black	flex-row justify-center p-3.5 rounded-full w-64	relative">
          <Text className="text-white text-xl">Voir la carte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
