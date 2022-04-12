import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, Button,StyleSheet, Text, View } from 'react-native';
import Home from './Home/home'
import Log from './Login/login'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    

      <NavigationContainer>
      <Stack.Navigator >
      
        <Stack.Screen name="Connexion" component={Log} />
        <Stack.Screen name="Accueil" component={Home}   />
       
      </Stack.Navigator>

    </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
