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
import Header from "../Util/Header";

function PopUp(props) {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationTyp e="slide"
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

function DosMedPathologies({navigation,route}) {
    //const pathologies =["Bipolarité","Sida","test","test2","test3","test4","test5","test6","test7","test8"]
    //const prenom = "Gérard"
    //const nom = "Dupont".toUpperCase()

    const {prenom,nom,appareillages,allergies,pathologies,vaccins}=route.params
        const [modalVisible, setModalVisible] = useState(false);

    const toggleModalVisible = () => {
        setModalVisible(false);
    }
    return(
        <View style={styles.container}>
            
            <Header navigation={navigation} title = {"Dosser Médical"} color={"#1EA584"}/>
            <View style = {styles.titre}>
                <Text style={styles.text}>
                    PATHOLOGIES
                </Text>
            </View>
            <ScrollView style={{height:"63%"}}>
                <StatusBar style="auto" />
                {pathologies.map((item) => {
                            return(
                            <TouchableHighlight key={item.id} style={styles.allergie} underlayColor="white">
                                <View style={styles.containerPathologie}>
                                    <View style={styles.elementsView}>
                                        <Text style={styles.text3}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <MaterialCommunityIcons style = {styles.iconChevron} name='trash-can' color="grey" size={45} onPress={()=>{setModalVisible(true)}}/>
                                </View>
                            </TouchableHighlight>
                            );
                        })}
            </ScrollView>

            <View style={{height:"15%"}}>
                <Bouton styleButton={styles.nouvellePathologieBtn} styleText={styles.text} onPress={() => { navigation.navigate('DosMedPathologiesAj'
                ,{prenom:prenom,nom:nom,appareillages:appareillages,pathologies:pathologies,vaccins:vaccins,allergies:allergies})}} text="Ajouter une pathologie" icone="plus"/>
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