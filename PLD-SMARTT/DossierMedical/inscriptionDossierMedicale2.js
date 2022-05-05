
import React, { Component, useState } from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from "@react-native-picker/picker"
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormField from "../Util/FormField";
import Header from "../Util/Header";

function Bouton(props){
    return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
            <Text style={props.styleText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}


const InscrDosMed2 =({route,navigation})=>{
    const{prenom,nom,taille,poids,age}= route.params;
    const[titre,setTitre]=useState('');
    const[note,setNote]=useState('');
    const [selectedValue, setSelectedValue] = useState("type");
    const [bouton, setBouton] = useState(false);

    const submitAllergie= () => {
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name":titre,
                "description":note,

                
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/allergy/'+token,params)
                .then(response => {
                    if(response.ok) {
                        console.log("paassee")
                       setTitre("")
                       setNote('')
                    }
                });
        });
            
      };

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title = {"Tutoriel"} color={"#1EA584"}/>
            <View style={{alignItems:"center", height:"20%"}}>
                <Text style={styles.text1}>
                    Bonjour, {prenom} {nom}
                </Text>
                <View style={{marginTop:"2%",marginBottom:'5%'}}>
                    <Text style={styles.text3}>
                        Avez-vous des allergies ? Si oui merci de les mentionner ci-dessous, sinon cliquez sur "passer" :
                    </Text>
                </View>
            </View>

            <View style={{height:"70%", alignItems:"center"}}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Nom de l'allergène"
                        placeholderTextColor="#003f5c"
                        onChangeText={(titre) => setTitre(titre)}
                    />
                </View>

                <View style={styles.inputView2}>
                    <TextInput
                        style={styles.TextInputDesc}
                        placeholder="Descriptif"
                        placeholderTextColor="#003f5c"
                        onChangeText={(note) => setNote(note)}
                        multiline={true}
                    />
                </View>

                <View style={{height:"20%", marginHorizontal:"10%", marginTop:"5%", flexDirection:"row", justifyContent:"space-between"}}>
                    <Bouton styleButton={styles.btnAjout} styleText={styles.textBtn} onPress={() =>  navigation.navigate('inscrDossierMedical4', {prenom: prenom,
                        nom:nom,})} text="Passer"/>
                    <Bouton styleButton={styles.btnAjout} styleText={styles.textBtn} onPress={() =>
                        submitAllergie()} text="Ajouter"/>

                </View>
                
            </View>

        </View>




    );
}

export default InscrDosMed2;

const styles = StyleSheet.create({
    inputView: {
        marginTop:"5%",
        backgroundColor: "#FFFF",
        borderRadius: 30,
        width: "80%",
        height: "15%",
        alignItems: "center",
    },
    inputView2: {
        marginTop:"10%",
        backgroundColor: "#FFFF",
        borderRadius: 20,
        width: "80%",
        height: "40%",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000000",
        fontSize:25,
    },
    TextInputDesc: {
        padding:"5%",
        marginLeft: "6%",
        marginRight: "2%",
        color: "#000000",
        fontSize:20,
    },
    container: {
        backgroundColor: '#1EA584',
        height:"100%",
    },
    text1: {
        fontSize: 40,
        textAlign:"center",
        fontWeight: 'bold',
        color:"#FFFFFF",

    },
    text2: {
        fontSize: 20,
        flex: 1,
        textAlign:"center",
        fontWeight: 'bold',
        color: "grey",
    },
    textBtn:{
        fontSize: 20,
        textAlign:"center",
        fontWeight: 'bold',
        color: "#1EA584",
        flex: 1
    },
    text3: {
        fontSize: 20,
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",
    },
    btnAjout: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 25,
        height: "45%",
        alignItems: "center",
        backgroundColor: "#fff",
        marginTop:"10%",
        marginHorizontal:"5%"
    },
    titre:{
        alignSelf:"center",
        marginTop:"10%",
        color:"grey",
    },

  });