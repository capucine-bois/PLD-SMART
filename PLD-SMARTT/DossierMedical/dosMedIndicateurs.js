import React, {useState} from 'react';

import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TouchableHighlight, Modal, Keyboard} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";
import Header from "../Util/Header";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

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

function PopUp(props) {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisibility}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textModal}>Supprimer ?</Text>
                        <View style={styles.boutonsModalView}>
                            <TouchableOpacity
                                style={styles.btnOui}
                                onPress={() => {
                                }}
                            >
                                <Text style={styles.text}>Oui</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.btnNon]}
                                onPress={() => {
                                    props.setter();
                                }}
                            >
                                <Text style={styles.text}>Non</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


function DosMedIndicateurs({navigation}) {
    const indicateurs =["Taille","Poids","test","test2","test3","test4","test5","test6","test7","test8"]
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModalVisible = () => {
        setModalVisible(false);
    }

    return(
        <View style={styles.container}>
            <Pressable onPress={()=>Keyboard.dismiss()}>
                <Header navigation={navigation} title = {"Dossier Médical"} color={"#1EA584"}/>
                <View style = {styles.titre}>
                    <Text style={styles.text}>
                        INDICATEURS
                    </Text>
                </View>
                <PopUp modalVisibility={modalVisible} setter={toggleModalVisible}/>
                <ScrollView style={{height:"63%"}}>
                    <StatusBar style="auto" />
                    {indicateurs.map((element,index) => (
                        <View key={`${element}-${index}`} style={styles.indicateur} underlayColor="white" >
                            <View style={styles.containerIndicateur}>
                                <TouchableOpacity style={styles.elementsView} onPress={()=> navigation.navigate('DosMedIndicateurPres', {})}>
                                    <Text style={styles.text3}>
                                        {element}
                                    </Text>
                                </TouchableOpacity>
                                <MaterialCommunityIcons style = {styles.iconChevron} name='trash-can' color="grey" size={45} onPress={()=>{setModalVisible(true)}}/>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={{height:"15%"}}>
                    <Bouton styleButton={styles.nouvelIndicateurBtn} styleText={styles.text} onPress={() =>  navigation.navigate('DosMedIndicateursAj', {
                    })} text="Ajouter un indicateur" icone="plus" styleIcone ={styles.iconDossier}/>
                </View>
            </Pressable>
        </View>
    )

}

export default DosMedIndicateurs

const styles = StyleSheet.create({
    indicateur:{
        backgroundColor: "#ffffff",
        width:"80%",
        alignSelf:"center",
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
    nouvelIndicateurBtn: {
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
        fontSize: 22,
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
    containerIndicateur:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    elementsView:{
        borderRadius: 10,
        borderWidth : 3,
        width:"80%",
        borderColor: "#1EA584",
        alignItems:"center"
    },
    text3: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#1EA584",
        textAlign:"center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        height: "25%",
        width: "90%",
        backgroundColor: "#C4C4C4",
        borderRadius: 20,
        padding: "5%",
    },
    boutonsModalView:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    btnOui: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 10,
        height: "70%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "red",
        marginTop:"10%"
    },
    btnNon: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 10,
        height: "70%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#695353",
        marginTop:"10%"
    },
    textModal: {
        marginTop:"5%",
        fontSize: 23,
        fontWeight: 'bold',
        color: "#000",
        alignSelf:"center"
    },

})

