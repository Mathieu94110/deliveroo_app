import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
});

export default function MenuItems({ restaurantName, foods }: { restaurantName: any; foods: any }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food: any, index: any) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
              fillColor="green"
            />

            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider className="w-px" orientation="vertical" style={{ marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props: any) => (
  <View style={{ width: 240, justifyContent: 'space-evenly' }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }: { marginLeft: number; props: any }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
