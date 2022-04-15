import React from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function Bouton(props){
    return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
            <Text style={props.styleText}>
                {props.text}
            </Text>
            <MaterialCommunityIcons style = {styles.iconChevron} name='chevron-right' color="#fff" size={45}/>
        </TouchableOpacity>
    )
}

function DossierMedical({navigation}) {
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()
    const dateNaissance = "10/04/1947"
    const age = 75
    const poids = 67
    const taille = "1m71"
	return (

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
            <View style={styles.profil}>
                <MaterialCommunityIcons style = {styles.iconDossier} name='account-circle-outline' color="#000" size={75}/>
                <View>
                    <Text style={styles.textProfil}>{prenom} {nom}</Text>
                    <Text style={styles.textProfil}>Né(e) le : {dateNaissance}</Text>
                    <Text style={styles.textProfil}>{age} ans</Text>
                </View>
            </View>
            <View style={styles.mensurations}>
                <Text style={styles.text}>Poids : {poids} kg</Text>
                <Text style={styles.text}>Taille : {taille}</Text>
            </View>
            <Bouton styleButton={styles.etiquette}  styleText={styles.textEtiquette} onPress={() =>  navigation.navigate('DosMedAllergies')}
                    text="Allergies" />
            <View style={styles.contenuEtiquette}>
                    <Text style={styles.textContenuEtiquette}>Rhume des foins</Text>
                    <Text style={styles.textContenuEtiquette}>Acariens</Text>
                </View>
            <Bouton styleButton={styles.etiquette}  styleText={styles.textEtiquette} onPress={() =>  navigation.navigate('DosMedAllergies')}
                    text="Pathologies" />
            <View style={styles.contenuEtiquette}>
                    <Text style={styles.textContenuEtiquette}>Hypertension artérielle</Text>
            </View>
            <Bouton styleButton={styles.etiquette}  styleText={styles.textEtiquette} onPress={() =>  navigation.navigate('DosMedAllergies')}
                    text="Vaccins" />
            <View style={styles.contenuEtiquette}>
            </View>
            <Bouton styleButton={styles.etiquette}  styleText={styles.textEtiquette} onPress={() =>  navigation.navigate('DosMedAllergies')}
                    text="Appareillages" />
                <View style={styles.contenuEtiquette}>
                    <Text style={styles.textContenuEtiquette}>Prothèses auditives</Text>
                    <Text style={styles.textContenuEtiquette}>Lunettes</Text>
                </View>
            <Bouton styleButton={styles.etiquette}  styleText={styles.textEtiquette} onPress={() =>  navigation.navigate('DosMedAllergies')}
                    text="Indicateurs" />
            <View style={styles.contenuEtiquette}>
            </View>
        </ScrollView>
    </View>)
}

export default DossierMedical

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textProfil: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    mensurations:{
        flexDirection: "row",
        justifyContent : "space-evenly",
        borderBottomColor: '#D6D2D2',
        borderBottomWidth: 2,
        borderTopColor: "#D6D2D2",
        borderTopWidth: 2,
        paddingVertical:"5%",
        marginBottom : "7%",
        marginTop : "7%",
        marginStart : "7%",
        marginEnd : "7%"

    },
    profil:{
        marginTop:"10%",
        marginBottom:"5%",
        flexDirection:"row",
        justifyContent : "space-evenly"
    },
    etiquette:{
        backgroundColor: "#1EA584",
        padding: 15,
        flexDirection:"row",
        justifyContent : "space-between"
    },
    contenuEtiquette:{

    },
    textEtiquette:{
        fontSize: 28,
        fontWeight: 'bold',
        textAlign:"left" ,
        color: "#fff",
        alignSelf:"center"
    },
    textContenuEtiquette: {
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomColor: '#D6D2D2',
        borderBottomWidth: 1,
        marginLeft:"2%",
        marginRight:"2%",
        paddingVertical:"2%"
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

    },
    iconChevron: {
        marginRight:"5%",
        alignSelf:"center"

    }
  });