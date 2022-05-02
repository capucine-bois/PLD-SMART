import {StyleSheet, Text, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonAdd = (props) => {

    function getStyle(color)
    {
        return {backgroundColor: color};
    }

    return(
        <TouchableOpacity style={[getStyle(props.color),style.styleBtn]} onPress={props.onPress}>
            <MaterialCommunityIcons style= {props.styleIcone} name={props.icone} color="#fff" size={45}/>
            <Text style={style.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    styleBtn: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop:50,
        marginLeft:"auto",
        marginRight:"auto",
    },
    text: {
        fontSize: 25,
        flex: 1,
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",


    },
});

export default ButtonAdd;

