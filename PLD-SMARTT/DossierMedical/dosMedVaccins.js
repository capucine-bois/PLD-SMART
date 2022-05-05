import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TouchableHighlight, Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";
import Header from "../Util/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useIsFocused} from "@react-navigation/native";
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
                                onPress={props.valider
                                }
                            >
                                <Text style={styles.text}>Oui</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.btnNon]}
                                onPress={
                                    props.annuler
                                }
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

function DosMedVaccins({navigation,route}) {
    //const pathologies =["Bipolarité","Sida","test","test2","test3","test4","test5","test6","test7","test8"]
    //const prenom = "Gérard"
    const {prenom,nom}=route.params
    const [allergies,setAllergies]=useState([])
    const [pathologies,setPathologie]=useState(route.params.pathologies)
    const [vaccins, setVaccins]=useState(route.params.vaccins)
    const [appareillages,setAppareillages]=useState(route.params.appareillages)
    const [modalVisible, setModalVisible] = useState(false);
    const isFocused = useIsFocused();
    const [idItemSelectionne,setIdItemSelectionne]=useState('0');
    const toggleModalVisible = () => {

        setModalVisible(false);
    }

    const toggleModalVisible2 = (id) => {
        deleteVaccin(id)
        //setModalVisible(false);
    }
    const checkMedicalFile = () => {
        const params = {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        }
        AsyncStorage.getItem('token')
        .then((token) => {
             fetch(route.params.url+'/user/token/'+token,params)
             .then(response => response.json())
             .then(data => {
                setAllergies(data.medicalFile.allergies)
                setPathologie(data.medicalFile.pathologies)
                setVaccins(data.medicalFile.vaccines)
                setAppareillages(data.medicalFile.equipments)
                
             })
          })
      }

      const deleteVaccin = (id) => {
        const params = {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
        }
        AsyncStorage.getItem('token')
        .then((token) => {
             fetch(route.params.url+'/vaccine/'+id,params)
             .then(response => {
                if(response.ok){
                    setModalVisible(false)
                    checkMedicalFile()
                }});
             
          })
      }


    useEffect(() => {
        if(isFocused){
        checkMedicalFile();
        }
      }, [isFocused]);
    return(
        <View style={styles.container}>
            <Header navigation={navigation} title = {"Dossier Médical"} color={"#1EA584"}/>
            <View style = {styles.titre}>
                <Text style={styles.text}>
                    VACCINS
                </Text>
            </View>
            <PopUp modalVisibility={modalVisible} annuler={()=>toggleModalVisible()} valider={()=>toggleModalVisible2(idItemSelectionne)} />
            <ScrollView style={{height:"63%"}}>
                <StatusBar style="auto" />
                {vaccins.map((item) => {
                            return(
                            <TouchableHighlight key={item.id} style={styles.vaccin} underlayColor="white">
                                <View style={styles.containerVaccin}>
                                    <View style={styles.elementsView}>
                                        <Text style={styles.text3}>
                                            {item.name.trim()}
                                        </Text>
                                    </View>
                                    <MaterialCommunityIcons style = {styles.iconChevron} name='trash-can' color="grey" size={45} onPress={()=>{setModalVisible(true),setIdItemSelectionne(item.id)}}/>
                                </View>
                            </TouchableHighlight>
                            );
                        })}
            </ScrollView>

            <View style={{height:"15%"}}>
                <Bouton styleButton={styles.nouveauVaccinBtn} styleText={styles.text} onPress={() =>  navigation.navigate('DosMedVaccinsAj', {prenom:prenom,nom:nom,appareillages:appareillages,pathologies:pathologies,vaccins:vaccins,allergies:allergies
                })} text="Ajouter un vaccin" icone="plus" styleIcone ={styles.iconDossier}/>
            </View>
        </View>
    )

}

export default DosMedVaccins

const styles = StyleSheet.create({
    vaccin:{
        backgroundColor: "#ffffff",
        width:"80%",
        alignSelf:"center",
        margin:"2%",
    },
    containerVaccin:{
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
    nouveauVaccinBtn: {
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
        flex: 1,

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

