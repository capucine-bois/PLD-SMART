import {React,useState} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";
import FormField from "../Util/FormField";
import DateCompletion from "../Util/DateCompletion";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
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

function DosMedVaccinsAj({navigation,route}) {
    //const prenom = "Gérard"
    //const nom = "Dupont".toUpperCase()

    const {prenom,nom,appareillages,allergies,pathologies,vaccins}=route.params
    const[title,setTitle]=useState('');
    const[date,setDate]=useState('');
    const[lot,setLot]=useState('');


    const addVaccin= () => {
        var moisDeb= date.slice(3,5);
        var jourDeb = date.slice(0,2);
        var yearDeb = date.slice(6,10);
        var dateDebFormate = yearDeb + '-'+moisDeb+'-'+jourDeb ;
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name":title,
                "lot": lot ,
                "lastBooster":dateDebFormate,
                
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/vaccine/'+token,params)
                .then(response => {
                    if(response.ok) {
                        navigation.navigate('DosMedVaccins', {prenom:prenom,nom:nom,appareillages:appareillages,pathologies:pathologies,vaccins:vaccins,allergies:allergies
                        })
                    }
                });
        });
            
      };

    return(
        <View style={styles.container}>
            <Pressable onPress={()=>Keyboard.dismiss()}>
                <KeyboardAvoidingView >
                <View style={styles.headerBtn}>
                    <Text style={styles.text2}>
                        Dossier Médical
                    </Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons style= {{marginRight:"5%"}} name='home' color="#fff" size={30} onPress={() =>  navigation.navigate('Accueil', {
                            prenom: prenom,
                            nom: nom,
                        })}/>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
                <View style = {styles.titre}>
                    <Text style={styles.text}>
                        Nouveau vaccin
                    </Text>
                </View>
                    <View style={{height:"45%", backgroundColor:"white", marginTop: "10%", marginBottom:"20%"}}>
                        <FormField label = {"Nom"} color={"#1EA584"} field={title} setField={setTitle}/>
                        <DateCompletion label = {"Date"} color={"#1EA584"} field={date} setField={setDate} keyboardType={'numeric'}/>
                        <FormField label = {"Lot"} color={"#1EA584"} field={lot} setField={setLot}/>
                    </View>
                <View style={{height:"15%", marginHorizontal:"15%", flexDirection:"row", justifyContent:"space-between"}}>
                    <Bouton styleButton={styles.btnAjout} styleText={styles.text2} onPress={() =>  addVaccin()} text="Ajouter"/>
                    <Bouton styleButton={styles.btnAnnuler} styleText={styles.text2} onPress={() =>  navigation.navigate('DosMedVaccins', {prenom:prenom,nom:nom,appareillages:appareillages,pathologies:pathologies,vaccins:vaccins,allergies:allergies
                    })} text="Annuler"/>
                </View>
                </KeyboardAvoidingView>
            </Pressable>
        </View>
    )

}

export default DosMedVaccinsAj

const styles = StyleSheet.create({
    containerKeyBoard:{
        flex:1
    },
    iconDossier: {
        marginRight:"5%"
    },
    descriptif:{
        flexDirection:"column",
        width: "80%",
        height:"40%",
        marginTop:"10%",
        alignSelf:"center",
    },
    scrollView:{
        borderWidth: 5,
        borderColor:"#1EA584",
        borderRadius:15,
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#1EA584",
        alignSelf:"center"
    },
    picker:{
        backgroundColor: "#B8E6DA",
        width: "60%",
        paddingHorizontal:"5%",
        color: "#000000",
        alignSelf:"center"
    },
    text3:{
        color:"#1EA584",
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
        backgroundColor: "#1EA584",
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
        color:"#1EA584",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:"5%",
        marginBottom:"2%"
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
        backgroundColor: '#ffffff'
    },
    text2: {
        fontSize: 20,
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",
        flex: 1
    },
    TextInput: {
        backgroundColor: "#B8E6DA",
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
        justifyContent:"space-between",
        paddingHorizontal:"10%",
        marginTop:"5%"
    },
    titre:{
        alignSelf:"center",
        margin:"10%",
        color:"#000",

    },
    container2: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
})