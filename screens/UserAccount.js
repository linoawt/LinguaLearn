import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UserAccount = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Account</Text>
      {/* User account details */}
      <Button title="Log Out" onPress={() => navigation.navigate('Login')} />
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

export default UserAccount;
