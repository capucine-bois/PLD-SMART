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
import DosMedAllergies from './DossierMedical/dosMedAllergies'
import DosMedAllergiesAj from './DossierMedical/dosMedAllergiesAj'
import DosMedIndicateurs from './DossierMedical/dosMedIndicateurs'
import DosMedIndicateursAj from './DossierMedical/dosMedIndicateursAj'
import DosMedPathologies from './DossierMedical/dosMedPathologies'


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
        <Stack.Screen name="BlocNotes2" component={Notes2}   />
        <Stack.Screen name="DossierMedical" component={DossierMedical}   />
        <Stack.Screen name="RDV" component={RDV}   />
        <Stack.Screen name="RDV2" component={RDV2}   />
        <Stack.Screen name="DosMedAllergies" component={DosMedAllergies}   />
        <Stack.Screen name="DosMedAllergiesAj" component={DosMedAllergiesAj}   />
        <Stack.Screen name="DosMedIndicateurs" component={DosMedIndicateurs}   />
        <Stack.Screen name="DosMedIndicateursAj" component={DosMedIndicateursAj}   />
        <Stack.Screen name="DosMedPathologies" component={DosMedPathologies}   />



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
