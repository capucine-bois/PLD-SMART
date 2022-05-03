import {StyleSheet, Text, View, Pressable} from "react-native";

const RDVSummary = (props) => {

    return(
        <Pressable style={style.container}>
            <View style={style.graph}>
                <View style={style.redBar}>

                </View>

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