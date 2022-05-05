import {StyleSheet, Text, View, Pressable} from "react-native";

function getColor(state){
    if(state == "bon"){
        return {backgroundColor:"green"}
    }
    else if(state == "mauvais"){
        return {backgroundColor:"orange"}
    }
    else {
        return {backgroundColor:"red"}
    }
}
const NoteSummary = (props) => {

    return(
        <Pressable style={[noteSummaryStyle.container,getColor(props.state)]} onPress={() =>  props.navigation.navigate('BlocNotes2', {"title":props.title,"date":props.date, "author":props.author, "state":props.state, "note":props.note,"id":props.id})}>
            <Text style={noteSummaryStyle.title}>
                {props.title}
            </Text>
            <View style={noteSummaryStyle.line}></View>

            <View style={noteSummaryStyle.flexContainer}>
                <Text style={noteSummaryStyle.text}> {props.author} </Text>
                <Text style={noteSummaryStyle.text}> {props.date}</Text>
            </View>

        </Pressable>
    );


}

export default NoteSummary;

const noteSummaryStyle = StyleSheet.create({
    container: {
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