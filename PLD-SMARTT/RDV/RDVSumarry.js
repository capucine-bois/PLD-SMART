import {StyleSheet, Text, View, Pressable} from "react-native";
import {useState} from "react";

const RDVSummary = (props) => {

    const month={"01":"Janvier","02":"Février","03":"Mars","04":"Avril","05":"Mai","06":"Juin","07":"Juillet","08":"Août","09":"Septembre","10":"Octobre",
    "11":"Novembre","12":"Décembre"};

    return(
        <Pressable style={style.container} onPress={() =>  props.navigation.navigate('RDV2',{
                id:props.rdv.id,
                dateFormat:props.rdv.dateFormat,
                date:props.rdv.date,
                namePractitioner:props.rdv.namePractitioner,
                typePractitioner:props.rdv.typePractitioner,
                commentaire:props.rdv.remark,
                location:props.rdv.location,
            })}
        >

            <View style={style.graph}>
                <View style={style.redBar}>
                </View>

                <View style={style.containerDate}>
                    <Text style={[style.textDate,{fontSize:25}]}>{props.rdv.jour}</Text>
                    <Text style={[style.textDate,{fontSize:20}]}>{month[props.rdv.mois]}</Text>
                </View>

            </View>

            <View style={style.containerPract}>
                <Text style={style.textPract}> {props.rdv.typePractitioner}</Text>
                <Text style={style.textPract}> {props.rdv.heure}h{props.rdv.min}</Text>
            </View>

        </Pressable>
    );


}

export default RDVSummary;

const style = StyleSheet.create({
    container: {
        height:100,
        width:"80%",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:25,
        display:"flex",
        flexDirection:"row",
    },
    containerDate:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    textDate:{
        fontWeight:"bold",
    },
    textPract:{
        marginLeft:15,
        marginTop:"auto",
        fontWeight:"bold",
        fontSize:18,
    },

    containerPract:{
        display:"flex",
        flexWrap:"wrap",
        marginTop:"auto",
        marginBottom:"auto",
    },
    redBar:{
        backgroundColor:"#BE4037",
        width:"100%",
        height:20,
        borderRadius:10,

    },
    graph:{
        width:100,
        height:100,
        backgroundColor:"#ECE9E9",
        borderRadius:10
    }

});