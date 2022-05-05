import {StyleSheet, Text, View, Pressable} from "react-native";

const TreatmentSummary = (props) => {

    return(
        <Pressable style={treatmentSummaryStyle.container}>
            <Text style={treatmentSummaryStyle.title}>
                {props.title}
            </Text>
            <View style={treatmentSummaryStyle.line}></View>

            <View style={treatmentSummaryStyle.flexContainer}>
                <Text style={treatmentSummaryStyle.text}>Nombre de médicaments : {props.count} </Text>
            </View>

        </Pressable>
    );


}

export default TreatmentSummary;

const treatmentSummaryStyle = StyleSheet.create({
    container: {
        marginTop:25,
        backgroundColor:"#2DB142",
        height:90,
        width:"80%",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:25,
        borderRadius:10,
    },
    title:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginLeft:5,
        marginTop:10,
        marginBottom:10,
    },
    text:{
        color:"white",
        fontSize:15,
    },
    flexContainer:{
        marginTop:"auto",
        marginBottom:10,
        width:"70%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",

    },
    line:{
        width:"90%",
        backgroundColor:"white",
        marginLeft:"auto",
        marginRight:"auto",
        height:5,
        borderRadius:5
    }
});