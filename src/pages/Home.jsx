import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppHeader } from "../components/appbar/appBar";
import { BNavigation } from "../components/bottomnavigation/BNavigation";
import { CardContent } from "../components/cards/CardContent";
export const Home = ({navigation}) => {
    const [cart,setCart] = useState([])

        return (
                <>
                <BNavigation navigation={navigation} cart={cart} setCart={setCart}/>
                </>

        )
      };

