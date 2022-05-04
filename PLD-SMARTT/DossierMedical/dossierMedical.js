import {useIsFocused} from "@react-navigation/native";
import {FlatList,StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-virtualized-view'
import React, { useEffect,Component, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
function Bouton(props){
    return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
            <Text style={props.styleText}>
                {props.text}
            </Text>
            <MaterialCommunityIcons style = {styles.iconChevron} name='chevron-right' color="#fff" size={45}/>
        </TouchableOpacity>
    )
}

function DossierMedical({route,navigation}) {
    const {prenom,nom} = route.params;
    
    const [dateNaissance,setDateDeNaissance] = useState('')
    

    const[tailleTableau,setTailleTableau]=useState(0);
    const [taille,setTaille]=useState('')
    const [age,setAge]=useState('');
    const [poids,setPoids]=useState('')
    const [allergies,setAllergies]=useState([])
    const [pathologies,setPathologie]=useState(new Array())
    const [vaccins, setVaccins]=useState(new Array())
    const [appareillages,setAppareillages]=useState(new Array())
    const [indicateurs,setIndicateurs]=useState(new Array())
   
   
   
    const isFocused = useIsFocused();


    const getTaille = () => {
        const params = {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        }
        AsyncStorage.getItem('token')
        .then((token) => {
             fetch(route.params.url+'/metric/name/taille/token/'+token,params)
             .then(response => response.json())
             .then(data => {
                 setTailleTableau(data.measure.length-1)
                 setTaille(data.measure[tailleTableau].value)
                 
             })
             
          })
      }

      const getPoids = () => {
        const params = {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        }
        AsyncStorage.getItem('token')
        .then((token) => {
             fetch(route.params.url+'/metric/name/Poids/token/'+token,params)
             .then(response => response.json())
             .then(data => {
                setTailleTableau(data.measure.length-1)
                 setPoids(data.measure[tailleTableau].value)
                
             })
             
          })
      }

      const getBirthDate = () => {
        const params = {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        }
        AsyncStorage.getItem('token')
        .then((token) => {
             fetch(route.params.url+'/user/birthdate/token/'+token,params)
             .then(response => response.json())
             .then(data => {
                var mois = data.slice(5,7);
                var jour  = data.slice(8,10);
                var year = data.slice(0,4);
                var dateFormat = jour+"/"+mois+"/"+year;
                var today = new Date();
                var age = today.getFullYear() - year;
                if (today.getMonth() < mois || (today.getMonth() == mois && today.getDate() < jour)) {
                    age--;
                }
                setAge(age)

                setDateDeNaissance(dateFormat)
                
             })
             
          })
      }


    const checkMedicalFile = () => {
        const params = {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        }
        AsyncStorage.getItem('token')
        .then((token) => {
             fetch(route.params.url+'/user/token/'+token,params)
             .then(response => response.json())
             .then(data => {
               
                setAllergies(data.medicalFile.allergies)
                setPathologie(data.medicalFile.pathologies)
                setVaccins(data.medicalFile.vaccines)
                setAppareillages(data.medicalFile.equipments)
                
             })
          })
      }


    
      useEffect(() => {
        if(isFocused){
        checkMedicalFile();
        getTaille();
        getPoids();
        getBirthDate()
        }
      }, [isFocused]);


	return (

    <View style={styles.container}>
        <View style={styles.headerBtn}>
            <Text style={styles.text2}>
                Dossier Médical
            </Text>
            <TouchableOpacity>
                <MaterialCommunityIcons style= {{marginRight:"5%"}} name='home' color="#fff" size={30} onPress={() =>  navigation.navigate('Accueil', {
                    prenom: prenom,
                    nom: nom,
                })}/>
            </TouchableOpacity>
        </View>
        <ScrollView style={{height:"89%"}}>
            <StatusBar style="auto" />
            <View style={styles.profil}>
                <MaterialCommunityIcons style = {styles.iconDossier} name='account-circle-outline' color="#000" size={100}/>
                <View>
                    <Text style={styles.textProfil}>{prenom} {nom}</Text>
                    <Text style={styles.textProfil}>Né(e) le : {dateNaissance}</Text>
                    <Text style={styles.textProfil}>{age} ans</Text>
                </View>
            </View>
            <View style={styles.mensurations}>
                <Text style={styles.text}>Poids : {poids} kg</Text>
                <Text style={styles.text}>Taille : {taille}</Text>
            </View>
            <Bouton styleButton={styles.etiquette}  styleText={styles.textEtiquette} onPress={() =>  navigation.navigate('DosMedAllergies')}
                    text="Allergies" />
                
                    
                <View >
                        {allergies.map((item) => {
                         return (
                        <View key={item.allergyId}>
                        <Text style={styles.textContenuEtiquette} >{item.name}</Text>
                        </View>
                             );
                            })}
                </View>
                
            <Bouton styleButton={styles.etiquette}  styleText={styles.textEtiquette} onPress={() =>  navigation.navigate('DosMedPathologies')}
                    text="Pathologies" />
                    
                <View >
                        {pathologies.map((item) => {
                         return (
                        <View key={item.id}>
                        <Text style={styles.textContenuEtiquette} >{item.name}</Text>
                        </View>
                             );
                            })}
                </View>
                

            <Bouton styleButton={styles.etiquette}  styleText={styles.textEtiquette} onPress={() =>  navigation.navigate('DosMedVaccins')}
                    text="Vaccins" />
                    
                <View >
                        {vaccins.map((item) => {
                         return (
                        <View key={item.id}>
                        <Text  style={styles.textContenuEtiquette} >{item.name.trim()}   {item.lastBooster}</Text>
                        </View>
                             );
                            })}
                </View>
           
            <Bouton styleButton={styles.etiquette}  styleText={styles.textEtiquette} onPress={() =>  navigation.navigate('DosMedAllergies')}
                    text="Appareillages" />
                
                <View >
                        {appareillages.map((item) => {
                         return (
                        <View key={item.id}>
                        <Text style={styles.textContenuEtiquette} >{item.name}   </Text>
                        </View>
                             );
                            })}
                </View>

            <Bouton styleButton={styles.etiquette}  styleText={styles.textEtiquette} onPress={() =>  navigation.navigate('DosMedIndicateurs')}
                    text="Indicateurs" />
        </ScrollView>
    </View>)
}

export default DossierMedical

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textProfil: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    mensurations:{
        flexDirection: "row",
        justifyContent : "space-evenly",
        borderBottomColor: '#D6D2D2',
        borderBottomWidth: 2,
        borderTopColor: "#D6D2D2",
        borderTopWidth: 2,
        paddingVertical:"5%",
        marginBottom : "7%",
        marginTop : "7%",
        marginStart : "7%",
        marginEnd : "7%"

    },
    profil:{
        marginTop:"10%",
        marginBottom:"5%",
        flexDirection:"row",
        justifyContent : "space-evenly"
    },
    etiquette:{
        backgroundColor: "#1EA584",
        padding: 15,
        flexDirection:"row",
        justifyContent : "space-between"
    },
    textEtiquette:{
        fontSize: 28,
        fontWeight: 'bold',
        textAlign:"left" ,
        color: "#fff",
        alignSelf:"center"
    },
    textContenuEtiquette: {
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomColor: '#D6D2D2',
        borderBottomWidth: 1,
        marginLeft:"2%",
        marginRight:"2%",
        paddingVertical:"2%"
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
        backgroundColor: '#ffffff'
    },
    text2: {
        fontSize: 20,
        flex: 1,
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",

    },
    iconChevron: {
        marginRight:"5%",
        alignSelf:"center"

    }
  });