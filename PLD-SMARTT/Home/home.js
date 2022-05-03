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
    const[tailleTableau,setTailleTableau]=useState(0);
    const [medicaleFile,setMedicaleFile]=useState('inscrDossierMedical');
    const [taille,setTaille]=useState('')
    const [age,setAge]=useState('');
    const [poids,setPoids]=useState('')
    const [allergies,setAllergies]=useState('')
    const [pathologies,setPathologie]=useState('')
    const [vaccins, setVaccins]=useState('')
    const [appareillages,setAppareillages]=useState('')
    const [indicateurs,setIndicateurs]=useState('')

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
              if(data.medicalFile.height.length != 0){
                setMedicaleFile('DossierMedical');
              }else{
                setMedicaleFile('inscrDossierMedical');
              }
              setTailleTableau(data.medicalFile.weight.length -1);
              setPoids(data.medicalFile.weight[tailleTableau].value)
              setAllergies(data.medicalFile.allergies)
              setPathologie(data.medicalFile.pathologies)
              setVaccins(data.medicalFile.vaccines)
              setAppareillages(data.medicalFile.equipments)
              setTailleTableau(data.medicalFile.height.length -1);
              setTaille(data.medicalFile.height[tailleTableau].value)
           })
        })
    }

    useEffect(() => {
      if(isFocused){
      checkMedicalFile();
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
          <ButtonMenu styleButton={styles.DossierBtn} styleText={styles.text} onPress={() =>  navigation.navigate(medicaleFile, {
              prenom: prenom,
              nom: nom,
              poids: poids,
              taille: taille,
              allergies:allergies,
              pathologies:pathologies,
              vaccins:vaccins,
              appareillages:appareillages,
          })} text="Dossier Médical" icone="clipboard-plus-outline" styleIcone ={styles.iconDossier}/>
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


 