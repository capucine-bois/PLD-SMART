
import React, { Component, useState } from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";

const InscrDosMed =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const [taille, setTaille] = useState('');
    const [poids, setPoids] = useState('');
    const [age, setAge] = useState('');
    const [idMetriqueTaille,setIdMetriqueTaille]=useState('');
    const [idMetriquePoids,setIdMetriquePoids]=useState('');
    const [bouton, setBouton] = useState(false);

    const submitMetriqueTaille= () => {
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name":'taille',
                "unit":'cm',
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/metric/'+token,params)
                .then(response => 
                  
                    response.json()
                )
                .then(data =>{
                    console.log(data)
                    setIdMetriqueTaille(data.id)
                    submitTaille(data.id)

                })
        });
            
      };
    
    const submitTaille= (id) => {
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "value":taille,
                "date":'2020-05-02'
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/measure/'+id,params)
                .then(response => response.json()
                )
                .then(data => {
                    console.log(data)
                    submitMetriquePoids()
                })
        });
            
      };

      const submitMetriquePoids= () => {
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name":'Poids',
                "unit":'kg',
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/metric/'+token,params)
                .then(response => 
                  
                    response.json()
                )
                .then(data =>{
                    console.log(data)
                    setIdMetriquePoids(data.id)
                    submitPoids(data.id)
                    
                })
        });
            
      };
    
    const submitPoids= (id) => {
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "value":poids,
                "date":'2020-05-02'
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/measure/'+id,params)
                .then(response => response.json()
                )
                .then(data => {console.log(data)
                    navigation.navigate('inscrDossierMedical2', {
                        prenom: prenom,
                        nom:nom,
                        taille:taille,
                        poids:poids,
                        age:age,
                        
                    })})
        });
            
      };

      const submitPoids2= () => {
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "value":poids,
                
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/weight/'+token,params)
                .then(response => {
                
                    if(response.ok) {
                        
                        navigation.navigate('inscrDossierMedical2', {
                            prenom: prenom,
                            nom:nom,
                            taille:taille,
                            poids:poids,
                            age:age,
                            
                        })
                    }
                   
                
                
            });
        });
            
      };


    return (
        <View style={styles.container}>
            <View style={styles.headerBtn}>
                <Text style={styles.text2}>
                    
                </Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons style= {{marginRight:"5%"}} name='home' color="#fff" size={30} onPress={() =>  navigation.navigate('Accueil', {
                        prenom: prenom,
                        nom: nom,
                    })}/>
                </TouchableOpacity>



            </View>
            <View style={{alignItems:"center"}}>
                    <Text style={styles.text1}>
                        Bonjour, {prenom} {nom} 
                    </Text>
                    <View style={{marginTop:"10%"}}>
                    <Text style={styles.text3}>
                        Veuillez entrer votre taille, poids et âge :
                    </Text>
                    </View>

                    <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}

                    placeholder="Saisissez votre Taille"
                    placeholderTextColor="#003f5c"
                    onChangeText={(taille) => setTaille(taille)}
                    onChange={()=>setBouton(true)}
                />
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}

                    placeholder="Saisissez votre Poids"
                    placeholderTextColor="#003f5c"
                    onChangeText={(poids) => setPoids(poids)}
                    onChange={()=>setBouton(true)}
                />
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}

                    placeholder="Saisissez votre Âge"
                    placeholderTextColor="#003f5c"
                    onChangeText={(age) => setAge(age)}
                    onChange={()=>setBouton(true)}
                />
                </View>

                <TouchableOpacity style={styles.loginBtn}>

                <Button
                    title="Suivant"
                    disabled={!bouton}
                    onPress={() =>
                        /* 1. Navigate to the Details route with params */
                        submitMetriqueTaille()
                    }
                />
            </TouchableOpacity>
            </View>


        </View>




    );
}

export default InscrDosMed;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textProfil: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    inputView: {
        marginTop:"10%",
        backgroundColor: "#FFFF",
        borderRadius: 30,
        width: "80%",
        height: 70,
        

        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000000",
        fontSize:25,
    },
    
    profil:{
        marginTop:"10%",
        marginBottom:"5%",
        flexDirection:"row",
        justifyContent : "space-evenly"
    },
    
    
    headerBtn: {
        width: "100%",
        height: "11%",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingBottom:20,
        backgroundColor: "#1EA584"

    },
    container: {
        backgroundColor: '#1EA584',
        height:"100%",
    },
    text1: {
        fontSize: 40,
        
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",

    },
    text2: {
        fontSize: 20,
        flex: 1,
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",

    },
    text3: {
        fontSize: 20,
        
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",

    },
    iconChevron: {
        marginRight:"5%",
        alignSelf:"center"

    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#FFFF",
        
    },

  });