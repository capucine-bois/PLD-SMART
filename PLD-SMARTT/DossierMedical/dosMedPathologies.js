import React from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TouchableHighlight} from 'react-native';
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
function _onLongPressButton() {
    alert('You long-pressed the button!')
}

function DosMedPathologies({navigation}) {
    const pathologies =["Bipolarité","Sida","test","test2","test3","test4","test5","test6","test7","test8"]
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
                    PATHOLOGIES
                </Text>
            </View>
            <ScrollView style={{height:"63%"}}>
                <StatusBar style="auto" />
                {pathologies.map((element,index) => (
                    <TouchableHighlight key={`${element}-${index}`} style={styles.pathologie} onLongPress={_onLongPressButton} underlayColor="white">
                        <Text style={styles.text3}>
                            {element}
                        </Text>
                    </TouchableHighlight>
                ))}
            </ScrollView>

            <View style={{height:"15%"}}>
                <Bouton styleButton={styles.nouvellePathologieBtn} styleText={styles.text} onPress={() =>  navigation.navigate('DosMedPathologiesAj', {
                })} text="Ajouter une pathologie" icone="plus" styleIcone ={styles.iconDossier}/>
            </View>
        </View>
    )

}

export default DosMedPathologies

const styles = StyleSheet.create({
    pathologie:{
        borderRadius: 10,
        backgroundColor: "#ffffff",
        borderWidth : 3,
        width:"80%",
        alignSelf:"center",
        borderColor: "#1EA584",
        margin:"2%",
    },
    titre:{
        backgroundColor: "#1EA584",
        borderRadius: 10,
        paddingHorizontal : "25%",
        paddingVertical: "3%",
        alignSelf:"center",
        margin:"5%",
    },
    nouvellePathologieBtn: {
        width: "80%",
        flexDirection:"row",
        borderRadius: 25,
        height: "50%",
        alignItems: "center",
        alignSelf:"center",
        justifyContent: "space-evenly",
        backgroundColor: "#1EA584",
        marginTop:"6%"
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        color: "#fff",
        alignSelf:"center"
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
        textAlign:"center"
    },

})