import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Text, TouchableWithoutFeedbackBase, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

  
  
  const Home = ({route,navigation}) =>{
    
    const{prenom,nom}= route.params;
    const onPress = () =>  
    /* 1. Navigate to the Details route with params */
    navigation.navigate('Bonjour', {
      prenom: prenom,
      nom: nom,
    })
    console.log("salut")
    console.log(prenom)
    console.log(nom)

    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPress}>
          
          <Text style={styles.text2}>
        Bonjour, {prenom} {nom}
        
        </Text>
        
        </TouchableOpacity>
        
    <TouchableOpacity style={styles.AppelBtn} onPress={onPress}>
          
          <Text style={styles.text}>
        Appel d'urgence
        
        </Text>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.DossierBtn}>
          
        <Text style={styles.text}>
        Dossier Médical
        
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TraitementBtn}>
        <Text style={styles.text}>Traitement</Text>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.cahierBtn}>
          
        <Text style={styles.text}>
        Cahier de Notes
        
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.consultationBtn}>
          
        <Text style={styles.text}>
        Consultations
        
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.ParametreBtn}>
        <MaterialCommunityIcons name="cog-outline" color="#fff" size={35} />
        <Text style={styles.text}>
        Paramètres
        
        </Text>

        </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#0080ff",
    marginBottom:30,
    
  },
  AppelBtn: {
    width: "100%",
    
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#f00020",
    marginBottom: 5,
    
  },
  DossierBtn: {
    width: "100%",
    
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#0080ff",
    marginBottom: 5,
  },
  TraitementBtn: {
    width: "100%",
    
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#008000",
    marginBottom: 5,
  },
  cahierBtn: {
    width: "100%",
    
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#ff8000",
    marginBottom: 5,
  },
    consultationBtn: {
      width: "100%",
      
      height: 80,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 0,
      backgroundColor: "#9e0e40",
      marginBottom: 5,
  },
  ParametreBtn: {
    width: "100%",
    
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#7f00ff",
    marginBottom: 210,
   
},
text: {
  fontSize: 40,
  flex: 1,
  textAlign: 'right',
  fontWeight: 'bold',
  color: "#fff",
  

},
text2: {
  fontSize: 20,
  flex: 1,
  textAlign: 'center',
  fontWeight: 'bold',
  padding: 70,
  color: "#fff",
  

},
});