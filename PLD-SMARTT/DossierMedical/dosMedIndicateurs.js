import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TouchableHighlight, Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";
import Header from "../Util/Header";

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
    const indicateurs =["Indice glycémique","Poids","test","test2","test3","test4","test5","test6","test7","test8"]
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModalVisible = () => {
        setModalVisible(false);
    }
    return(
        <View style={styles.container}>
            <Header navigation={navigation} title = {"Dosser Médical"} color={"#1EA584"}/>
            <View style = {styles.titre}>
                <Text style={styles.text}>
                    INDICATEURS
                </Text>
            </View>
            <ScrollView style={{height:"63%"}}>
                <StatusBar style="auto" />
                {indicateurs.map((element,index) => (
                    <TouchableHighlight key={`${element}-${index}`} style={styles.indicateur} underlayColor="white">
                        <View style={styles.containerIndicateur}>
                            <View style={styles.elementsView}>
                                <Text style={styles.text3}>
                                    {element}
                                </Text>
                            </View>
                            <MaterialCommunityIcons style = {styles.iconChevron} name='trash-can' color="grey" size={45} onPress={()=>{setModalVisible(true)}}/>
                        </View>
                    </TouchableHighlight>
                ))}
            </ScrollView>

            <View style={{height:"15%"}}>
                <Bouton styleButton={styles.nouvelIndicateurBtn} styleText={styles.text} onPress={() =>  navigation.navigate('DosMedIndicateursAj', {
                })} text="Ajouter un indicateur" icone="plus" styleIcone ={styles.iconDossier}/>
            </View>
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
        fontSize: 24,
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

