import React, { Component, useState } from 'react';
import { Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../Style/styleHome'



const RDV2 =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const[date,setDate]=useState('');
    const[motif,setMotif]=useState('');
    const[praticien,setPraticien]=useState('');
    const[adress,setAdress]=useState('');
    const[commentaire,setCommentaire]=useState('');
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
            
                placeholder="Date"
                placeholderTextColor="#003f5c"
                onChangeText={(date) => setDate(date)}
                
            />
            </View>

            <View style={style.inputView}>

            <TextInput
            style={style.TextInput}

            placeholder="Motif"
            placeholderTextColor="#003f5c"
            onChangeText={(motif) => setMotif(motif)}

            />

            </View>

            <View style={style.inputView}>
            
                <TextInput
                style={style.TextInput}
            
                placeholder="Praticien"
                placeholderTextColor="#003f5c"
                onChangeText={(praticien) => setPraticien(date)}
                
            />
            </View>
            <View style={style.inputView}>
            
                <TextInput
                style={style.TextInput}
            
                placeholder="Adresse"
                placeholderTextColor="#003f5c"
                onChangeText={(adress) => setAdress(adress)}
                
            />
            </View>

            
            <Text style={{textAlign:'left',marginTop:20}}>
                   Commentaire
                </Text>
            <ScrollView style={{marginTop:20,textAlign:'left',width: "80%",height:"30%",borderWidth: 5,borderColor:"#9e0e40",borderRadius:15}}>
            <TextInput
                style={style.TextInput}
            
                placeholder="Commentaire"
                placeholderTextColor="#003f5c"
                onChangeText={(commentaire) => setCommentaire(commentaire)}
                
            />

            </ScrollView>

             <View style={style.BtnView}>

             
                <TouchableOpacity style={style.AjouterBtn}  >
                    <Text>
                       Ajouter
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.AnnulerBtn} onPress={()=>navigation.navigate('RDV', {
             prenom: prenom,
             nom: nom,
             })}>
                    <Text>
                        Annuler
                    </Text>
                </TouchableOpacity>

            </View>
        
        </View>


    )
}

export default RDV2;

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
        height: 40,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000000",
      },
      inputView: {
          marginTop: 10,
          flexDirection: 'row',
        backgroundColor: "#9C9C9C",
        borderRadius: 30,
        width: "80%",
        height: 50,
        alignItems: "center",
      },
        AjouterBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#9e0e40",
        
      },
      AnnulerBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#9C9C9C",
        marginLeft:"2%"
        
      },
      BtnView: {

          
        height:"20%",
        width:"80%",
        flexDirection:"row",
        alignItems:"flex-start",
        marginLeft:"30%",
        
      },

      

});