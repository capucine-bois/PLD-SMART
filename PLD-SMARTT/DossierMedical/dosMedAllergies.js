import React from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";

function Bouton(props){
    console.log(props.text)
    console.log(props.icone)
    return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
            <Text style={props.styleText}>
                {props.text}
            </Text>
            <MaterialCommunityIcons style= {props.styleIcone} name={props.icone} color="#fff" size={45}/>
        </TouchableOpacity>
    )
}

function DosMedAllergies({navigation}) {
    const allergies =["Rhume des foins","Acariens","test","test2","test3","test4"]
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()
    return(
        <View style={styles.container}>
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
            <View style = {styles.titre}>
                <Text style={styles.text}>
                    ALLERGIES
                </Text>
            </View>
            <ScrollView style={{height:"67%"}}>
                <StatusBar style="auto" />
                    {allergies.map((element,index) => (
                        <Bouton key={`${element}-${index}`} styleButton={styles.allergie} styleText={styles.text3} onPress={() =>  navigation.navigate('BlocNotes2', {
                        })} text={element} icone="plus" styleIcone ={styles.iconDossier}/>
                    ))}
            </ScrollView>

            <View style={{height:"11%"}}>
                <Bouton styleButton={styles.nouvelleAllergieBtn} styleText={styles.text} onPress={() =>  navigation.navigate('BlocNotes2', {
                })} text="Ajouter une allergie" icone="plus" styleIcone ={styles.iconDossier}/>
            </View>
        </View>
    )

}

export default DosMedAllergies

const styles = StyleSheet.create({
    allergie:{
        borderRadius: 10,
        backgroundColor: "#ffffff",
        borderWidth : 5,
        borderColor: "#1EA584",
        margin:8,
        flexDirection:"row",
        justifyContent:"center"
        },
    titre:{
        backgroundColor: "#1EA584",
        borderRadius: 10,
        paddingHorizontal : 50,
        paddingVertical: 10,
        alignSelf:"center",
        margin:25,
    },
    nouvelleAllergieBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        backgroundColor: "#1EA584",
        flexDirection: "row",
        justifyContent : "space-evenly",
        alignSelf:"center",
        margin:20
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#fff",
        alignSelf:"center",
    },
    iconDossier: {
        marginRight:"5%"
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
    text3: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#1EA584",
        alignSelf:"center"
    },




})

