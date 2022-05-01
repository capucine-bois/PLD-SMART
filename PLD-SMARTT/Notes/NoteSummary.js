import {StyleSheet, Text, View} from "react-native";

const NoteSummary = (props) => {
    return(
        <View style={noteSummaryStyle.container}>
            <Text style={noteSummaryStyle.title}>
                {props.title}
            </Text>
            <View style={noteSummaryStyle.line}></View>

            <View style={noteSummaryStyle.flexContainer}>
                <Text style={noteSummaryStyle.text}> {props.author} </Text>
                <Text style={noteSummaryStyle.text}> {props.date}</Text>
            </View>

        </View>
    );


}

export default NoteSummary;

const noteSummaryStyle = StyleSheet.create({
    container: {
        backgroundColor:"#F4A126",
        width:"80%",
        height:90,
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
        marginLeft:"auto",
        marginRight:"auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",

    },
    line:{
        width:"90%",
        backgroundColor:"white",
        height:5,
        marginLeft:"auto",
        marginRight:"auto",
        borderRadius:5
    }
});