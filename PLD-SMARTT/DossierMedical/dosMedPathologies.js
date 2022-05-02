import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    Alert,
    Pressable, TouchableOpacityComponent
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";

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

function DosMedPathologies({navigation}) {
    const pathologies =["Bipolarité","Sida","test","test2","test3","test4","test5","test6","test7","test8"]
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModalVisible = () => {
        setModalVisible(false);
    }
    return(
        <View style={styles.container}>
            <View style={styles.headerBtn}>
                <Text style={styles.text2}>
                    Dossier Médical
                </Text>
                <PopUp modalVisibility={modalVisible} setter={toggleModalVisible}/>
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
                    <TouchableHighlight key={`${element}-${index}`} style={styles.pathologie} underlayColor="white">
                    <View style={styles.containerPathologie}>
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
                <Bouton styleButton={styles.nouvellePathologieBtn} styleText={styles.text} onPress={() =>  navigation.navigate('DosMedPathologiesAj', {
                })} text="Ajouter une pathologie" icone="plus" styleIcone ={styles.iconDossier}/>
            </View>
        </View>
    )

}

export default DosMedPathologies

const styles = StyleSheet.create({
    pathologie:{
        backgroundColor: "#ffffff",
        width:"80%",
        alignSelf:"center",
        margin:"2%",

    },
    containerPathologie:{
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
        fontSize: 22,
        fontWeight: 'bold',
        color: "#fff",
        alignSelf:"center"
    },
    textModal: {
        marginTop:"5%",
        fontSize: 23,
        fontWeight: 'bold',
        color: "#000",
        alignSelf:"center"
    },
    iconDossier: {
        marginRight:"5%",
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
        color: "#1EA584"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignSelf:"center"
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
    iconChevron: {
        alignSelf:"center",
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
})