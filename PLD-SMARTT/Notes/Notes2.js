import React, { Component, useState } from 'react';
import { Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../Style/styleHome'



const Notes2 =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const[auteur,setAuteur]=useState('');
    const[titre,setTitre]=useState('');
    const[note,setNote]=useState('');
    const[ajouterModifier,setAjouterModifier]=useState('Ajouter');
    const [bouton, setBouton] = useState(false);
    return(
        <View style={style.container}>
        
            <TouchableOpacity style={style.headerBtn} onPress={() =>  navigation.navigate('Accueil', {
             prenom: prenom,
             nom: nom,
             })}>
            <Text style={styles.text2}>
            Bloc Notes de {prenom} {nom}
             </Text>
             <MaterialCommunityIcons style={styles.iconDossier}  name='home' color="#fff" size={30}/>
            </TouchableOpacity>

            <View style={style.inputView}>
            
                <TextInput
                style={style.TextInput}
            
                placeholder="Auteur"
                placeholderTextColor="#003f5c"
                onChangeText={(auteur) => setAuteur(auteur)}
                
            />
            </View>

            <View style={style.inputView}>

                <TextInput
                style={style.TextInput}
            
                placeholder="Titre"
                placeholderTextColor="#003f5c"
                onChangeText={(titre) => setTitre(titre)}
                
            />
            
            </View>
            <Text style={{textAlign:'left',marginTop:20}}>
                    Notes
                </Text>
            <ScrollView style={{marginTop:20,textAlign:'left',width: "80%",height:"40%",borderWidth: 5,borderColor:"#ffd700",borderRadius:15}}>
            <TextInput
                style={style.TextInput}
            
                placeholder="Écrire ma nouvelle note"
                placeholderTextColor="#003f5c"
                onChangeText={(note) => setNote(note)}
                
            />

            </ScrollView>

             <View style={style.BtnView}>

             
                <TouchableOpacity visible={!bouton} disabled={!bouton} style={style.AjouterBtn}  >
                    <Text>
                        {ajouterModifier}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.AnnulerBtn} onPress={()=>navigation.navigate('BlocNotes', {
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

export default Notes2;

const style = StyleSheet.create({
    headerBtn: {
        width: "100%",
        height: "11%",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingBottom:20,
        backgroundColor: "#ffd700",
        marginBottom:30,
        
      },
      container: {
        display:"flex",
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
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
        backgroundColor: "#ffd700",
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
        backgroundColor: "#ffd700",
        
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