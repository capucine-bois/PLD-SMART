import {React,useState} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput, Pressable, KeyboardAvoidingView, Keyboard} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";
import FormField from "../Util/FormField";
import Header from "../Util/Header";
import DateCompletion from "../Util/DateCompletion";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Bouton(props){
    return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
            <Text style={props.styleText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

function DosMedPathologiesAj({navigation,route}) {
    //const prenom = "Gérard"
    //const nom = "Dupont".toUpperCase()
    const {prenom,nom,appareillages,allergies,pathologies,vaccins}=route.params

    const[title,setTitle]=useState('');
    const [remark, setRemark] = useState("");
    const[dateDeb,setDateDeb]=useState('');
    const[dateFin,setDateFin]=useState('');



    const addPathologie= () => {

        var moisDeb= dateDeb.slice(3,5);
        var jourDeb = dateDeb.slice(0,2);
        var yearDeb = dateDeb.slice(6,10);
        var dateDebFormate = yearDeb + '-'+moisDeb+'-'+jourDeb ;

        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name":title,
                "description": remark ,
                "startDate":dateDebFormate,
                
            })
        }
        AsyncStorage.getItem('token')
        .then((token) => {
            fetch(route.params.url+'/pathology/'+token,params)
                .then(response => {
                    if(response.ok) {
                        navigation.navigate('DosMedPathologies', {prenom:prenom,nom:nom,appareillages:appareillages,pathologies:pathologies,vaccins:vaccins,allergies:allergies
                        })
                    }
                });
        });
            
      };

    return(
        <View style={styles.container}>
            <Pressable onPress={()=>Keyboard.dismiss()}>
                <Header navigation={navigation} title = {"Dosser Médical"} color={"#1EA584"}/>
                <StatusBar style="auto" />
                <View style = {styles.titre}>
                    <Text style={styles.text}>
                        Nouvelle pathologie
                    </Text>
                </View>
                <View style={{height:"80%"}}>
                    <FormField label = {"Titre"} color={"#1EA584"} field={title} setField={setTitle}/>
                    <DateCompletion label = {"Date de début"} color={"#1EA584"} field={dateDeb} setField={setDateDeb} keyboardType={'numeric'}/>
                    <Text style={styles.title2}> Descriptif </Text>
                    <TextInput
                        style={styles.remarkInput}
                        value={remark}
                        multiline={true}
                        onChangeText={setRemark}
                    />
                    <View style={{height:"15%", marginHorizontal:"15%", marginTop:"10%", flexDirection:"row", justifyContent:"space-between"}}>
                        <Bouton styleButton={styles.btnAjout} styleText={styles.text2} onPress={() =>  addPathologie()} text="Ajouter"/>
                        <Bouton styleButton={styles.btnAnnuler} styleText={styles.text2} onPress={() =>  navigation.navigate('DosMedPathologies', {prenom:prenom,nom:nom,appareillages:appareillages,pathologies:pathologies,vaccins:vaccins,allergies:allergies
                        })} text="Annuler"/>
                    </View>
                </View>
            </Pressable>
        </View>
    )

}

export default DosMedPathologiesAj

const styles = StyleSheet.create({
    iconDossier: {
        marginRight:"5%"
    },
    descriptif:{
        flexDirection:"column",
        width: "80%",
        height:"40%",
        marginTop:"10%",
        alignSelf:"center",
    },
    scrollView:{
        borderWidth: 5,
        borderColor:"#1EA584",
        borderRadius:15,
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#1EA584",
        alignSelf:"center"
    },
    picker:{
        backgroundColor: "#B8E6DA",
        width: "60%",
        paddingHorizontal:"5%",
        color: "#000000",
        alignSelf:"center"
    },
    text3:{
        color:"#1EA584",
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf:"center"
    },
    btnAjout: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 25,
        height: "45%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#1EA584",
    },
    btnAnnuler: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 25,
        height: "45%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#695353",
    },
    text4:{
        color:"#1EA584",
        fontSize: 25,
        fontWeight: 'bold',
        marginTop:"5%",
        marginBottom:"2%"
    },
    container: {
        backgroundColor: '#ffffff'
    },
    text2: {
        fontSize: 20,
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",
        flex: 1
    },
    titre:{
        alignSelf:"center",
        marginBottom: "10%",
        color:"#000",

    },
    title2:{
        fontSize:25,
        color:"#1EA584",
        fontWeight:"bold",
        marginLeft:20,
    },
    remarkInput:{
        width:"95%",
        textAlignVertical:"top",
        height:"35%",
        borderStyle:"solid",
        paddingLeft:"5%",
        paddingTop:"5%",
        marginLeft:"auto",
        marginRight:"auto",
        borderColor:"grey",
        borderRadius:10,
        borderWidth:5,
        marginTop:10
    }
})