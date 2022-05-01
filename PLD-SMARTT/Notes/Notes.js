import React, {Component, useEffect, useState} from 'react';
import { Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NoteSummary from "./NoteSummary";
import styles from '../Style/styleHome'
import AsyncStorage from "@react-native-async-storage/async-storage";

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


const Notes =({route,navigation}) => {

    const{prenom,nom}= route.params;
    const[recherche,setRecherche]=useState('');
    const[notes,setNotes] = useState({});

    //Get all the notes
    useEffect(() => {

        const params = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},

        }

        AsyncStorage.getItem('token')
            .then((token) => {
                console.log("oui");
                fetch('http://130.232.138.140:8080/notes/user/'+token,params)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        setNotes({...data});
                    });
            });

    },[])

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

                placeholder="Rechercher"
                placeholderTextColor="#003f5c"
                onChangeText={(prenom) => setRecherche(recherche)}
                onChange={console.log(recherche)}
                />
                <MaterialCommunityIcons style={styles.iconDossier}  name='magnify' color="#fff" size={45}/>

            </View>

            {
                notes.map(note => {
                    <NoteSummary title={note.title} author={note.author} date={note.date}></NoteSummary>
                })
            }

        
        <Bouton styleButton={style.nouvelleNoteBtn} styleText={style.text} onPress={() =>  navigation.navigate('BlocNotes2', {
            prenom: prenom,
            nom: nom,
            })} text="Nouvelle notes" icone="plus" styleIcone ={styles.iconDossier}/>

        </View>


    )


}

export default Notes;

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
        marginBottom: 150,
        
        alignItems: "center",
      },

});