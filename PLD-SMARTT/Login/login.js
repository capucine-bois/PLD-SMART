import React, { Component, useState } from 'react';

import { Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Log = ({navigation}) =>{
    const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
 
    return(
<View style={styles.container}>
   
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={styles.loginBtn}>
          
          <Button
        title="Se connecter"
        color="#FFFFFF"
        onPress={() => 
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Accueil', {
            mail: email,
            motdepasse: password,
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
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: 'column'
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#FFA500",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    register_button: {
      height: 40,
      marginBottom: 40,
      
     
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      backgroundColor: "#FFA500",
      marginBottom: 160,
    },
  });