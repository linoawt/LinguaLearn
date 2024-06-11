import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VocabularyCenter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vocabulary Center</Text>
      <Button title="Create a Set" onPress={() => navigation.navigate('CreateSet')} />
      <Button title="View Sets" onPress={() => navigation.navigate('SetOverview')} />
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

export default VocabularyCenter;
