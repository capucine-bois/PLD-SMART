import React, { Component, useState,useEffect } from 'react';
import { FlatList,Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";
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


const RDV =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const[recherche,setRecherche]=useState('');
    const [data, setData] = useState([]);

    
    

    const getListRDV = () => {
      const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        
      }
      
      AsyncStorage.getItem('token')
      .then((token) => {
        
       
       fetch('http://172.20.10.2:8080/rendezvous/user/'+token,params)
       .then(response => response.json())
            .then(data => {
                console.log(data);
      
                setData(data)
              });
     });
    };

    const deleteRDV= (idRDV) => {
      getListRDV();
      const params = {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          
      }
    fetch('http://172.20.10.2:8080/rendezvous/'+idRDV,params)
        .then(response => response.json());
    };
      
    

    useEffect(() => {
      getListRDV()
      }, []);

      const renderItem = ({ item }) => {
        const location = item.location + '\n';
        const namePractitioner=item.namePractitioner;
        const typePractitioner=item.typePractitioner;
        const commentaire=item.remark;
        const date = item.date;
        const année =date.slice(0,4)
        const mois = date.slice(5,7)
        const jour = date.slice(8,10)
        const heure = date.slice(11,13)
        const min = date.slice(14,16)
        const idRDV = item.id;
       
        const dateFormate = jour +'/'+ mois+'/' + année +' à '+heure+':'+min ;
        
        return (

          <TouchableOpacity style={style.renderItem} onPress={() =>  navigation.navigate('RDV2', {
            prenom: prenom,
            nom: nom,
            date: dateFormate,
            location: location,
            namePractitioner: namePractitioner,
            typePractitioner: typePractitioner,
            commentaire: commentaire,
            idRDV:idRDV,

            })} onLongPress={() => deleteRDV(idRDV)}>
           <Text style={styles.text2}>
           RDV le {dateFormate} à {location.trim()}  Médecin {namePractitioner.trim()} {typePractitioner.trim()} commentaire {commentaire.trim()}
            </Text>
            <MaterialCommunityIcons style={styles.iconDossier}  name='calendar' color="#fff" size={30}/>
           </TouchableOpacity>
        );
      };


    return(
        <View style={style.container}>
        
            <TouchableOpacity style={style.headerBtn} onPress={() =>  navigation.navigate('Accueil', {
             prenom: prenom,
             nom: nom,
             })}>
            <Text style={styles.text2}>
           Mes Rendez-Vous 
             </Text>
             <MaterialCommunityIcons style={styles.iconDossier}  name='home' color="#fff" size={30}/>
            </TouchableOpacity>

            
            
            <View style={{width:'100%',height:'60%',backgroundColor:"#9e0e40",  flexDirection:"column"}}>
            <FlatList
        data={data}
        renderItem={renderItem}
        style={{alignContent:'center'}}
          keyExtractor={(item) => item.id.toString()}
        />
             </View>
        
        <Bouton styleButton={style.nouvelleNoteBtn} styleText={style.text} onPress={() =>  navigation.navigate('RDV2', {
            prenom: prenom,
            nom: nom,
            date: "Entrer la date et l'heure",
            idRDV:-1,
            })} text="Nouveau RDV" icone="plus" styleIcone ={styles.iconDossier}/>

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