import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import LanguageSelection from './screens/LanguageSelection';
import LanguageLevel from '../screens/LanguageLevel';
import Home from './screens/Home';
import VocabularyCenter from '../screens/VocabularyCenter';
import CreateSet from '../screens/CreateSet';
import SetOverview from '../screens/SetOverview';
import QuizCenter from '../screens/QuizCenter';
import QuizI from '../screens/QuizI';
import QuizII from '../screens/QuizII';
import QuizIII from '../screens/QuizIII';
import Progress from '../screens/Progress';
import UserAccount from '../screens/UserAccount';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
        <Stack.Screen name="LanguageLevel" component={LanguageLevel} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VocabularyCenter" component={VocabularyCenter} />
        <Stack.Screen name="CreateSet" component={CreateSet} />
        <Stack.Screen name="SetOverview" component={SetOverview} />
        <Stack.Screen name="QuizCenter" component={QuizCenter} />
        <Stack.Screen name="QuizI" component={QuizI} />
        <Stack.Screen name="QuizII" component={QuizII} />
        <Stack.Screen name="QuizIII" component={QuizIII} />
        <Stack.Screen name="Progress" component={Progress} />
        <Stack.Screen name="UserAccount" component={UserAccount} />
      </Stack.Navigator>
      <View style={styles.footer}>
        <Text style={styles.footerText}>©️2024 Lingua Learn</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.3)',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});
