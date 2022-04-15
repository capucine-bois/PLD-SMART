import React, { Component, useState } from 'react';

import { Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Log2 = ({route,navigation}) => {
    const {prenom}= route.params;
    const [nom, setNom] = React.useState('');
    const [bouton, setBouton] = useState(false);

    const createUser = () => {

        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": prenom ,
                "surname": nom,
            })
        }
        fetch('http://localhost:8080/user/',params)
            .then(response => {
                if(response.status == 200){
                    navigation.navigate('Accueil', {
                        prenom: prenom,
                        nom: nom,
                    });
                }
            });


    };

    return(
        <View style={styles.container}>
   
            <StatusBar style="auto" />
            <Text style={styles.text}>
                Bienvenue,

            </Text>
            <Text style={styles.text2}>
                Entrez Votre Nom
            </Text>

            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}

                placeholder="Saisissez votre Nom"
                placeholderTextColor="#000000"
                onChangeText={(nom) => setNom(nom)}
                onChange={()=>setBouton(true)}
              />
        </View>
   
        
   
        
   
        <TouchableOpacity style={styles.loginBtn}>
          
          <Button
        title="Suivant"
        disabled={!bouton}
        onPress={() => 
          /* 1. Navigate to the Details route with params */
            createUser()
        }
      />
        </TouchableOpacity>

        
      </View>
    )

}

export default Log2;

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