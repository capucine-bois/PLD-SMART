import React, { Component, useState,useEffect } from 'react';
import { FlatList,Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                    <TouchableOpacity style = {styles.titre}>
                        <Text style={styles.text}>
                            Liste
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.titre}>
                        <Text style={styles.text}>
                            Planning
                        </Text>
                    </TouchableOpacity>
                    <ScrollView style={{height:"63%"}}>
                        <StatusBar style="auto" />
                            {Traitements.map((element,index) => (
                                <TouchableOpacity key={`${element}-${index}`} style={styles.Traitement} onPress={() =>  navigation.navigate('Traitements', {
                                })}>
                                    <Text style={styles.text3}>
                                        {element}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                    </ScrollView>

                    <View style={{height:"15%"}}>
                        <Bouton styleButton={styles.nouveauTraitementBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Traitements2', {
                        })} text="Ajouter un Traitement" icone="plus" styleIcone ={styles.iconDossier}/>
                    </View>
                </View>


    )
}

export default Traitements;


const styles = StyleSheet.create({
    Traitement:{
        borderRadius: 10,
        backgroundColor: "#ffffff",
        borderWidth : 3,
        width:"80%",
        alignSelf:"center",
        borderColor: "#2DB142",
        margin:"2%",
        },
    titre:{
        backgroundColor: "#2DB142",
        borderRadius: 10,
        paddingHorizontal : "25%",
        paddingVertical: "3%",
        margin:"5%",
    },
    nouveauTraitementBtn: {
        width: "80%",
        flexDirection:"row",
        borderRadius: 25,
        height: "50%",
        alignItems: "center",
        alignSelf:"center",
        justifyContent: "space-evenly",
        backgroundColor: "#2DB142",
        marginTop:"6%"
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#fff",
        alignSelf:"center"
    },
    iconDossier: {
        marginRight:"5%"
    },
    headerBtn: {
        width: "100%",
        height: "11%",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingBottom:20,
        backgroundColor: "#2DB142"

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
        color: "#2DB142",
        textAlign:"center"
    },

})