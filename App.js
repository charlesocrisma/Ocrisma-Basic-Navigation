import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import RegisterAdminScreen from './src/screens/RegisterAdminScreen';
import HomePageScreen from './src/screens/HomePageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="RegisterAdmin" component={RegisterAdminScreen} />
        <Stack.Screen name="Home" component={HomePageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
