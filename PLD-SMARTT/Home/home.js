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
               
                })
              
            
           }})
           
        })
    }

    useEffect(() => {
      if(isFocused){
      //checkMedicalFile();
        const name = AsyncStorage.getItem("name")
            .then(result => {
                setPrenom(result);
            })
        const surname = AsyncStorage.getItem("surname")
            .then(result => {
                setNom(result);
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
        <ButtonMenu styleButton={styles.AppelBtn} styleText={styles.text} onPress={() => setModalVisible(true)} text="Appel d'urgence" icone="phone" styleIcone ={styles.iconTelephone}/>

        <ButtonMenu styleButton={styles.DossierBtn} styleText={styles.text} onPress={() =>  checkMedicalFile() } text="Dossier Médical" icone="clipboard-plus-outline" styleIcone ={styles.iconDossier}/>

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

        <ButtonMenu styleButton={styles.FicheBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Bonjour', {
            prenom: prenom,
            nom: nom,
            })} text="Générer ma Fiche" icone="file" styleIcone ={styles.iconFiche}/>
        <ButtonMenu styleButton={styles.ParametreBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Parameters', {
            prenom: prenom,
            nom: nom,
            })} text="Parametres" icone="cog" styleIcone ={styles.iconParametre}/>

      </View>
     
    )
  }
 export default Home;


 