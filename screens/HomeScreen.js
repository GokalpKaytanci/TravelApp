import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Travel App</Text>
      
      {/* 1. Buton: Paris verisi gönderiyor */}
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Paris"
          onPress={() => navigation.navigate('Details', { 
            place: 'Paris', 
            rating: 5 
          })}
        />
      </View>

      {/* 2. Buton: London verisi gönderiyor */}
      <View style={styles.buttonContainer}>
        <Button
          title="Go to London"
          onPress={() => navigation.navigate('Details', { 
            place: 'London', 
            rating: 4 
          })}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  buttonContainer: { marginVertical: 10, width: 200 } // Butonlar arası boşluk
});