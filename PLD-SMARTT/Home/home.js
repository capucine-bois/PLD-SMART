import { StatusBar } from 'expo-status-bar';
import {
    Linking,
    Image,
    Platform,
    Alert,
    Modal,
    Pressable,
    TouchableOpacity,
    StyleSheet,
    Text,
    TouchableWithoutFeedbackBase,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useIsFocused} from "@react-navigation/native";
import React, { useEffect,Component, useState } from 'react';
import styles from '../Style/styleHome'
import ButtonMenu from "../Util/ButtonMenu";
import Header from "../Util/Header";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello, UppLabs!</h1>
    </body>
    </html>
`;

const generateHtml = () => {
    return htmlContent;

};

const createAndSavePDF = async () => {
  const html = generateHtml();
  try {
    const { uri } = await Print.printToFileAsync({ html });
    if (Platform.OS === "ios") {
      await shareAsync(uri);
    } else {
      const permission = await MediaLibrary.requestPermissionsAsync();      if (permission.granted) {
        await MediaLibrary.createAssetAsync(uri);
      }
    }  } catch (error) {
    console.error(error);
  }
};
const onPressMobileNumberClick = (number) => {

  let phoneNumber = '';
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${number}`;
  } else {
    phoneNumber = `telprompt:${number}`;
  }

  Linking.openURL(phoneNumber);
}


  const Home = ({route,navigation}) =>{
    const isFocused = useIsFocused();
    const [modalVisible, setModalVisible] = useState(false);
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [taille,setTaille]=useState('')
    
    const [poids,setPoids]=useState('')
    const [allergies,setAllergies]=useState([])
    const [pathologies,setPathologie]=useState(new Array())
    const [vaccins, setVaccins]=useState(new Array())
    const [appareillages,setAppareillages]=useState(new Array())

    
    const [medicaleFile,setMedicaleFile]=useState('inscrDossierMedical');
    
    
   

    const checkMedicalFile = () => {
      const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      }
      AsyncStorage.getItem('token')
      .then((token) => {
           fetch(route.params.url+'/metric/name/taille/token/'+token,params)
           .then(response => {if(response.ok){
            
                  navigation.navigate('DossierMedical', {
                    prenom: prenom,
                    nom: nom,
                  
                    })
                    
                  }else{
                    navigation.navigate('inscrDossierMedical', {
                      prenom: prenom,
                      nom: nom,
                    
                      }
                  )
              
            
                  }
                
                  
            })
           
        })
    }

    const checkMedicalFile2 = () => {
      const params = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      }
      AsyncStorage.getItem('token')
      .then((token) => {
           fetch(route.params.url+'/metric/name/taille/token/'+token,params)
           .then(response => {if(response.ok){
            
                  getInfoUser()
              
            
                  }
                
                  
            })
           
        })
    }

    const getInfoUser = () => {
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
              createAndSavePDF()
              
           })
        })
    }

    useEffect(() => {
      if(isFocused){
          const params = {
              method: 'GET',
              headers: {'Content-Type': 'application/json'},
          }
          AsyncStorage.getItem('token')
              .then((token) => {
                  fetch(route.params.url+'/user/token/'+token,params)
                      .then(response => response.json())
                      .then(data => {
                          setNom(data.surname.trim())
                          setPrenom(data.name.trim())}
                      )

              })



          }
    }, [isFocused]);

    const PopUp = () => {
      return (
        <View >
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Appeler le Samu ?</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => { onPressMobileNumberClick("0769837263") }}
                >
                  
                  <Text style={styles.textStyle}>Appeler</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose2]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  
                  <Text style={styles.textStyle}>Annuler</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      );
    };


    const textHeader = "Bonjour, " + prenom + " " + nom;
    return(

      <View style={styles.container}>
          <Header navigation={navigation} title = {textHeader} color={"#5169A7"}/>
          <StatusBar style="auto" />
          <PopUp/>
        <ButtonMenu styleButton={styles.AppelBtn} styleText={styles.text} onPress={() => setModalVisible()} text="Appel d'urgence" icone="phone" styleIcone ={styles.iconTelephone}/>

        <ButtonMenu styleButton={styles.DossierBtn} styleText={styles.text} onPress={() =>  checkMedicalFile()} text="Dossier Médical" icone="clipboard-plus-outline" styleIcone ={styles.iconDossier}/>

        <ButtonMenu styleButton={styles.TraitementBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Traitements', {
            prenom: prenom,
            nom: nom,
            })} text="Traitements" icone="pill" styleIcone ={styles.iconTraitements}/>

        <ButtonMenu styleButton={styles.cahierBtn} styleText={styles.text} onPress={() =>  navigation.navigate('BlocNotes', {
            prenom: prenom,
            nom: nom,
            })} text="Bloc Notes" icone="pen" styleIcone ={styles.iconBlocNotes}/>

        <ButtonMenu styleButton={styles.consultationBtn} styleText={styles.text} onPress={() =>  navigation.navigate('RDV', {
            prenom: prenom,
            nom: nom,
            })} text="Mes rendez-vous" icone="calendar" styleIcone ={styles.iconRDV}/>

        <ButtonMenu styleButton={styles.FicheBtn} styleText={styles.text} onPress={() =>  checkMedicalFile2()} text="Générer ma Fiche" icone="file" styleIcone ={styles.iconFiche}/>
        <ButtonMenu styleButton={styles.ParametreBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Parameters', {
            prenom: prenom,
            nom: nom,
            })} text="Parametres" icone="cog" styleIcone ={styles.iconParametre}/>

      </View>
     
    )
  }
 export default Home;


 