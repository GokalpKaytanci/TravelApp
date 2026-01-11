import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// 1. İKONLARI IMPORT ET
import { Ionicons } from '@expo/vector-icons';

// Ekranları import et
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      // 3. STACK HEADER'I STİLLENDİRME
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' }, // Arkaplan rengi
        headerTintColor: '#fff', // Geri butonu ve başlık rengi (Beyaz)
        headerTitleStyle: { fontWeight: 'bold' }, // Yazı kalınlığı
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // 2. TABLARA İKON EKLEME VE ÖZELLEŞTİRME
        screenOptions={({ route }) => ({
          headerShown: false, // Tab başlığını gizle (Stack başlığı görünecek)
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Explore') {
              // Explore tab'ı seçiliyse 'map', değilse 'map-outline'
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Settings') {
              // Settings tab'ı seçiliyse 'settings', değilse 'settings-outline'
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // İkonu döndür
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato', // Seçili tab rengi
          tabBarInactiveTintColor: 'gray', // Seçili olmayan tab rengi
        })}
      >
        <Tab.Screen name="Explore" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}