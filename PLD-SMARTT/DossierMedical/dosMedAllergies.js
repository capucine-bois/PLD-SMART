import React from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";

function Bouton(props){
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
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.headerBtn} onPress={() =>  navigation.navigate('Accueil', {
                prenom: prenom,
                nom: nom,
            })}>
                <Text style={styles.text2}>
                    Dossier Médical
                </Text>
                <MaterialCommunityIcons style= {{marginRight:"5%"}} name='home' color="#fff" size={30}/>
            </TouchableOpacity>
            <ScrollView style={{height:"89%"}}>
                <StatusBar style="auto" />
                <Bouton styleButton={styles.nouvelleNoteBtn} styleText={styles.text} onPress={() =>  navigation.navigate('BlocNotes2', {
                    prenom: prenom,
                    nom: nom,
                })} text="Ajouter une allergie" icone="plus" styleIcone ={styles.iconDossier}/>
            </ScrollView>
        </View>
    )

}
export default DosMedAllergies

const styles = StyleSheet.create({
    nouvelleNoteBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        backgroundColor: "#1EA584",
        flexDirection:"row",
        alignItems: "center"
    },
    text: {
        fontSize: 25,
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",


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
        flex: 1,
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",

    }




})

