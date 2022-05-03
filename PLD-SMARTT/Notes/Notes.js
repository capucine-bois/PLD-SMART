import React, {Component, useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, TextInput, Image, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NoteSummary from "./NoteSummary";
import Header from "../Util/Header";
import styles from '../Style/styleHome'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Bouton = (props) =>{

    return (
      <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
        <MaterialCommunityIcons style= {props.styleIcone} name={props.icone} color="#fff" size={45}/>
        <Text style={props.styleText}>
          {props.text}
        </Text>
      </TouchableOpacity>
    )
}


const Notes =({route,navigation}) => {

    const[recherche,setRecherche]=useState('');
    const[notes,setNotes] = useState([]);

    //Get all the notes
    useEffect(() => {

        const params = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},

        }

        AsyncStorage.getItem('token')
            .then((token) => {
                fetch(route.params.url+'/notes/user/'+token,params)
                    .then(response => response.json())
                    .then(data => {
                        for(let i in data){
                            data[i].author = data[i].author.trim();
                            data[i].title = data[i].title.trim();
                            data[i].note = data[i].note.trim();
                        }
                        setNotes(data);
                    });
            });

    })

    return(
        <View style={style.container}>
            <Header navigation={navigation} title = {"Mes Notes"} color={"#ffd700"}/>

            <View style={style.inputView}>
                <TextInput
                style={style.TextInput}

                placeholder="Rechercher"
                placeholderTextColor="#003f5c"
                onChangeText={(prenom) => setRecherche(recherche)}
                onChange={console.log(recherche)}
                />
                <MaterialCommunityIcons style={styles.iconDossier}  name='magnify' color="#fff" size={45}/>
            </View>

            <View style={{height:"60%",width:"100%"}}>
                <FlatList
                    style={style.flatSummary}
                    data={notes}
                    renderItem={({item}) =>
                        <NoteSummary navigation={navigation} note={item.note} date = {item.date} id={item.id} title={item.title} author={item.author} date={item.date}></NoteSummary>
                    }
                />
            </View>



            <View style={style.containerButton}>
                <Bouton styleButton={style.nouvelleNoteBtn} styleText={style.text} onPress={() =>  navigation.navigate('BlocNotes2',{
                    "id":"-1",
                    "author":"",
                    "title":"",
                    "note":"",
                    "date":"",
                })} text="Nouvelle notes" icone="plus" styleIcone ={styles.iconDossier}/>
            </View>


        </View>


    )


}

export default Notes;

const style = StyleSheet.create({
      flatSummary:{
        width:"100%",
      },
      container: {
        display:"flex",
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    containerButton:  {
        height:100,
    },
      nouvelleNoteBtn: {
        width: "80%",
        display:"flex",
        flexDirection:"row",
        borderRadius: 25,
          marginBottom:"auto",
          marginTop:"auto",
        height:"50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffd700",
      },
      text: {
        fontSize: 30,
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",
        
      
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
        marginBottom: 20,
        alignItems: "center",
      },

});