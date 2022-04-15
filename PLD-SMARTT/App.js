import { StatusBar } from 'expo-status-bar';

import {TouchableOpacity, Button,StyleSheet, Text, View } from 'react-native';
import Home from './Home/home'
import Log from './Login/login'
import Log2 from './Login/login2'
import Notes from './Notes/Notes'
import DossierMedical from './DossierMedical/dossierMedical';
import React, {useEffect} from "react"

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {

  const [token, setToken] = React.useState(null);

    useEffect(() => {
        const tok = AsyncStorage.getItem("token")
            .then(result => {
                setToken(result);
            })
    }, []);

  return (
      <NavigationContainer style={styles.container} >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token == null ? (
          <>
            <Stack.Screen name="Bonjour" component={Log}  />
            <Stack.Screen name="Bonjour2" component={Log2}   />
          </>
          ):(
              null
          )
        }


        <Stack.Screen name="Accueil" component={Home}   />
        <Stack.Screen name="BlocNotes" component={Notes}   />
        <Stack.Screen name="DossierMedical" component={DossierMedical}   />
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
