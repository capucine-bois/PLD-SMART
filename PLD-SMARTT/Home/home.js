import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Text, TouchableWithoutFeedbackBase, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { Component, useState } from 'react';





  
  
  
  const Home = ({route,navigation}) =>{
    const [param, setParam] = useState('Bonjour');
    const{prenom,nom}= route.params;
    const BoutonMenu = (props) =>{
      return (
        <TouchableOpacity style={props.styleButton} onPress={() =>  
            navigation.navigate(props.onPress, {
            prenom: prenom,
            nom: nom,
            })}>
          <MaterialCommunityIcons style= {props.styleIcone} name={props.icone} color="#fff" size={35}/>
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

        <BoutonMenu styleButton={styles.AppelBtn} styleText={styles.text} onPress='Bonjour' text="Appel d'urgence" icone="phone" styleIcone ={styles.iconTelephone}/>

        <BoutonMenu styleButton={styles.DossierBtn} styleText={styles.text} onPress='Bonjour' text="Dossier Médical" />

        <BoutonMenu styleButton={styles.TraitementBtn} styleText={styles.text} onPress='Bonjour' text="Traitements" icone="pill" styleIcone ={styles.iconTraitements}/>

        <BoutonMenu styleButton={styles.cahierBtn} styleText={styles.text} onPress='Bonjour' text="Bloc Notes"/>

        <BoutonMenu styleButton={styles.consultationBtn} styleText={styles.text} onPress='Bonjour' text="Mes rendez-vous" icone="calendar" styleIcone ={styles.iconTelephone}/>

        <BoutonMenu styleButton={styles.ParametreBtn} styleText={styles.text} onPress='Bonjour' text="Paramètres" icone="cog-outline" styleIcone ={styles.iconParametre}/>

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
    flexDirection:"row-reverse",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#008000",
    marginBottom: 5,
  },
  cahierBtn: {
    width: "100%",
    
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#ff8000",
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
  marginRight:"5%"

},
});