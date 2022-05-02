import React, { Component, useState,useEffect } from 'react';
import { FlatList,Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../Style/styleHome'

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


const Traitements =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const[recherche,setRecherche]=useState('');
    const [data, setData] = useState([]);

    const getListRDV = async() => {
      const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},

      }
      const response = await
       fetch('http://172.20.10.2:8080/rendezvous/user/76',params);
       const json = await response.json();

        setData(json)
    };


    useEffect(() => {
      console.log('proute')

      getListRDV()
      console.log('data')
      console.log(data)

      }, []);

      const renderItem = ({ item }) => {
        return (
          <Text >
            RDV le {item.date} à {item.location} médecin {item.namePractitioner} {item.typePractitioner}
          </Text>
        );
      };

    const Traitements =["PrEP","Insuline","Canabis thérapeutique"]


    return(
                <View style={styles.container}>
                    <View style={styles.headerBtn}>
                        <Text style={styles.text2}>
                                Mes Traitements
                        </Text>
                        <TouchableOpacity>
                            <MaterialCommunityIcons style= {{marginRight:"5%"}} name='home' color="#fff" size={30} onPress={() =>  navigation.navigate('Accueil', {
                                prenom: prenom,
                                nom: nom,
                            })}/>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.titre}>
                        <Text style={styles.text}>
                            Traitements
                        </Text>
                    </View>
                    <ScrollView style={{height:"63%"}}>
                        <StatusBar style="auto" />
                            {Traitements.map((element,index) => (
                                <TouchableOpacity key={`${element}-${index}`} style={styles.allergie} onPress={() =>  navigation.navigate('Traitements', {
                                })}>
                                    <Text style={styles.text3}>
                                        {element}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                    </ScrollView>

                    <View style={{height:"15%"}}>
                        <Bouton styleButton={styles.nouvelleAllergieBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Traitements', {
                        })} text="Ajouter un Traitement" icone="plus" styleIcone ={styles.iconDossier}/>
                    </View>
                </View>


    )
}

export default Traitements;

const style = StyleSheet.create({
    headerBtn: {
        width: "100%",
        height: "11%",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingBottom:20,
        backgroundColor: "#2db142",
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
        backgroundColor: "#2db142",
        marginBottom: 160,
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
        marginBottom: '10%',

        alignItems: "center",
      },

      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },

});