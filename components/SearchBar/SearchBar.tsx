import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MapPinIcon, InformationCircleIcon } from 'react-native-heroicons/outline';
import { GOOGLE_MAPS_KEY } from '@env';

export default function SearchBar({ cityHandler }: { cityHandler: Function }) {
  return (
    <View className="mt-3.5 flex-row">
      <GooglePlacesAutocomplete
        query={{ key: GOOGLE_MAPS_KEY, language: 'en' }}
        requestUrl={{
          useOnPlatform: 'all',
          url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
        }}
        fetchDetails={true}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        onFail={(error) => console.log(error)}
        onNotFound={() => console.log('no results')}
        placeholder="Rechercher"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            paddingRight: 0,
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View className="ml-2.5">
            <MapPinIcon size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View className="flex-row mr-2 bg-white p-2 rounded-3xl items-center">
            <InformationCircleIcon color="gray" size={20} />
            <Text>Rechercher</Text>
          </View>
        )}
      />
    </View>
  );
}
