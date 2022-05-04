import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Pressable, Keyboard} from 'react-native';
import {StatusBar} from "expo-status-bar";
import FormField from "../Util/FormField";
import Header from "../Util/Header";

function Bouton(props){
    return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
            <Text style={props.styleText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

function DosMedAllergiesAj({navigation}) {
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()
    const[title,setTitle]=useState('');
    const [remark, setRemark] = useState("");

    return(
        <View style={styles.container}>
            <Pressable onPress={()=>Keyboard.dismiss()}>
                <Header navigation={navigation} title = {"Dosser Médical"} color={"#1EA584"}/>
                <StatusBar style="auto" />
                <View style = {styles.titre}>
                    <Text style={styles.text}>
                        Nouvelle allergie
                    </Text>
                </View>
                <View style={{height:"75%"}}>
                    <FormField label = {"Titre"} color={"#1EA584"} field={title} setField={setTitle}/>
                    <Text style={styles.title2}> Descriptif </Text>
                    <TextInput
                        style={styles.remarkInput}
                        value={remark}
                        multiline={true}
                        onChangeText={setRemark}
                    />
                    <View style={{height:"15%", marginHorizontal:"15%", marginTop:"10%", flexDirection:"row", justifyContent:"space-between"}}>
                        <Bouton styleButton={styles.btnAjout} styleText={styles.text2} onPress={() =>  navigation.navigate('DosMedAllergies', {
                        })} text="Ajouter"/>
                        <Bouton styleButton={styles.btnAnnuler} styleText={styles.text2} onPress={() =>  navigation.navigate('DosMedAllergies', {
                        })} text="Annuler"/>
                    </View>
                </View>
            </Pressable>
        </View>
    )

}

export default DosMedAllergiesAj

const styles = StyleSheet.create({
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#1EA584",
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
    titre:{
        alignSelf:"center",
        margin:"10%",
        color:"#000",

    },
    title2:{
        fontSize:25,
        color:"#1EA584",
        fontWeight:"bold",
        marginLeft:20,
        marginTop:"10%"
    },
    remarkInput:{
        width:"95%",
        textAlignVertical:"top",
        height:"35%",
        borderStyle:"solid",
        paddingLeft:"5%",
        paddingTop:"5%",
        marginLeft:"auto",
        marginRight:"auto",
        borderColor:"grey",
        borderRadius:10,
        borderWidth:5,
        marginTop:10
    }
})