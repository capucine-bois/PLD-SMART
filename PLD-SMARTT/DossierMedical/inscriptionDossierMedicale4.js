
import React, { Component, useState } from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from "@react-native-picker/picker"
import DateTimePickerModal from "react-native-modal-datetime-picker";
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


const InscrDosMed4 =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const[titre,setTitre]=useState('');
    const[note,setNote]=useState('');
    const [selectedValue, setSelectedValue] = useState("type");
    const [bouton, setBouton] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dateFormate,setDateFormate]=useState('')
    const [dateFormate2,setDateFormate2]=useState( 'Entrer la date de début')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
       };
       const showHourPicker = () => {
         setHourPickerVisibility(true);
       };
       const hideDatePicker = () => {
         setDatePickerVisibility(false);
       };
       const hideHourPicker = () => {
         setHourPickerVisibility(false);
       };
       const handleConfirm = (date) => {
         setDate(date);
         var dd = date.getDate();
         var mm = date.getMonth() + 1; //January is 0!
         var yyyy = date.getFullYear();
         var hh=date.getHours();
         var min=date.getMinutes();
       
         if (dd < 10) {
             dd = '0' + dd;
         }
         if (mm < 10) {
             mm = '0' + mm;
         }
         if(hh<10){
           hh='0'+hh;
         }
         if(min<10){
           min='0'+min;
         }
         setDateFormate(  yyyy + "-" + mm + "-" + dd+'T'+hh+':'+min+':00');
         setDateFormate2( dd+"/"+mm+"/"+yyyy+' à ' + hh+":"+min);
         hideDatePicker();
       };

       const submitPathologie= () => {
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name":titre,
                "description":note,
                "startDate":dateFormate,

                
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/pathology/'+token,params)
                .then(response => {
                    if(response.ok) {
                       setTitre('')
                       setNote('')
                       
                    }
                });
        });
            
      };
    

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
                        Avez-vous des Pathologies ? Si oui merci de les mentionner ci-dessous sinon cliquer sur passer :
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
            <View style={styles.inputView}>
            <Text style={styles.text3}>
                    Date
                </Text>
            <TouchableOpacity style={styles.DateInput}  onPress={showDatePicker}  >
                    <Text style={{textAlign:'center',alignSelf:'center'}}>
                       {dateFormate2}
                    </Text>
                    
                </TouchableOpacity>
                
                
                  <DateTimePickerModal
                  
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    locale="fr"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                
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
                <Bouton styleButton={styles.btnAjout} styleText={styles.text2} onPress={() =>  submitPathologie()} text="Ajouter"/>
                <Bouton styleButton={styles.btnAnnuler} styleText={styles.text2} onPress={() =>  navigation.navigate('inscrDossierMedical5', {
                prenom: prenom,
                nom:nom,})} text="Passer"/>

            </View>

                
            </View>


        </View>




    );
}

export default InscrDosMed4;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    DateInput: {
        
        
        backgroundColor: "grey",
        borderRadius: 30,
        width: "60%",
        height: "100%",
        textAlign:"center",
        paddingHorizontal:"5%",
        color: "#000000",
        alignSelf:"center"
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
        height:"40%",
        marginTop:'5%',
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
        marginTop:"5%"
    },
    titre:{
        alignSelf:"center",
        marginTop:"10%",
        color:"grey",
    },

  });