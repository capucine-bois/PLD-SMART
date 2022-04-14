
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

  export default styles;