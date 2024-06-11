import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Picker } from 'react-native';

const LanguageSelection = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Language</Text>
      <Picker
        selectedValue={selectedLanguage}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Spanish" value="spanish" />
        <Picker.Item label="French" value="french" />
        <Picker.Item label="German" value="german" />
        {/* Add more languages as needed */}
      </Picker>
      <Button
        title="Next"
        onPress={() => navigation.navigate('LanguageLevel', { language: selectedLanguage })}
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

export default LanguageSelection;
