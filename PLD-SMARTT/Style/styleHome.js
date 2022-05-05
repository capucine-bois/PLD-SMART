import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff'
    },
    AppelBtn: {
      width: "100%",
      flexDirection:"row",
      height: 75,
      alignItems: "center",
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
        backgroundColor: "#9e0e40",
        marginBottom: 5,
    },
    ParametreBtn: {
      width: "100%",
      display:"flex",
      flexDirection:"row-reverse",
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#4F4150",
      marginBottom: 5,
      
     
  },
  FicheBtn: {
    width: "100%",
    display:"flex",
    flexDirection:"row",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#7f00ff",
    marginBottom: 5,


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
  iconFiche: {
    marginLeft:"10%"
  },
  iconParametre: {
    marginRight:"5%"
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
  modalView: {
    height: "80%",
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    marginTop:"25%",
    alignSelf:"center",
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

  export default styles;