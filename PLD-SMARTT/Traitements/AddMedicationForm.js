import Header from "../Util/Header";
import {Pressable, StyleSheet, Text, View} from "react-native";
import FormField from "../Util/FormField";
import {useEffect, useState} from "react";
import styles from "../Style/styleHome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useIsFocused} from "@react-navigation/native";



const AddMedicationForm = ({route,navigation})=> {

    const [name, setName] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [freq, setFreq] = useState("");
    const [quant, setQuant] = useState("");
    const [time, setTime] = useState("");
    const isFocused = useIsFocused();

    useEffect(()=>{
        if(route.params.reset == true){
            setName("");
            setStart("");
            setEnd("");
            setFreq("");
            setQuant("");
            setTime("");
        }
    },[isFocused])

    const newMedic = () => {

        let startToFormat = start.slice(6,10) + "-"+start.slice(3,5) + "-"+ start.slice(0,2)
        let endToFormat = end.slice(6,10) + "-"+end.slice(3,5) + "-"+ end.slice(0,2)

        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "name": name,
                "startDate": null,
                "endDate": null,
                "numIntakesPerDay": freq,
                "timeBetweenIntake": time,
                "quantityPerIntakes": quant,
            })
        }


        fetch(route.params.url + '/medication/treatment/' + route.params.idTreatment, params)
            .then(response => response.json())
            .then(data => {
                navigation.navigate('AddMedicationFormRemark',{
                    "idTreatment":route.params.idTreatment,
                    "idMedication":data.id,
                })
            })

    }

    const deleteTreatment = () => {

        const params = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }

        fetch(route.params.url+'/treatment/id/'+route.params.treatmentId,params)
            .then(response =>{
                if(response.ok){
                    navigation.navigate('Traitements')
                }
                else{
                    alert("Il y a eu un problème")
                }

            })



    }


    return(
        <View style={style.container}>
            <Header navigation={navigation} title = {"Traitement"} color={"#2DB142"}/>
            <Text style={style.title}> Nouveau Médicament </Text>
            <FormField label = {"Nom"} color={"#2DB142"} field={name} setField={setName}/>
            <FormField placeholder={"DD/MM/YYYY"} label = {"Début"} color={"#2DB142"} field={start} setField={setStart} onPress/>
            <FormField placeholder={"DD/MM/YYYY"} label = {"Fin"} color={"#2DB142"}  field={end} setField={setEnd}/>
            <FormField inputWidth={"35%"} sizeFont={20}  label = {"Nombre de prises/jour"} color={"#2DB142"} field={freq} setField={setFreq}/>
            <FormField sizeFont={20} inputWidth={"50%"} label = {"Quantité par prise"} color={"#2DB142"} field={quant} setField={setQuant}/>
            <FormField sizeFont={15} inputWidth={"30%"} label = {"Temps entre les prises (en heures)"} color={"#2DB142"} field={time} setField={setTime}/>

            <View style={style.buttonView}>
                <View style={style.goThrough}>
                    <Pressable style={style.button}>
                        <Text onPress={deleteTreatment}>
                            Annuler
                        </Text>
                    </Pressable>
                    <Pressable onPress={newMedic} style={style.button}>
                        <Text>
                            Suivant
                        </Text>
                        <MaterialCommunityIcons name='arrow-right-bold-outline' color="#fff"/>
                    </Pressable>
                </View>
            </View>

        </View>
    )

}

export default AddMedicationForm;

const style = StyleSheet.create({

    buttonView:{
        marginTop:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    goThrough:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-evenly",
        marginBottom:20,
    },
    button:{
        backgroundColor:"gray",
        borderRadius:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        width:"30%",
        height:40,

    },
    title:{
        marginLeft:"auto",
        marginRight:"auto",
        fontSize:35,
        marginBottom:25,
        color:"#2DB142",
        fontWeight:"bold",
    },

    container:{

    }

})