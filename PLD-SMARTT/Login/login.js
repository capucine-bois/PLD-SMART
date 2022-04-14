import React, { Component, useState } from 'react';

import { Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Log = ({navigation}) =>{
    const [prenom, setPrenom] = React.useState('');
    const [bouton, setBouton] = useState(false);
 
    return(
<View style={styles.container}>
   
        <StatusBar style="auto" />
        <Text style={styles.text}>
            Bienvenue,
            
        </Text>
        <Text style={styles.text2}>
            Entrez Votre Prénom
        </Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
           
            placeholder="Saisissez votre Prénom"
            placeholderTextColor="#003f5c"
            onChangeText={(prenom) => setPrenom(prenom)}
            onChange={()=>setBouton(true)}
          />
        </View>
   
        
   
        
   
        <TouchableOpacity style={styles.loginBtn}>
          
          <Button
        title="Suivant"
        disabled={!bouton}
        onPress={() => 
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Bonjour2', {
            prenom: prenom,
            
          })
        }
      />
        </TouchableOpacity>

        
      </View>
    )
}



export default Log;





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