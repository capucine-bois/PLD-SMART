import {StyleSheet} from "react-native";
import {useState} from "react";
import {Text, TextInput, View} from "react-native";

function getStyle(color)
{
    return {color: color};
}


const FormField = (props) => {

    return(
        <View style={style.container}>
            <Text style={[style.text,getStyle(props.color)]}> {props.label} </Text>
            <TextInput
                style={style.input}
                value={props.field}
                placeholder={props.placeholder}
                onChangeText={props.setField}
                keyboardType = {props.keyboardType}
            />

        </View>
    );

}

export default FormField;

const style = StyleSheet.create({
    container:{
        width:"90%",
        marginLeft:"auto",
        marginRight:"auto",
        height:50,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:20,
    },
    input:{
        borderStyle:"solid",
        width:"70%",
        paddingLeft:"5%",
        borderColor:"gray",
        borderRadius:10,
        borderWidth:5,
    },
    text:{
        fontSize:25,
        fontWeight:"bold",
    }
});