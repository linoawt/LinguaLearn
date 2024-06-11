import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lingua Learn</Text>
      <Button title="Vocabulary Center" onPress={() => navigation.navigate('VocabularyCenter')} />
      <Button title="Quiz Center" onPress={() => navigation.navigate('QuizCenter')} />
      <Button title="Progress" onPress={() => navigation.navigate('Progress')} />
      <Button title="User Account" onPress={() => navigation.navigate('UserAccount')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default Home;
