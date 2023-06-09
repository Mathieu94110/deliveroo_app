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
    items: [
      {
        title: 'Bologna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image:
          'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
      },
    ],
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
  // usef for developpement on web mode
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
  const checkContainer = useRef(null);
  const FoodContainer = useRef(null);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: 'center',
          height: '100%',
        }}
      >
        <div ref={checkContainer} id="animation-container"></div>

        {/*  for mobile mode <LottieView
          source={require('../assets/animations/checked.json')}
          autoPlay
          style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
          speed={0.5}
          loop={false}
        /> */}
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
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
