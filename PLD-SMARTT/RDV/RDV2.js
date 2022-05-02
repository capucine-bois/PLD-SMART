import React, { Component, useState ,useEffect} from 'react';
import { Modal,Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from '../Style/styleHome'



const RDV2 =({route,navigation})=>{
    const{prenom,nom}= route.params;
    const [data, setData] = useState([]);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const[praticien,setPraticien]=useState(route.params.namePractitioner);
    const[metierPraticien,setMetierPraticien]=useState(route.params.typePractitioner);
    const[adress,setAdress]=useState(route.params.location);
    const[commentaire,setCommentaire]=useState(route.params.commentaire);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isHourPickerVisible, setHourPickerVisibility] = useState(false);
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
      hideDatePicker();
    };

    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    var hh=date.getHours();
    var min=date.getMinutes();
    
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if(hh<10){
      hh='0'+hh;
    }
    if(min<10){
      min='0'+min;
    }
    const dateFormate =  yyyy + "-" + mm + "-" + dd+'T'+hh+':'+min+':00';
    const dateFormate2= dd+"/"+mm+"/"+yyyy+' à ' + hh+":"+min;
    
    const createRDV= () => {
      console.log('create RDV')
      const params = {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              "date": dateFormate ,
              "namePractitioner": praticien,
              "typePractitioner": metierPraticien,
              "location": adress,
              "remark":commentaire,
          })
      }

      AsyncStorage.getItem('token')
      .then((token) => {  

          fetch('http://172.20.10.2:8080/rendezvous/'+token,params)
              .then(response => response.json());
            });
          
            };
    

  useEffect(() => {
    console.log(dateFormate)
   
    
  });

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

            <View style={style.inputView}>
            
            <TouchableOpacity style={style.DateInput} on onPress={showDatePicker} >
                    <Text>
                       {dateFormate2}
                    </Text>
                    
                </TouchableOpacity>
                
                
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    locale="fr"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                  />
                
            </View>

            

            <View style={style.inputView}>
            
                <TextInput
                style={style.TextInput}
            
                placeholder="Nom Praticien"
                placeholderTextColor="#003f5c"
                onChangeText={(praticien) => setPraticien(praticien)}
                
            >
              {praticien}
              </TextInput>
            </View>
            <View style={style.inputView}>
            
                <TextInput
                style={style.TextInput}
            
                placeholder="Métier Praticien"
                placeholderTextColor="#003f5c"
                onChangeText={(metierPraticien) => setMetierPraticien(metierPraticien)}
                
            >
            {metierPraticien}
              </TextInput>
            </View>
            <View style={style.inputView}>
            
                <TextInput
                style={style.TextInput}
            
                placeholder="Adresse"
                placeholderTextColor="#003f5c"
                onChangeText={(adress) => setAdress(adress)}
                
            >
              {adress}
              </TextInput>
            </View>

            
            <Text style={{textAlign:'left',marginTop:20}}>
                   Commentaire
                </Text>
            <ScrollView style={{marginTop:20,textAlign:'left',width: "80%",height:"30%",borderWidth: 5,borderColor:"#9e0e40",borderRadius:15}}>
            <TextInput
                style={style.TextInput}
            
                placeholder="Commentaire"
                placeholderTextColor="#003f5c"
                onChangeText={(commentaire) => setCommentaire(commentaire)}
                
            >
            {commentaire}
              </TextInput>

            </ScrollView>

             <View style={style.BtnView}>

             
                <TouchableOpacity style={style.AjouterBtn} onPress={() => { createRDV(),navigation.navigate('Accueil', {
             prenom: prenom,
             nom: nom,
             }) }} >
                    <Text>
                       Ajouter
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.AnnulerBtn} onPress={()=>navigation.navigate('RDV', {
             prenom: prenom,
             nom: nom,
             })}>
                    <Text>
                        Annuler
                    </Text>
                </TouchableOpacity>

            </View>
        
        </View>


    )
}

export default RDV2;

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
      text: {
        fontSize: 30,
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",
        
      
      },
      TextInput: {
        height: 40,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000000",
      },
      DateInput: {
        height: 40,
        
        flexDirection: 'row',
        padding: 10,
        marginLeft: 20,
        color: "#000000",
      },
      inputView: {
          marginTop: 10,
          flexDirection: 'row',
        backgroundColor: "#9C9C9C",
        borderRadius: 30,
        width: "80%",
        height: 50,
        alignItems: "center",
      },
        AjouterBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#9e0e40",
        
      },
      AnnulerBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#9C9C9C",
        marginLeft:"2%"
        
      },
      BtnView: {

          
        height:"20%",
        width:"80%",
        flexDirection:"row",
        alignItems:"flex-start",
        marginLeft:"30%",
        
      },

      

});