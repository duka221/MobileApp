import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { Basket } from './src/pages/Basket';
import { Home } from './src/pages/Home';
import { AppHeader } from './src/components/appbar/appBar';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" 
    >
      <Stack.Screen name="Home" component={Home} 
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('Test')}
              title="ZD"
              color="#fff"
            />
          ),
          title: 'Carculture',
          headerStyle: {
            backgroundColor: '#6750A4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '200',
            fontSize:25
            
          },
          
        }}
      />
      <Stack.Screen name="Basket" component={Basket} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

