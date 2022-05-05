import React, { Component, useState,useEffect } from 'react';
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
    Pressable
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "../Util/Header";
import ButtonAdd from "../Util/ButtonAdd";
import styles from "../Style/styleHome";
import NoteSummary from "../Notes/NoteSummary";
import TreatmentSummary from "./TreatmentSummary";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useIsFocused} from "@react-navigation/native";


const Traitements = ({route,navigation})=> {

    const [isTouchedPlanning, setTouchedPlanning] = useState(true);
    const [isTouchedList, setTouchedList] = useState(false);
    const [treatments,setTreatments] = useState([]);
    const isFocused = useIsFocused();

    const setPlanning = () =>{
        setTouchedPlanning(true);
        setTouchedList(false);
    }

    const setList = () =>{
        setTouchedPlanning(false);
        setTouchedList(true);
    }

    useEffect(()=>{
        if(isFocused){
            getTreatments();
        }
    },[isFocused])


    const getTreatments = () => {

        const params = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},

        }

        AsyncStorage.getItem('token')
            .then((token) => {
                fetch(route.params.url+'/treatment/user/'+token,params)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        for(let i in data){
                            data[i].name = data[i].name.trim();
                            data[i]["count"] = data[i].medications.length
                        }
                        setTreatments(data);
                    });
            });

    }

    return(
                <View>
                    <Header navigation={navigation} title = {"Traitements"} color={"#2DB142"}/>

                    <View style={style.tabController}>
                        <Pressable onPress={setPlanning} style={[style.btnTreatment, isTouchedPlanning ? {backgroundColor:"#2DB142"} : {color:"white"}]}>
                            <Text style={[style.textBtnTreatment, isTouchedPlanning ? {color:"white"} : {color:"#2DB142"}]}>
                                Planning
                            </Text>
                        </Pressable>
                        <Pressable onPress={setList} style={[style.btnTreatment,isTouchedList ? {backgroundColor:"#2DB142"} : {color:"white"}]}>
                            <Text style={[style.textBtnTreatment, isTouchedList ? {color:"white"} : {color:"#2DB142"}]}>
                               Liste
                            </Text>
                        </Pressable>
                    </View>

                    {isTouchedList ?
                        <View style={{height:"50%",width:"100%"}}>
                            <FlatList
                                style={{width:"100%"}}
                                data={treatments}
                                renderItem={({item}) =>
                                    <TreatmentSummary count={item.count} title={item.name} />
                                }
                            />
                        </View>
                        :
                        null
                    }


                    <ButtonAdd text={"Ajouter un Traitement"} color={"#2DB142"} icone={"plus"}  onPress={() =>  navigation.navigate('Traitements2')} styleIcone ={styles.iconDossier}/>

                </View>



    )
}

export default Traitements;


const style = StyleSheet.create({
    btnTreatment:{
        width:"40%",
        height:40,
        borderColor:"#2DB142",
        borderStyle:'solid',
        borderWidth:3,
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    textBtnTreatment:{
      fontSize:25,
    },
    tabController:{
        width:"90%",
        display:"flex",
        flexDirection:"row",
        marginLeft:"auto",
        marginRight:"auto",
        justifyContent:"space-between",
    }
});