
import React, { Component, useState } from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from "@react-native-picker/picker"

function Bouton(props){
    return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
            <Text style={props.styleText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}


const InscrDosMed3 =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const[titre,setTitre]=useState('');
    const[note,setNote]=useState('');
    const [selectedValue, setSelectedValue] = useState("type");
    const [bouton, setBouton] = useState(false);
    

    return (
        <View style={styles.container}>
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
                        Avez-vous d'autres allergies ? Si oui merci de les mentionner ci-dessous sinon cliquer sur passer :
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
                        multiline={true}
                        placeholderTextColor="#000"
                        onChangeText={(note) => setNote(note)}
                    />
                </ScrollView>
            </View>

            <View style={{height:"15%", marginHorizontal:"15%", flexDirection:"row", justifyContent:"space-between"}}>
                <Bouton styleButton={styles.btnAjout} styleText={styles.text2} onPress={() =>  navigation.navigate('inscrDossierMedical3', {
                prenom: prenom,
                nom:nom,})} text="Ajouter"/>
                <Bouton styleButton={styles.btnAnnuler} styleText={styles.text2} onPress={() =>  navigation.navigate('inscrDossierMedical4', {
                prenom: prenom,
                nom:nom,})} text="Passer"/>

            </View>

                
            </View>


        </View>




    );
}

export default InscrDosMed3;

const styles = StyleSheet.create({
    textProfil: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    profil:{
        marginTop:"10%",
        marginBottom:"5%",
        flexDirection:"row",
        justifyContent : "space-evenly"
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
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "grey",
        alignSelf:"center"
    },
    picker:{
        width: "80%",
        color: "#000000",
    },
    pickerView:{
        flexDirection:"row",
        paddingHorizontal:"10%",
        
    },

    text3:{
        color:"white",
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf:"center"
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
    
    
    text2: {
        fontSize: 20,
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",
        flex: 1
    },
    TextInput: {
        backgroundColor: "grey",
        borderRadius: 30,
        width: "60%",
        height: "100%",
        textAlign:"center",
        paddingHorizontal:"5%",
        color: "#000000",
        alignSelf:"center"
    },
    TextInput2: {
        width: "100%",
        padding:"5%",
        color: "#000000",
        fontSize:17
    },
    inputView: {
        flexDirection:"row",
        paddingHorizontal:"10%",
        marginTop:"1%"
    },
    titre:{
        alignSelf:"center",
        marginTop:"10%",
        color:"grey",
    },

  });