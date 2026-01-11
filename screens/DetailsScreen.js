import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// route prop'unu fonksiyona eklemeyi unutma!
export default function DetailsScreen({ route, navigation }) {
  
  // 1. Parametreleri route.params içinden çıkarıyoruz (Destructuring)
  const { place, rating } = route.params;

  // 2. Meydan Okuma: Rating'e göre mesaj belirleme
  const message = rating === 5 ? "🌟 Mükemmel Seçim!" : "👍 Güzel Bir Yer!";

  return (
    <View style={styles.container}>
      {/* Dinamik Verileri Gösterme */}
      <Text style={styles.title}>Welcome to {place}</Text>
      <Text style={styles.subtitle}>Rating: {rating} Stars</Text>
      
      {/* Koşullu Mesaj */}
      <Text style={styles.message}>{message}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#333' },
  subtitle: { fontSize: 20, marginVertical: 10, color: '#666' },
  message: { fontSize: 18, color: 'blue', marginBottom: 30, fontStyle: 'italic' }
});