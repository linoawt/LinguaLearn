import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizCenter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Center</Text>
      <Button title="Quiz I" onPress={() => navigation.navigate('QuizI')} />
      <Button title="Quiz II" onPress={() => navigation.navigate('QuizII')} />
      <Button title="Quiz III" onPress={() => navigation.navigate('QuizIII')} />
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

export default QuizCenter;
