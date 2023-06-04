import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MapPinIcon, InformationCircleIcon } from 'react-native-heroicons/outline';

export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        query={{ key: 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4' }}
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
