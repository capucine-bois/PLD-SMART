import {StyleSheet, Text, TouchableOpacity} from "react-native";
import styles from "../Style/styleHome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function getStyle(color)
{
    return {backgroundColor: color};
}


const Header = (props) => {

    return(
        <TouchableOpacity style={[getStyle(props.color),style.headerBtn]} onPress={() => props.navigation.navigate('Accueil')}>
            <Text style={styles.text2}>
                {props.title}
            </Text>
            <MaterialCommunityIcons style={styles.iconDossier} name='home' color="#fff" size={30}/>
        </TouchableOpacity>
    )
}

export default Header;

const style = StyleSheet.create({

    headerBtn:{

        width: "100%",
        height: 75,
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingBottom:20,
        marginBottom:30,

    },


});