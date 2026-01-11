import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// navigation prop'u otomatik olarak React Navigation tarafından gönderilir
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Details"
        // 'Details' ismi, App.js'de tanımlayacağımız ekran ismiyle AYNEN eşleşmelidir
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifycondent: 'center', // Ortalamak için
    marginTop: 50,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;