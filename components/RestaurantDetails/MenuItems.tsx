import { View, Text, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { addToCart, cartSelector } from '../../redux/features/cartSlice';
import { firebaseSelectedITems, localMenu } from '../../types/types';

export default function MenuItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}: {
  restaurantName?: string;
  foods: localMenu[];
  hideCheckbox: boolean;
  marginLeft?: number;
}) {
  const dispatch = useAppDispatch();
  const selectedUsers = useAppSelector(cartSelector);
  const selectItem = (item: localMenu, checkboxValue: boolean) =>
    restaurantName &&
    dispatch(addToCart({ ...item, restaurantName: restaurantName, checkboxValue: checkboxValue }));

  const isFoodInCart = (food: localMenu, cartItems: firebaseSelectedITems) =>
    Boolean(cartItems.selectedItems.items.find((item: localMenu) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food: localMenu, index: number) => (
        <View key={index}>
          <View className="flex-row justify-between m-5">
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
                fillColor="green"
                isChecked={isFoodInCart(food, selectedUsers)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            )}

            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props: { food: localMenu }) => (
  <View className="w-60 justify-evenly">
    <Text className="text-lg font-semi-bold">{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({
  marginLeft,
  ...props
}: {
  marginLeft: number;
  props: { food: localMenu };
}) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        marginLeft: marginLeft,
      }}
      className="w-24 h-24 rounded-lg"
    />
  </View>
);
