import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';

const LanguageLevel = ({ route, navigation }) => {
  const [selectedLevel, setSelectedLevel] = useState('');
  const { language } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Level for {language}</Text>
      <Picker
        selectedValue={selectedLevel}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedLevel(itemValue)}
      >
        <Picker.Item label="Beginner" value="beginner" />
        <Picker.Item label="Intermediate" value="intermediate" />
        <Picker.Item label="Advanced" value="advanced" />
      </Picker>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Home', { level: selectedLevel })}
      />
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
  picker: {
    height: 50,
    width: 200,
  },
});

export default LanguageLevel;
