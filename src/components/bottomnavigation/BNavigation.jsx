import { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Basket } from '../../pages/Basket';
import {  CardContent } from '../cards/CardContent';

    const Favs = () => <Text>Favorites</Text>;
    const NotificationsRoute = () => <Text>Notifications</Text>;  

  export const BNavigation = ({cart,setCart}) => {

    const [index, setIndex] = useState(0);
    
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home'},
    { key: 'carts', title: 'Carts', focusedIcon: 'cart' },
    { key: 'favorites', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <CardContent cart={cart} setCart={setCart} />,
    carts: () => <Basket cart={cart} />,
    favorites: Favs,
    notifications: NotificationsRoute,
  });

    return(
    <BottomNavigation style={{backgroundColor:"#A857CB"}}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    )
}