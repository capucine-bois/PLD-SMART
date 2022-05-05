import React, { useState,useEffect } from 'react';
import {
    FlatList,
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Pressable,
    KeyboardAvoidingView, Platform
} from 'react-native';
import Header from "../Util/Header";
import FormField from "../Util/FormField";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";



const AddTreatmentForm = ({route,navigation})=> {

    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [remark, setRemark] = useState("");
    const [id,setId] = useState(-1);

    if(route.params.back){
        const params = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }
    }

    const deleteTreatment = () => {
        if(id == -1 ){
            navigation.navigate('Traitements')
        }
        else{
            const params = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            }
            if(route.params.idTreatment != null){
                setId(route.params.idTreatment);
            }
            fetch(route.params.url+'/treatment/id/'+id,params)
                .then(response =>{
                    if(response.ok){
                        navigation.navigate('Traitements')
                    }
                    else{
                        alert("Il y a eu un problème")
                    }

                })


        }
    }
    const addTreatment = () => {
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name":title,
                "remark":remark,
            })
        }

        AsyncStorage.getItem('token')
            .then((token) => {
                fetch(route.params.url + '/treatment/user/' + token, params)
                    .then(response => response.json())
                    .then(data => {
                        navigation.navigate('AddMedicationForm', {
                            "idTreatment": data.id,
                        })
                    });
            });

    }
    return (

        <View style={style.container}>
            <KeyboardAvoidingView
                behavior="position"
                style={style.container}>

                <Header navigation={navigation} title = {"Traitement"} color={"#2DB142"}/>
                <Text style={style.title}> Nouveau Traitement </Text>
                <FormField label = {"Titre"} color={"#2DB142"} field={title} setField={setTitle}/>
                <Text style={style.title2}> Commentaire </Text>

                <TextInput
                    style={style.remarkInput}
                    value={remark}
                    multiline={true}
                    onChangeText={setRemark}
                />

                <View style={style.btnView}>
                    <TouchableOpacity style={[style.btn, style.annulerBtn]} onPress={deleteTreatment}>
                        <Text>
                            Annuler
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>addTreatment()} style={[style.btn, style.suivantBtn]} >
                        <Text>
                            Suivant
                        </Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>



        </View>



    );

}

export default AddTreatmentForm;

const style = StyleSheet.create({

    btn:{
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
    },

    suivantBtn: {
        backgroundColor: "#2DB142",
        color:"white",

    },
    annulerBtn: {
        backgroundColor: "#9C9C9C",
        marginRight:30,
    },

    btnView: {
        height:"20%",
        width:"80%",
        marginLeft:"auto",
        marginRight:"auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        position:"relative",
        marginTop:"auto",
    },

    container:{
        flex:1,
    },
    title:{
        marginLeft:"auto",
        marginRight:"auto",
        fontSize:35,
        marginBottom:25,
        color:"#2DB142",
        fontWeight:"bold",
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
        height:"20%",
        borderStyle:"solid",
        paddingLeft:"5%",
        paddingTop:"5%",
        marginLeft:"auto",
        marginRight:"auto",
        borderColor:"#2DB142",
        borderRadius:10,
        borderWidth:5,
        marginTop:10
    }

});