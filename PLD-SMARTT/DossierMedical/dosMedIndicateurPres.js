import {React,useState} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput, Pressable, KeyboardAvoidingView, Keyboard} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";
import FormField from "../Util/FormField";
import Header from "../Util/Header";
import { LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

function Bouton(props){
    return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
            <Text style={props.styleText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

function DosMedIndicateurPres({navigation}) {
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()
    const[title,setTitle]=useState('');
    const [remark, setRemark] = useState("");
    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    return(
        <View style={styles.container}>
            <Pressable onPress={()=>Keyboard.dismiss()}>
                <Header navigation={navigation} title = {"Dosser Médical"} color={"#1EA584"}/>
                <StatusBar style="auto" />
                <View style = {styles.titre}>
                    <Text style={styles.text}>
                        Indicateur Taille
                    </Text>
                </View>
                <View style={{height:"75%"}}>
                    <Text style={styles.textCourbe}>
                        Courbe
                    </Text>
                    <LineChart
                        style={ { height: 200 } }
                        dataPoints={ data }
                        fillColor={ 'purple' }
                        strokeColor={ 'rgb(134, 65, 244)' }
                        shadowColor={ 'rgba(134, 65, 244, 0.2)' }
                        contentInset={ { top: 20, bottom: 20 } }
                        curve={shape.curve}
                    />
                    <View style={{height:"15%", marginHorizontal:"15%", marginTop:"10%", flexDirection:"row", justifyContent:"space-between"}}>
                        <Bouton styleButton={styles.btnAjout} styleText={styles.text2} onPress={() =>  navigation.navigate('DosMedAllergies', {
                        })} text="Ajouter"/>
                        <Bouton styleButton={styles.btnAnnuler} styleText={styles.text2} onPress={() =>  navigation.navigate('DosMedAllergies', {
                        })} text="Annuler"/>
                    </View>
                </View>
            </Pressable>
        </View>
    )

}

export default DosMedIndicateurPres

const styles = StyleSheet.create({
    iconDossier: {
        marginRight:"5%"
    },
    descriptif:{
        flexDirection:"column",
        width: "80%",
        height:"40%",
        marginTop:"10%",
        alignSelf:"center",
    },
    scrollView:{
        borderWidth: 5,
        borderColor:"#1EA584",
        borderRadius:15,
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#1EA584",
        alignSelf:"center"
    },
    textCourbe:{
        fontSize: 22,
        fontWeight: 'bold',
        color: "#1EA584",
        alignSelf:"center"
    },
    picker:{
        backgroundColor: "#B8E6DA",
        width: "60%",
        paddingHorizontal:"5%",
        color: "#000000",
        alignSelf:"center"
    },
    text3:{
        color:"#1EA584",
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf:"center"
    },
    btnAjout: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 25,
        height: "45%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#1EA584",
        marginTop:"10%"
    },
    btnAnnuler: {
        width: "45%",
        flexDirection:"row",
        borderRadius: 25,
        height: "45%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#695353",
        marginTop:"10%"
    },
    text4:{
        color:"#1EA584",
        fontSize: 25,
        fontWeight: 'bold',
        marginTop:"5%",
        marginBottom:"2%"
    },
    headerBtn: {
        width: "100%",
        height: "11%",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingBottom:20,
        backgroundColor: "#1EA584"
    },
    container: {
        backgroundColor: '#ffffff'
    },
    text2: {
        fontSize: 20,
        textAlign:"center",
        fontWeight: 'bold',
        color: "#fff",
        flex: 1
    },
    TextInput: {
        backgroundColor: "#B8E6DA",
        borderRadius: 30,
        width: "60%",
        height: "100%",
        textAlign:"center",
        paddingHorizontal:"5%",
        color: "#000000",
        alignSelf:"center"
    },
    TextInput2: {
        width: "100%",
        padding:"5%",
        color: "#000000",
        fontSize:17,
        textAlignVertical:"top"
    },
    inputView: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:"10%",
        marginTop:"5%"

    },
    titre:{
        alignSelf:"center",
        marginBottom:"10%",
        color:"#000",

    },

    title2:{
        fontSize:25,
        color:"#1EA584",
        fontWeight:"bold",
        marginLeft:20,
        marginTop:"10%"
    },
    remarkInput:{
        width:"95%",
        textAlignVertical:"top",
        height:"35%",
        borderStyle:"solid",
        paddingLeft:"5%",
        paddingTop:"5%",
        marginLeft:"auto",
        marginRight:"auto",
        borderColor:"grey",
        borderRadius:10,
        borderWidth:5,
        marginTop:10
    }
})