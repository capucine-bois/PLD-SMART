import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,StyleSheet, Text, TouchableWithoutFeedbackBase, View } from 'react-native';


  
  
  const Home = () =>{
    return(
      <View style={styles.container}>
    <TouchableOpacity style={styles.AppelBtn}>
          
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
  AppelBtn: {
    width: "100%",
    
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
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
    marginBottom: 100,
},
text: {
  fontSize: 40,
  
  textAlign: 'left',
  fontWeight: 'bold',
  color: "#fff"
},
});