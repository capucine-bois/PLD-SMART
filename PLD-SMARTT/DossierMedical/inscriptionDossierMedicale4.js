import React, { Component, useState } from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from "@react-native-picker/picker"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
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


const InscrDosMed4 =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const[titre,setTitre]=useState('');
    const[note,setNote]=useState('');
    const [selectedValue, setSelectedValue] = useState("type");
    const [bouton, setBouton] = useState(false);
    const [date, setDate] = useState(new Date());
    const [Bnom, setBNom] = useState(false);
    const [Bdesc, setBDesc] = useState(false);
    const [dateFormate,setDateFormate]=useState('')
    const [dateFormate2,setDateFormate2]=useState( 'Entrer la date de début')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [value, onChangeText] = React.useState(''); // tracks the value of the text input.
    const [valueAl, onChangeTextAl] = React.useState(''); // tracks the value of the text input.
    const empty= ()=>{
        onChangeText(''), [];
        onChangeTextAl(''),[]
    }
    const clearInput = React.useCallback(empty);
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
                            clearInput();
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
                        Avez-vous des Pathologies ? Si oui, merci de les mentionner ci-dessous, sinon cliquez sur "passer"
                    </Text>
                </View>
            </View>

            <View style={{height:"55%"}}>
                <View style={{height:"35%", alignItems:"center"}}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Nom de la pathologie"
                            placeholderTextColor="#003f5c"
                            onChangeText={(titre) => {setTitre(titre) ; onChangeTextAl(titre); setBNom(true)}}
                            value={valueAl}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TouchableOpacity style={styles.DateInput}  onPress={showDatePicker}  >
                            <Text style={styles.TextInputDate}>
                                {dateFormate2}
                            </Text>

                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            locale="fr"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />

                    </View>
                </View>
                <View style={{alignItems:"center"}}>
                    <View style={styles.inputView2}>
                        <TextInput
                            style={styles.TextInputDesc}
                            placeholder="Descriptif"
                            placeholderTextColor="#003f5c"
                            onChangeText={(note) => {setNote(note) ; onChangeText(note) ; setBDesc(true)}}
                            value={value}
                            multiline={true}
                        />
                    </View>
                </View>
                <View style={{height:"30%", marginHorizontal:"10%", flexDirection:"row", alignSelf:"center"}}>
                    <TouchableOpacity style={styles.btnPasser} onPress={() =>  navigation.navigate('inscrDossierMedical5', {prenom: prenom,
                        nom:nom,})} text="Passer">
                        <Text style={styles.textBtn2}>
                            Passer
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={!(Bnom)} style={styles.btnAjout} onPress={() =>  submitPathologie()} text="Ajouter">
                        <Text style={styles.textBtn}>
                            Ajouter
                        </Text>
                    </TouchableOpacity>


                </View>
            </View>
        </View>




    );
}

export default InscrDosMed4;

const styles = StyleSheet.create({
    inputView: {
        marginVertical:"3%",
        backgroundColor: "#FFFF",
        borderRadius: 30,
        width: "80%",
        height: "45%",
        alignItems: "center",
    },
    inputView2: {
        marginTop:"10%",
        backgroundColor: "#FFFF",
        borderRadius: 20,
        width: "80%",
        height: "55%",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        color: "#000000",
        fontSize:20
    },
    TextInputDate: {
        height: 50,
        flex: 1,
        padding: 10,
        color: "#003f5c",
        fontSize:20,
        marginTop:"2%"
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
        marginHorizontal:"5%"
    },
    btnPasser: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 25,
        height: "45%",
        alignItems: "center",
        backgroundColor: "#003f5c",
        marginHorizontal:"5%"
    },
    titre:{
        alignSelf:"center",
        marginTop:"10%",
        color:"grey",
    }

});