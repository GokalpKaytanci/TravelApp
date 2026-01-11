import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Button
        title="Go Back"
        // Stack'teki bir önceki ekrana döner
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DetailsScreen;