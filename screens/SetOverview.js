import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SetOverview = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vocabulary Sets</Text>
      {/* Map through sets and display them */}
      <Button title="Go to Quiz Center" onPress={() => navigation.navigate('QuizCenter')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default SetOverview;
