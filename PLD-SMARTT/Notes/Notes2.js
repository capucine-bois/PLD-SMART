import React, {Component, useEffect, useState} from 'react';
import { Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../Style/styleHome'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Radio from "./Radio";
import Checkbox from "./Checkbox";



const Notes2 =({route,navigation})=>{
    const[auteur,setAuteur]=useState(route.params.author);
    const[titre,setTitre]=useState(route.params.title);
    const[note,setNote]=useState(route.params.note);
    const [toggleNote, setToggleNote] = useState(false);
    const[state, setState] = useState("undefined")


    const deleteNote = () => {
        const params = {
            method:"DELETE",
        }

        fetch(route.params.url+"/notes/id/"+route.params.id,params)
            .then(response => navigation.navigate('BlocNotes'))
    }

    const addOrChange = () => {

        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "author": auteur,
                "title": titre,
                "note": note,
                "id": route.params.id,
                "date":route.params.date,
            })
        }

        AsyncStorage.getItem('token')
            .then((token) => {
                fetch(route.params.url+'/notes/user/'+token,params)
                    .then(response => navigation.navigate('BlocNotes'))
            });
    }

    return(
        <View style={style.container}>
        
            <TouchableOpacity style={style.headerBtn} onPress={() =>  navigation.navigate('Accueil')}>
            <Text style={styles.text2}>
             Mon Bloc Notes
             </Text>
             <MaterialCommunityIcons style={styles.iconDossier}  name='home' color="#fff" size={30}/>
            </TouchableOpacity>

            <View style={style.inputView}>
            
                <TextInput
                style={style.TextInput}
                placeholder="Auteur"
                placeholderTextColor="#003f5c"
                onChangeText={(auteur) => setAuteur(auteur)}
                >
                    {auteur}
                </TextInput>
            </View>

            <View style={style.inputView}>

                <TextInput
                style={style.TextInput}
                placeholder="Titre"
                placeholderTextColor="#003f5c"
                onChangeText={(titre) => setTitre(titre)}
                >
                    {titre}
                </TextInput>
            
            </View>


            <View style={style.stateFilters}>
                <Radio label={"Alarmant"} value={"alarmant"} radioAttr={state} setRadioAttr={setState}/>
                <Radio label={"Mauvais"} value={"mauvais"} radioAttr={state} setRadioAttr={setState}/>
                <Radio label={"Bon"} value={"bon"} radioAttr={state} setRadioAttr={setState}/>
            </View>

            <Checkbox label ="Ajouter une note"/>

            <Text style={{textAlign:'left',marginTop:20}}>
                    Notes
            </Text>
            <ScrollView style={{marginTop:20,textAlign:'left',width: "80%",height:"40%",borderWidth: 5,borderColor:"#ffd700",borderRadius:15}}>
            <TextInput
                style={style.TextInput}
            
                placeholder="Écrire ma nouvelle note"
                placeholderTextColor="#003f5c"
                onChangeText={(note) => setNote(note)}
            >
                {note}
            </TextInput>

            </ScrollView>

             {
                 route.params.id == -1 ?
                     <View style={style.BtnView}>
                         <TouchableOpacity  style={[style.btn, style.AjouterBtn]} onPress={addOrChange} >
                             <Text>
                                 Ajouter
                             </Text>
                         </TouchableOpacity>

                         <TouchableOpacity style={[style.btn, style.AnnulerBtn]} onPress={()=>navigation.navigate('BlocNotes')}>
                             <Text>
                                 Annuler
                             </Text>
                         </TouchableOpacity>
                     </View>
                 :
                     <View style={style.BtnView}>
                         <TouchableOpacity  style={[style.btn, style.AjouterBtn]} onPress={addOrChange} >
                             <Text>
                                 Modifier
                             </Text>
                         </TouchableOpacity>

                         <TouchableOpacity style={[style.btn, style.deleteBtn]} onPress={deleteNote}>
                             <Text>
                                 Supprimer
                             </Text>
                         </TouchableOpacity>

                         <TouchableOpacity style={[style.btn, style.AnnulerBtn]} onPress={()=>navigation.navigate('BlocNotes')}>
                             <Text>
                                 Annuler
                             </Text>
                         </TouchableOpacity>


                     </View>
             }



        
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

        stateFilters:{
            marginTop:20,
            display:"flex",
            flexDirection:"row",
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

    btn:{
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },

    AjouterBtn: {
        backgroundColor: "#ffd700",
    },
    AnnulerBtn: {
        backgroundColor: "#9C9C9C",
    },

    deleteBtn:{
        backgroundColor: "red",
    },

    BtnView: {
        height:"20%",
        width:"80%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },

});