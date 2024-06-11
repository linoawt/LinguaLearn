import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Progress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>
      {/* Display user progress */}
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

export default Progress;
