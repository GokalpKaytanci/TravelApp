import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Oluşturduğun ekranları import et
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

// Stack nesnesini oluştur
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Stack.Navigator ekranların yönetimini devralır */}
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}