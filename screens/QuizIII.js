import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizIII = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz III</Text>
      {/* Quiz content */}
      <Button title="Finish" onPress={() => navigation.navigate('Progress')} />
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

export default QuizIII;
