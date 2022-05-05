
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
    const [value, onChangeText] = React.useState(''); // tracks the value of the text input.
    const [valueAl, onChangeTextAl] = React.useState(''); // tracks the value of the text input.
    const empty= ()=>{
        onChangeText(''), [];
        onChangeTextAl(''),[]
    }
    const clearInput = React.useCallback(empty);

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
                       clearInput()
                    }
                });
        });
            
      };

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title = {"Tutoriel"} color={"#1EA584"}/>
            <View style={{alignItems:"center", height:"30%"}}>
                <Text style={styles.text1}>
                    Bonjour, {prenom} {nom}
                </Text>
                <View style={{marginTop:"2%",marginBottom:'5%'}}>
                    <Text style={styles.text3}>
                        Avez-vous des allergies ? Si non, vous pouvez cliquer sur "passer". Si oui, merci de les mentionner ci-dessous et de les ajouter les unes après les autres en cliquant sur "ajouter". Une fois terminé, cliquez sur "passer"
                    </Text>
                </View>
            </View>

            <View style={{height:"65%", alignItems:"center"}}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Nom de l'allergène"
                        placeholderTextColor="#003f5c"
                        onChangeText={(titre) => {setTitre(titre) ; onChangeTextAl(titre)}}
                        value={valueAl}
                    />
                </View>

                <View style={styles.inputView2}>
                    <TextInput
                        style={styles.TextInputDesc}
                        placeholder="Descriptif"
                        placeholderTextColor="#003f5c"
                        onChangeText={(note) => {setNote(note) ; onChangeText(note)}}
                        value={value}
                        multiline={true}
                    />
                </View>

                <View style={{height:"20%", marginHorizontal:"10%", marginTop:"5%", flexDirection:"row", justifyContent:"space-between"}}>
                    <Bouton styleButton={styles.btnPasser} styleText={styles.textBtn2} onPress={() =>  navigation.navigate('inscrDossierMedical4', {prenom: prenom,
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
        color: "#000000",
        fontSize:20,
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
    textBtn2:{
        fontSize: 20,
        textAlign:"center",
        fontWeight: 'bold',
        color: "white",
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
    btnPasser: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 25,
        height: "45%",
        alignItems: "center",
        backgroundColor: "#003f5c",
        marginTop:"10%",
        marginHorizontal:"5%"
    },
    titre:{
        alignSelf:"center",
        marginTop:"10%",
        color:"grey",
    },

  });