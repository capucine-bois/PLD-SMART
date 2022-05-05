import { StatusBar } from 'expo-status-bar';

import {TouchableOpacity, Button,StyleSheet, Text, View } from 'react-native';
import Home from './Home/home'
import Log from './Login/login'
import Log2 from './Login/login2'
import Notes from './Notes/Notes'
import Notes2 from './Notes/Notes2'
import Traitements from './Traitements/Traitements'
import AddTreatmentForm from './Traitements/AddTreatmentForm'
import DossierMedical from './DossierMedical/dossierMedical';
import InscrDosMed from './DossierMedical/inscriptionDossierMedicale';
import InscrDosMed2 from './DossierMedical/inscriptionDossierMedicale2';
import InscrDosMed3 from './DossierMedical/inscriptionDossierMedicale3';
import InscrDosMed4 from './DossierMedical/inscriptionDossierMedicale4';
import InscrDosMed5 from './DossierMedical/inscriptionDossierMedicale5';
import InscrDosMed6 from './DossierMedical/inscriptionDossierMedicale6';
import RDV from './RDV/RDV'
import RDV2 from './RDV/RDV2'
import Parameters from './Parameters/Parameters'
import ParametersNotification from './Parameters/Notifications'
import ParametersUrgencyCall from './Parameters/UrgencyCall'
import DosMedAllergies from './DossierMedical/dosMedAllergies'
import DosMedAllergiesAj from './DossierMedical/dosMedAllergiesAj'
import DosMedIndicateurs from './DossierMedical/dosMedIndicateurs'
import DosMedIndicateursAj from './DossierMedical/dosMedIndicateursAj'
import DosMedPathologies from './DossierMedical/dosMedPathologies'
import DosMedVaccins from './DossierMedical/dosMedVaccins'
import DosMedVaccinsAj from './DossierMedical/dosMedVaccinsAj'
import DosMedAppareillages from './DossierMedical/dosMedAppareillages'
import DosMedAppareillagesAj from './DossierMedical/dosMedAppareillagesAj'
import DosMedPathologiesAj from './DossierMedical/dosMedPathologiesAj'
import DosMedIndicateurPres from './DossierMedical/dosMedIndicateurPres'
import DosMedIndicateurAjMes from './DossierMedical/dosMedIndicateurAjMes'

import React, {useEffect} from "react"

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Camera from "./Traitements/TreatmentCamera";
import TreatmentCamera from "./Traitements/TreatmentCamera";
import TreatmentCameraSave from "./Traitements/TreatmenCameraSave";
import AddMedicationForm from "./Traitements/AddMedicationForm";

const Stack = createNativeStackNavigator();
const urlBack = "http://172.20.10.2:8080";
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
            <Stack.Screen initialParams={{'url':urlBack}} name="Bonjour" component={Log}  />
            <Stack.Screen initialParams={{'url':urlBack}} name="Bonjour2" component={Log2}   />
          </>
          ):(
              null
          )
        }


        <Stack.Screen initialParams={{'url':urlBack}} name="Accueil" component={Home}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="BlocNotes" component={Notes}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="BlocNotes2" component={Notes2}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DossierMedical" component={DossierMedical}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="inscrDossierMedical" component={InscrDosMed}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="inscrDossierMedical2" component={InscrDosMed2}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="inscrDossierMedical3" component={InscrDosMed3}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="inscrDossierMedical4" component={InscrDosMed4}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="inscrDossierMedical5" component={InscrDosMed5}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="inscrDossierMedical6" component={InscrDosMed6}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="RDV" component={RDV}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="RDV2" component={RDV2}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="Parameters" component={Parameters}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="ParametersUrgencyCall" component={ParametersUrgencyCall}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="ParametersNotification" component={ParametersNotification}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="Traitements" component={Traitements}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="TreatmentCameraSave" component={TreatmentCameraSave}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="Traitements2" component={AddTreatmentForm}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="AddMedicationForm" component={AddMedicationForm} />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedAllergies" component={DosMedAllergies}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedAllergiesAj" component={DosMedAllergiesAj}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedIndicateurs" component={DosMedIndicateurs}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedIndicateursAj" component={DosMedIndicateursAj}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedPathologies" component={DosMedPathologies}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedVaccins" component={DosMedVaccins}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedVaccinsAj" component={DosMedVaccinsAj}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedAppareillages" component={DosMedAppareillages}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedAppareillagesAj" component={DosMedAppareillagesAj}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedPathologiesAj" component={DosMedPathologiesAj}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedIndicateurPres" component={DosMedIndicateurPres}   />
        <Stack.Screen initialParams={{'url':urlBack}} name="DosMedIndicateurAjMes" component={DosMedIndicateurAjMes}   />

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
