import React, { Component, useState,useEffect } from 'react';
import { FlatList,Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView, Slider } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from "../Util/Header";
import ButtonMenu from "../Util/ButtonMenu";


  const ConnexionDistance = ({route,navigation}) =>{
    
      const [token, setToken] = useState(route.params.token);
      const [bouton, setBouton] = useState(false);
      const tokenAvant = route.params.token;

      const insertToken = () =>{
        navigation.navigate('Accueil', {
          token:token,

      })
      AsyncStorage.setItem('token',token);
      }
  
      return(
          <View style={styles.container}>
  
              <StatusBar style="auto" />
              <Text style={styles.text}>
                  Entrer le token de la personne :
  
              </Text>
              <Text style={styles.text2}>
                  Votre token est : {tokenAvant}

  
              </Text>
              
  
              <View style={styles.inputView}>
                  <TextInput
                      style={styles.TextInput}
  
                      placeholder="Saisissez le token"
                      placeholderTextColor="#003f5c"
                      onChangeText={(prenom) => setToken(prenom)}
                      onChange={()=>setBouton(true)}
                  />
              </View>
  
  
  
  
  
              <TouchableOpacity style={styles.loginBtn}>
  
                  <Button
                      title="Suivant"
                      disabled={!bouton}
                      onPress={() =>{
                          /* 1. Navigate to the Details route with params */
                          insertToken()
                      }}
                  />
              </TouchableOpacity>
  
  
          </View>
      )
  }
  
  
  
  export default ConnexionDistance;
  
  
  
  
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: "#0080ff",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'column'
      },
  
      image: {
          marginBottom: 40,
      },
  
      inputView: {
          backgroundColor: "#FFFF",
          borderRadius: 30,
          width: "80%",
          height: 70,
          marginBottom: 150,
  
          alignItems: "center",
      },
  
      TextInput: {
          height: 50,
          flex: 1,
          padding: 10,
          marginLeft: 20,
          color: "#000000",
      },
  
  
      loginBtn: {
          width: "80%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
          backgroundColor: "#FFFF",
          marginBottom: 160,
      },
      text: {
          fontSize: 40,
          flex: 1,
          textAlign: 'center',
          fontWeight: 'bold',
          color: "#fff",
          marginTop: 100,
      },
      text2: {
          fontSize: 40,
          flex: 1,
          textAlign: 'center',
          fontWeight: 'bold',
          color: "#fff",
  
  
      },
  
  });

