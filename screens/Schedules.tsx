import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { RestaurantDetailsProps } from '../types/types';
import { ArrowLeftIcon, BuildingStorefrontIcon } from 'react-native-heroicons/outline';

const Schedules = ({
  route,
  navigation,
}: {
  route: RestaurantDetailsProps;
  navigation: RestaurantDetailsProps;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [schedules, setSchedules] = useState<string[][]>([]);
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const tableHead = ['Jour', 'Ouverture', 'Fermeture', 'Service en soirée'];
  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  useEffect(() => {
    setIsLoading(true);
    const { hours, is_closed } = route.params.data;
    const weekSchedules: string[][] = [];
    for (let i = 0; i < days.length; i++) {
      if (hours[0].open[i]) {
        weekSchedules[i] = [
          days[i],
          hours[0].open[i].start.substring(0, 2) + 'H' + hours[0].open[i].start.substring(2),
          hours[0].open[i].end.substring(0, 2) + 'H' + hours[0].open[i].start.substring(2),
          hours[0].open[i].is_overnight ? 'Oui' : 'Non',
        ];
      } else {
        weekSchedules[i] = [days[i], '//', '//', '//'];
      }
    }
    setIsOpen(!is_closed);
    setSchedules(weekSchedules);
    setIsLoading(false);
  }, [route.params.data]);

  return (
    <View className="flex-1 p-3">
      <View className="w-32 my-4 flex flex-row">
        <ArrowLeftIcon color="gray" size={30} onPress={() => navigation.goBack()} />
      </View>
      <View className="w-full text-center my-2">
        <Text
          className={`font-semibold text-lg flex items-center justify-center
    ${isOpen ? 'text-green-600' : 'text-red-600'}
    `}
        >
          <BuildingStorefrontIcon /> {isOpen ? 'Ouvert' : 'Fermé'}
        </Text>
      </View>
      {isLoading ? (
        <View className="w-full h-full flex items-center justify-center">
          <ActivityIndicator size="large" color="#3399cc" />
        </View>
      ) : (
        <Table borderStyle={{ borderWidth: 1, borderColor: '#fff' }} style={styles.container}>
          <Row data={tableHead} textStyle={styles.head} />
          {schedules.map((dataRow: any, index: number) => (
            <Row key={index} data={dataRow} textStyle={styles.text} />
          ))}
        </Table>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { backgroundColor: '#3399cc', textAlign: 'center' },
  head: {
    height: 40,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  text: { margin: 6, fontWeight: 600, color: '#fff' },
});
export default Schedules;
