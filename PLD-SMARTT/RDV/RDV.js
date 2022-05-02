import React, { Component, useState } from 'react';
import { FlatList,Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../Style/styleHome'

const Bouton = (props) =>{
    return (
      <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
        <MaterialCommunityIcons style= {props.styleIcone} name={props.icone} color="#fff" size={45}/>
        <Text style={props.styleText}>
          {props.text}
        </Text>
      </TouchableOpacity>
    )
  
  }


const RDV =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const[recherche,setRecherche]=useState('');
    return(
        <View style={style.container}>
        
            <TouchableOpacity style={style.headerBtn} onPress={() =>  navigation.navigate('Accueil', {
             prenom: prenom,
             nom: nom,
             })}>
            <Text style={styles.text2}>
           Mes Rendez-Vous 
             </Text>
             <MaterialCommunityIcons style={styles.iconDossier}  name='home' color="#fff" size={30}/>
            </TouchableOpacity>

            <View style={style.inputView}>
            <TextInput
            style={style.TextInput}
           
            placeholder="Rechercher"
            placeholderTextColor="#003f5c"
            onChangeText={(prenom) => setRecherche(recherche)}
            onChange={console.log(recherche)}
          />
        <MaterialCommunityIcons style={styles.iconDossier}  name='magnify' color="#fff" size={45}/>

            </View>
            
            <View style={{width:'100%',height:'50%',backgroundColor:"#9e0e40"}}>
            <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}
        />
             </View>
        
        <Bouton styleButton={style.nouvelleNoteBtn} styleText={style.text} onPress={() =>  navigation.navigate('RDV2', {
            prenom: prenom,
            nom: nom,
            })} text="Nouveau RDV" icone="plus" styleIcone ={styles.iconDossier}/>

        </View>


    )
}

export default RDV;

const style = StyleSheet.create({
    headerBtn: {
        width: "100%",
        height: "11%",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingBottom:20,
        backgroundColor: "#9e0e40",
        marginBottom:30
        
      },
      container: {
        display:"flex",
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center'
      },
      nouvelleNoteBtn: {
        width: "80%",
        display:"flex",
      flexDirection:"row",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#9e0e40",
        marginBottom: 160,
      },
      text: {
        fontSize: 30,
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",
        
      
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000000",
      },
      inputView: {
          flexDirection: 'row',
        backgroundColor: "#9C9C9C",
        borderRadius: 30,
        width: "80%",
        height: 70,
        marginBottom: '10%',
        
        alignItems: "center",
      },

      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },

});