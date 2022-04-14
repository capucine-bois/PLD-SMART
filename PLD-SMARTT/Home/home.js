import { StatusBar } from 'expo-status-bar';
import { Linking, Image,Platform,Alert, Modal, Pressable,TouchableOpacity,StyleSheet, Text, TouchableWithoutFeedbackBase, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { useEffect,Component, useState } from 'react';

import styles from '../Style/styleHome'
  
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

    const [modalVisible, setModalVisible] = useState(false);
    const {prenom,nom}= route.params;

    const PopUp = () => {
      return (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
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

    const BoutonMenu = (props) =>{
      return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
          <MaterialCommunityIcons style= {props.styleIcone} name={props.icone} color="#fff" size={45}/>
          <Text style={props.styleText}>
            {props.text}
          </Text>
        </TouchableOpacity>
      )
    
    }




    const createUser = () => {

        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin" : "*",'Access-Control-Allow-Credentials': 'true'},
            body: JSON.stringify({
                "name": prenom ,
                "surname": nom,
            })
        }
        fetch('http://localhost:8080/user',params)
            .then(console.log("c'est bon"));



    };

    useEffect(() => {
      createUser();
    }, []);





    return(
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.headerBtn} >
          <Text style={styles.text2}>
          Bonjour, {prenom} {nom}
          </Text>
        </TouchableOpacity>
        <PopUp/>
        <BoutonMenu styleButton={styles.AppelBtn} styleText={styles.text} onPress={() => setModalVisible(true)} text="Appel d'urgence" icone="phone" styleIcone ={styles.iconTelephone}/>

        <BoutonMenu styleButton={styles.DossierBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Accueil', {
            prenom: prenom,
            nom: nom,
            })} text="Dossier Médical" icone="clipboard-plus-outline" styleIcone ={styles.iconDossier}/>

        <BoutonMenu styleButton={styles.TraitementBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Bonjour', {
            prenom: prenom,
            nom: nom,
            })} text="Traitements" icone="pill" styleIcone ={styles.iconTraitements}/>

        <BoutonMenu styleButton={styles.cahierBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Bonjour', {
            prenom: prenom,
            nom: nom,
            })} text="Bloc Notes" icone="pen" styleIcone ={styles.iconBlocNotes}/>

        <BoutonMenu styleButton={styles.consultationBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Bonjour', {
            prenom: prenom,
            nom: nom,
            })} text="Mes rendez-vous" icone="calendar" styleIcone ={styles.iconRDV}/>

        <BoutonMenu styleButton={styles.ParametreBtn} styleText={styles.text} onPress={() =>  navigation.navigate('Bonjour', {
            prenom: prenom,
            nom: nom,
            })} text="Générer ma Fiche" icone="file" styleIcone ={styles.iconParametre}/>

      </View>
     
    )
  }
 export default Home;


 