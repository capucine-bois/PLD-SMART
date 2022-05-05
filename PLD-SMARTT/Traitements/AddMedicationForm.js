import Header from "../Util/Header";
import {Pressable, StyleSheet, Text, View} from "react-native";
import FormField from "../Util/FormField";
import {useState} from "react";
import styles from "../Style/styleHome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



const AddMedicationForm = ({route,navigation})=> {

    const [name, setName] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [freq, setFreq] = useState("");
    const [quant, setQuant] = useState("");
    const [time, setTime] = useState("");

    return(
        <View style={style.container}>
            <Header navigation={navigation} title = {"Traitement"} color={"#2DB142"}/>
            <Text style={style.title}> Nouveau Médicament </Text>
            <FormField label = {"Nom"} color={"#2DB142"} field={name} setField={setName}/>
            <FormField placeholder={"DD/MM/YYYY"} label = {"Début"} color={"#2DB142"} field={start} setField={setStart} onPress/>
            <FormField placeholder={"DD/MM/YYYY"} label = {"Fin"} color={"#2DB142"}  field={end} setField={setEnd}/>
            <FormField inputWidth={"35%"} sizeFont={20}  label = {"Nombre de prises/jour"} color={"#2DB142"} field={freq} setField={setFreq}/>
            <FormField sizeFont={20} inputWidth={"50%"} label = {"Quantité par prise"} color={"#2DB142"} field={quant} setField={setQuant}/>
            <FormField sizeFont={15} inputWidth={"30%"} label = {"Temps entre les prises (en heures)"} color={"#2DB142"} field={setTime} setField={setTime}/>

            <View style={style.buttonView}>
                <View style={style.goThrough}>
                    <Pressable style={style.button}>
                        <MaterialCommunityIcons name='arrow-left-bold-outline' color="#fff"/>
                        <Text>
                            Précédent
                        </Text>
                    </Pressable>
                    <Pressable style={style.button}>
                        <Text>
                            Nouveau
                        </Text>
                        <MaterialCommunityIcons name='arrow-right-bold-outline' color="#fff"/>
                    </Pressable>
                </View>
                <Pressable style={style.button}>
                    <Text>
                        Fin
                    </Text>
                </Pressable>
            </View>

        </View>
    )

}

export default AddMedicationForm;

const style = StyleSheet.create({

    buttonView:{
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