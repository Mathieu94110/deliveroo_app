import { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native'; // for mobile mode
import lottie from 'lottie-web';
import MenuItems from '../components/restaurantDetails/MenuItems';
import { useAppSelector } from '../redux/store/hooks';
import { cartSelector } from '../redux/features/cartSlice';
import { db } from '../services/firebase.config';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [],
  });

  const selectedUsers = useAppSelector(cartSelector);
  const { items, restaurantName } = selectedUsers.selectedItems;

  const total = items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const collectionRef = collection(db, 'orders');
    const q = query(collectionRef, orderBy('createdAt', 'desc'), limit(1));
    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      snapshot.docs.map((doc: any) => {
        setLastOrder(doc.data());
      });
    });

    return () => unsubscribe();
  }, []);

  // used for developpement on web mode
  useEffect(() => {
    lottie.loadAnimation({
      animationData: require('../assets/animations/checked.json'),
      autoplay: true,
      container: checkContainer.current!,
      loop: true,

      renderer: 'svg',
    });
    lottie.loadAnimation({
      animationData: require('../assets/animations/cake-cookies-fruit.json'),
      autoplay: true,
      container: FoodContainer.current!,
      loop: true,
      renderer: 'svg',
    });
  }, []);

  const checkContainer = useRef<null | HTMLDivElement>(null);
  const FoodContainer = useRef<null | HTMLDivElement>(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="m-4 items-center h-full">
        <div ref={checkContainer} id="animation-container"></div>

        {/*  for mobile mode <LottieView
          source={require('../assets/animations/checked.json')}
          autoPlay
          style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
          speed={0.5}
          loop={false}
        /> */}
        <Text className="text-xl font-semi-bold">
          Votre commmande chez {restaurantName} a été effectuée pour un montant de {totalUSD}
        </Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} marginLeft={10} hideCheckbox={true} />
          <div ref={FoodContainer} id="animation-container"></div>
          {/*  for mobile mode <LottieView
            style={{ height: 200, alignSelf: 'center' }}
            source={require('../assets/animations/cake-cookies-fruit.json')}
            autoPlay
            speed={0.5}
          /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
