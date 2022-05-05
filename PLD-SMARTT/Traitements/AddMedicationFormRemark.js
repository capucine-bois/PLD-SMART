import Header from "../Util/Header";
import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import FormField from "../Util/FormField";
import React, {useState} from "react";
import styles from "../Style/styleHome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";



const AddMedicationFormRemark = ({route,navigation})=> {

    const [remark, setRemark] = useState("");
    const addMedic = async () => {
        await addRemark()
        navigation.navigate("AddMedicationForm",{
            "idMedication":route.params.idMedication,
            "idTreatment":route.params.idTreatment,
            "reset":true,
        })
    }
    const addPic = async () => {
        await addRemark()
        navigation.navigate("TreatmentCamera",{
            "idMedication":route.params.idMedication,
            "idTreatment":route.params.idTreatment
        })
    }

    const endTreat = async () =>{
        await addRemark()
        navigation.navigate("Traitements")
    }


    const addRemark = async () => {
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "remark": remark,
            })
        }

        await fetch(route.params.url + '/medication/' + route.params.idMedication, params)


    }

    return(
        <View style={style.container}>
            <Header navigation={navigation} title = {"Traitement"} color={"#2DB142"}/>
            <Text style={style.title}> Nouveau Médicament </Text>

            <Text style={style.title2}> Commentaire </Text>
            <TextInput
                style={style.remarkInput}
                value={remark}
                multiline={true}
                onChangeText={setRemark}
            />
            <View style={style.buttonView}>
                <Pressable style={style.button} onPress={addPic}>
                    <Text style={style.buttonText}>
                        Ajouter une photo
                    </Text>
                </Pressable>
                <Pressable style={style.button} onPress={addMedic}>
                    <Text style={style.buttonText}>
                        Ajouter un nouveau medicament
                    </Text>
                </Pressable>
                <Pressable style={style.button} onPress={endTreat}>
                    <Text style={style.buttonText}>
                        Terminer le traitement
                    </Text>
                </Pressable>
            </View>
        </View>
    )

}

export default AddMedicationFormRemark;

const style = StyleSheet.create({

    title:{
        marginLeft:"auto",
        marginRight:"auto",
        fontSize:35,
        marginBottom:25,
        color:"#2DB142",
        fontWeight:"bold",
    },
    button:{
        borderRadius:10,
        backgroundColor:"#2DB142",
        width:150,
        height:40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    buttonText:{
    },
    buttonView:{
        marginTop:25,
        height:"30%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
    },
    title2:{
        fontSize:25,
        color:"#2DB142",
        fontWeight:"bold",
        marginLeft:20
    },
    remarkInput:{
        width:"95%",
        textAlignVertical:"top",
        height:"30%",
        borderStyle:"solid",
        paddingLeft:"5%",
        paddingTop:"5%",
        marginLeft:"auto",
        marginRight:"auto",
        borderColor:"#2DB142",
        borderRadius:10,
        borderWidth:5,
        marginTop:10
    },
    container:{
        height:"100%",
    }

})