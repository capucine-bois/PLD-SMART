
import React, { Component, useState } from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from "@react-native-picker/picker"
import AsyncStorage from "@react-native-async-storage/async-storage";

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
                       setTitre('')
                       setNote('')
                    }
                });
        });
            
      };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerBtn}>
                <Text style={styles.text2}>
                    
                </Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons style= {{marginRight:"5%"}} name='home' color="#fff" size={30} onPress={() =>  navigation.navigate('Accueil', {
                        prenom: prenom,
                        nom: nom,
                    })}/>
                </TouchableOpacity>



            </View>
            <View style={{alignItems:"center"}}>
                    <Text style={styles.text1}>
                        Bonjour, {prenom} {nom} 
                    </Text>
                    <View style={{marginTop:"2%",marginBottom:'5%'}}>
                    <Text style={styles.text3}>
                        Avez-vous des allergies ? Si oui merci de les mentionner ci-dessous sinon cliquer sur passer :
                    </Text>
            </View>


            <View style={styles.inputView}>
                <Text style={styles.text3}>
                    Titre
                </Text>
                <TextInput
                    style={styles.TextInput}
                    placeholderTextColor="#000"
                    onChangeText={(titre) => setTitre(titre)}
                />
            </View>

            <View style={styles.pickerView}>
                <Text style={styles.text3}>
                    Type
                </Text>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Alimentaire" value="alim" />
                    <Picker.Item label="Saisonnière" value="saison" />
                    <Picker.Item label="Perannuelle" value="peran" />
                    <Picker.Item label="Au venin" value="venin" />
                </Picker>
            </View>
            <View style={styles.descriptif}>
                <Text style={styles.text4}>
                    Descriptif
                </Text>
                <ScrollView style={styles.scrollView}>
                    <TextInput
                        style={styles.TextInput2}
                        
                        textAlignVertical='top'
                        placeholderTextColor="#000"
                        onChangeText={(note) => setNote(note)}
                    />
                </ScrollView>
            </View>

            <View style={{height:"15%", marginHorizontal:"15%", flexDirection:"row", justifyContent:"space-between"}}>
                <Bouton styleButton={styles.btnAjout} styleText={styles.text2} onPress={() =>  submitAllergie()} text="Ajouter"/>
                <Bouton styleButton={styles.btnAnnuler} styleText={styles.text2} onPress={() =>  navigation.navigate('inscrDossierMedical4', {
                prenom: prenom,
                nom:nom,})} text="Passer"/>

            </View>

                
            </View>


        </ScrollView>




    );
}

export default InscrDosMed2;

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    textProfil: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    inputView: {
        marginTop:"10%",
        backgroundColor: "#FFFF",
        borderRadius: 30,
        width: "80%",
        height: 70,
        

        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000000",
        fontSize:25,
    },
    
    profil:{
        marginTop:"10%",
        marginBottom:"5%",
        flexDirection:"row",
        justifyContent : "space-evenly"
    },
    
    
    headerBtn: {
        width: "100%",
        height: "11%",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingBottom:20,
        backgroundColor: "#1EA584"

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
    text3: {
        fontSize: 20,
        
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",

    },
    iconChevron: {
        marginRight:"5%",
        alignSelf:"center"

    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        
        backgroundColor: "#FFFF",
        
    },
    iconDossier: {
        marginRight:"5%"
    },
    descriptif:{
        flexDirection:"column",
        width: "80%",
        height:"20%",
        
        alignSelf:"center",
    },
    scrollView:{
        borderWidth: 5,
        borderColor:"grey",
        borderRadius:15,
    },
    
    picker:{
        width: "80%",
        color: "#000000",
    },
    pickerView:{
        flexDirection:"row",
        paddingHorizontal:"10%",
        
    },
    btnAjout: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 25,
        height: "45%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "grey",
        marginTop:"10%"
    },
    btnAnnuler: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 25,
        height: "45%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#695353",
        marginTop:"10%"
    },
    text4:{
        color:"white",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:"5%",
        marginBottom:"2%"
    },

    TextInput2: {
        width: "100%",
        padding:"5%",
        color: "#000000",
        fontSize:17
    },

    titre:{
        alignSelf:"center",
        marginTop:"10%",
        color:"grey",
    },

  });