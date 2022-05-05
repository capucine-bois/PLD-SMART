import React, { Component, useState,useEffect } from 'react';
import { FlatList,Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from '../Style/styleHome'
import Header from "../Util/Header";
import NoteSummary from "../Notes/NoteSummary";
import ButtonAdd from "../Util/ButtonAdd";
import RDVSummary from "./RDVSumarry";
import {useIsFocused} from "@react-navigation/native";


const RDV =({route,navigation})=>{

    const isFocused = useIsFocused();

    const[rdvs,setRdvs] = useState([]);

    const getListRDV = () => {
      const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        
      }

      AsyncStorage.getItem('token')
      .then((token) => {
           fetch(route.params.url+'/rendezvous/user/'+token,params)
           .then(response => response.json())
           .then(data => {
               console.log(data);
               for(let i in data){
                   data[i].location = data[i].location.trim();
                   data[i].namePractitioner = data[i].namePractitioner .trim();
                   if(data[i].remark != null) {
                       data[i].remark = data[i].remark.trim();
                   }
                   else{
                       data[i].remark = "";
                   }
                   data[i].typePractitioner= data[i].typePractitioner.trim();

                   const date = data[i].date;
                   data[i]["mois"] = date.slice(5,7);
                   data[i]["jour"] = date.slice(8,10);
                   data[i]["heure"] = date.slice(11,13);
                   data[i]["year"] = date.slice(0,4);
                   data[i]["min"] = date.slice(14,16);
                   data[i]["dateFormat"] = data[i]["jour"]+"/"+data[i]["mois"]+"/"+data[i]["year"]+" à "+data[i]["heure"]+":"+data[i]["min"];


               }
               setRdvs(data);
               console.log(data);
           })
        })
    }


    useEffect(() => {
        if(isFocused)
            getListRDV()
    },[isFocused]);


    return(
        <View style={style.container}>

            <Header navigation={navigation} title = {"Mes Rendez-vous"} color={"#9e0e40"}/>

            <View style={{height:"71%",width:"100%"}}>
                <FlatList
                    style={{width:"100%"}}
                    data={rdvs}
                    renderItem={({item}) =>
                        <RDVSummary navigation={navigation} rdv={item}></RDVSummary>
                    }
                />
            </View>


            <ButtonAdd text={"Nouveau RDV"} color={"#9e0e40"} icone={"plus"}  onPress={() =>  navigation.navigate('RDV2',{
                id:-1,
                dateFormat:"Entrez la date et l'heure"
            })} styleIcone ={styles.iconDossier}/>

        </View>


    )
}

export default RDV;

const style = StyleSheet.create({
    headerBtn: {
        width: "100%",
        height: "11%",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingBottom:20,
        backgroundColor: "#9e0e40",
        marginBottom:30
        
      },
      container: {
        display:"flex",
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center'
      },
      nouvelleNoteBtn: {
        width: "80%",
        display:"flex",
      flexDirection:"row",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#9e0e40",
        marginBottom: 160,
      },

      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000000",
      },
      inputView: {
          flexDirection: 'row',
        backgroundColor: "#9C9C9C",
        borderRadius: 30,
        width: "80%",
        height: 70,
        marginBottom: '10%',
        
        alignItems: "center",
      },

      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },

      renderItem: {
        flexDirection: 'row',
      backgroundColor: "#9C9C9C",
      borderRadius: 30,
      width: "90%",
      height: 100,
      marginTop:'5%',
      marginBottom: '5%',
      marginLeft:"5%",
      alignItems: "center",
    },

});