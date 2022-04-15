import { StatusBar } from 'expo-status-bar';

import {TouchableOpacity, Button,StyleSheet, Text, View } from 'react-native';
import Home from './Home/home'
import Log from './Login/login'
import Log2 from './Login/login2'
import Notes from './Notes/Notes'
import Notes2 from './Notes/Notes2'
import DossierMedical from './DossierMedical/dossierMedical';
import RDV from './RDV/RDV'
import RDV2 from './RDV/RDV2'

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer style={styles.container} >
      <Stack.Navigator screenOptions={{headerShown: false}}>
      
        <Stack.Screen name="Bonjour" component={Log}  />
        <Stack.Screen name="Bonjour2" component={Log2}   />
        <Stack.Screen name="Accueil" component={Home}   />
        <Stack.Screen name="BlocNotes" component={Notes}   />
        <Stack.Screen name="BlocNotes2" component={Notes2}   />
        <Stack.Screen name="DossierMedical" component={DossierMedical}   />
        <Stack.Screen name="RDV" component={RDV}   />
        <Stack.Screen name="RDV2" component={RDV2}   />
      </Stack.Navigator>

    </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0080ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
