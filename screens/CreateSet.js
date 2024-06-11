import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateSet = ({ navigation }) => {
  const [setName, setSetName] = useState('');

  const handleCreateSet = () => {
    // Logic to create a new set
    navigation.navigate('SetOverview');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New Set</Text>
      <TextInput
        style={styles.input}
        placeholder="Set Name"
        value={setName}
        onChangeText={setSetName}
      />
      <Button title="Create Set" onPress={handleCreateSet} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default CreateSet;
