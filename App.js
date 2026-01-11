import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// GÖREV 2: Stack Mantığını buraya taşıdık
// Bu bileşen kendi içinde Home -> Details geçişini yönetir
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

// GÖREV 3: Tab Navigator Kurulumu
export default function App() {
  return (
    <NavigationContainer>
      {/* headerShown: false ÖNEMLİ! 
        Bunu yapmazsak hem Tab'ın hem de Stack'in başlığı üst üste görünür.
        Biz başlığı Stack (HomeStack) yönetsin istiyoruz.
      */}
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        
        {/* 1. Tab: Explore (İçinde Stack barındırır) */}
        <Tab.Screen name="Explore" component={HomeStack} />
        
        {/* 2. Tab: Settings (Tek bir ekrandır) */}
        <Tab.Screen name="Settings" component={SettingsScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}