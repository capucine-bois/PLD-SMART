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


const Traitements = ({route,navigation})=> {

    const [isTouchedPlanning, setTouchedPlanning] = useState(true);
    const [isTouchedList, setTouchedList] = useState(false);

    const setPlanning = () =>{
        setTouchedPlanning(true);
        setTouchedList(false);
    }

    const setList = () =>{
        setTouchedPlanning(false);
        setTouchedList(true);
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