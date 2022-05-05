
import React, { Component, useState,useEffect } from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput, Button, Platform} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from "../Util/Header";

const InscrDosMed =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const [taille, setTaille] = useState('');
    const [poids, setPoids] = useState('');
    const [age, setAge] = useState('');
    const [idMetriqueTaille,setIdMetriqueTaille]=useState('');
    const [idMetriquePoids,setIdMetriquePoids]=useState('');
    const [bouton, setBouton] = useState(false);
    const [date, setDate] = useState(new Date());
    const dateAjd =useState(new Date())
    const [dateAjdFormate,setDateAjdFormate]=useState('')
    const [dateFormate,setDateFormate]=useState('')
    const [dateFormate2,setDateFormate2]=useState( 'Entrez votre date de naissance')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
       };
       const showHourPicker = () => {
         setHourPickerVisibility(true);
       };
       const hideDatePicker = () => {
         setDatePickerVisibility(false);
       };
       const hideHourPicker = () => {
         setHourPickerVisibility(false);
       };
       const handleConfirm = (date) => {
         setDate(date);
         var dd = date.getDate();
         var mm = date.getMonth() + 1; //January is 0!
         var yyyy = date.getFullYear();

         
       
         if (dd < 10) {
             dd = '0' + dd;
         }
         if (mm < 10) {
             mm = '0' + mm;
         }
         
         setDateFormate(  yyyy + "-" + mm + "-" + dd);
         setDateFormate2( dd+"/"+mm+"/"+yyyy);
         hideDatePicker();
       };

       const [token, setToken] = React.useState(null);
       const tok = AsyncStorage.getItem("token")
            .then(result => {
                setToken(result);
            })
       

       


    const submitMetriqueTaille= async () => {
        try {
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name":'taille',
                "unit":'cm',
            })
        }
        
            const response = await fetch(route.params.url+'/metric/'+token,params)
            const data = await response.json()
                    console.log(data)
                    setIdMetriqueTaille(data.id)
                    submitTaille(data.id)
        
    } catch (error) {
        console.error(error);
      }
            
      };
    
    const submitTaille= (id) => {
        var dd = dateAjd[0].getDate();
        var mm = dateAjd[0].getMonth() + 1; //January is 0!
        var yyyy = dateAjd[0].getFullYear();
        
      
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        
        setDateAjdFormate(  yyyy + "-" + mm + "-" + dd);
        console.log(dateAjdFormate)
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "value":taille,
                "date":dateAjdFormate
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
                "date":dateAjdFormate
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/measure/'+id,params)
                .then(response => {
                    if(response.ok){
                
                    submitBirthDate()
                    }});
        });
            
      };

      const submitBirthDate= () => {
        
        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "birthDate":dateFormate,
               
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/user/'+token,params)
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

      useEffect(() => {
        var dd = dateAjd[0].getDate();
        var mm = dateAjd[0].getMonth() + 1; //January is 0!
        var yyyy = dateAjd[0].getFullYear();
        
      
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        
        setDateAjdFormate(  yyyy + "-" + mm + "-" + dd);

    }, []);


    return (
        <View style={styles.container}>
            <Header navigation={navigation} title = {"Tutoriel"} color={"#1EA584"}/>
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
                        placeholder="Saisissez votre Taille en cm"
                        placeholderTextColor="#003f5c"
                        onChangeText={(taille) => setTaille(taille)}
                        onChange={()=>setBouton(true)}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Saisissez votre Poids en Kg"
                    placeholderTextColor="#003f5c"
                    onChangeText={(poids) => setPoids(poids)}
                    onChange={()=>setBouton(true)}
                    keyboardType="numeric"

                />
                </View>

                <View style={styles.inputView}>
                <TouchableOpacity style={styles.DateInput}  onPress={showDatePicker}  >
                    <Text style={styles.TextInput}>
                       {dateFormate2}
                    </Text>
                    
                </TouchableOpacity>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    locale="fr"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                
                 </View>
                
                <TouchableOpacity style={styles.loginBtn} onPress={() =>submitMetriqueTaille()}>
                    <Text style={styles.text3}>Suivant</Text>
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
        height: 30,
        flex: 1,
        padding:"6%",
        color: "#003f5c",
        fontSize:20,
        textAlign:'center',
        alignSelf:'center'
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
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#003f5c",
        
    },

  });