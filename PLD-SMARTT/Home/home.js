import { StatusBar } from 'expo-status-bar';
import { Linking, Image,Platform,Alert, Modal, Pressable,TouchableOpacity,StyleSheet, Text, TouchableWithoutFeedbackBase, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { Component, useState } from 'react';
  
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
    return(
      <View style={styles.container}>
        
        <TouchableOpacity style={styles.headerBtn} >
          <Text style={styles.text2}>
          Bonjour, {prenom} {nom}
          </Text>
        </TouchableOpacity>
        <PopUp/>
        <BoutonMenu styleButton={styles.AppelBtn} styleText={styles.text} onPress={() => setModalVisible(true)} text="Appel d'urgence" icone="phone" styleIcone ={styles.iconTelephone}/>

        <BoutonMenu styleButton={styles.DossierBtn} styleText={styles.text} onPress={() =>  navigation.navigate('DossierMedical', {
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


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  headerBtn: {
    width: "100%",
    
    height: 100,
    
    
    display:"flex",
    flexDirection:"row",
    alignItems:"flex-end",
    marginTop: '25%',
    paddingBottom:20,
    backgroundColor: "#5169A7",
    marginBottom:30,
    
  },
  AppelBtn: {
    width: "100%",
    display:"flex",
    flexDirection:"row",
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#f00020",
    marginBottom: 5,
    
  },
  DossierBtn: {
    width: "100%",
    display:"flex",
    flexDirection:"row-reverse",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#0080ff",
    marginBottom: 5,
  },
  TraitementBtn: {
    width: "100%",
    display:"flex",
    flexDirection:"row",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#34C924",
    marginBottom: 5,
  },
  cahierBtn: {
    width: "100%",
    display:"flex",
    flexDirection:"row-reverse",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#ffd700",
    marginBottom: 5,
  },
    consultationBtn: {
      width: "100%",
      display:"flex",
    flexDirection:"row",
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 0,
      backgroundColor: "#9e0e40",
      marginBottom: 5,
  },
  ParametreBtn: {
    width: "100%",
    display:"flex",
    flexDirection:"row",
    
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#7f00ff",
    marginBottom: 210,
    
   
},
text: {
  fontSize: 40,
  flex: 1,
  textAlign: 'center',
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
iconParametre: {
  marginLeft:"10%"
},
iconTelephone: {
  marginLeft:"5%"

},
iconTraitements: {
  marginLeft:"10%"

},

iconDossier: {
  marginRight:"5%"
},
iconBlocNotes: {
  marginRight:"5%"
},
iconRDV: {
  marginLeft:"2%"
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  height: "80%",
  width: "80%",
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  flex: 1,
  alignItems: "center",
      justifyContent: "center",
      flexDirection: 'column',

  
  height: "30%",
  width:"90%",
  backgroundColor: "#FF0000",
},
buttonClose2: {
  flex: 1,
  alignItems: "center",
      justifyContent: "center",
      flexDirection: 'column',
  marginTop:"2%",
  height: "30%",
  width:"90%",
  backgroundColor: "#9C9C9C",
},
textStyle: {
  fontSize:30,
  textAlign:"center",
  
  color: "white",
  fontWeight: "bold",
  
},
modalText: {
  fontSize: 50,
  alignItems: "center",
  textAlign: "center"
}
});