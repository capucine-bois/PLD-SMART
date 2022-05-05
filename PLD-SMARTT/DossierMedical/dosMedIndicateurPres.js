import {React,useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Pressable, Keyboard} from 'react-native';
import {StatusBar} from "expo-status-bar";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "../Util/Header";
import PureChart from "react-native-pure-chart";


function Bouton(props){
    return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
            <Text style={props.styleText}>
                {props.text}
            </Text>
            <MaterialCommunityIcons style= {props.styleIcone} name={props.icone} color="#fff" size={45}/>
        </TouchableOpacity>
    )
}

function DosMedIndicateurPres({navigation}) {
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()
    let mesures =  [
        {key: '01/02/2022 : 1m75'},
        {key: '22/06/2022 : 1m74'},
        {key: '19/11/2022 : 1m73,5'},
        {key: '03/08/2023 : 1m72'},
        {key: '11/12/2023 : 1m71'}]

    let sampleData = [
        {x: '01/02/2022', y: 175},
        {x: '22/06/2022', y: 174},
        {x: '19/11/2022', y: 173.5},
        {x: '03/08/2023', y: 172},
        {x: '11/12/2023', y: 171},
    ]

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
                <View style={{height:"78%", alignItems:"center"}}>
                    <Text style={styles.textCourbe}>
                        Courbe
                    </Text>
                    <View style={{height:"30%", marginTop:"5%", paddingVertical:"8%", borderWidth:5, borderColor:"#1EA584", borderRadius:20}}>
                        <PureChart data={sampleData} type='line' style={{alignSelf:"center"}}/>
                    </View >
                    <View style={{height:"30%",margin:"5%"}}>
                        <Text style={styles.textMes}>Mesures</Text>
                        <FlatList
                            data={mesures}
                            renderItem={({item}) => <View style={{flexDirection:"row"}}><MaterialCommunityIcons style= {{alignSelf:"center"}} name={"square-small"} color="#000" size={45}/><Text style={styles.item}>{item.key}</Text></View>}
                        />
                    </View>
                    <View style={{height:"15%"}}>
                        <Bouton styleButton={styles.nouvelIndicateurBtn} styleText={styles.textAjout} onPress={() =>  navigation.navigate('DosMedIndicateurAjMes', {
                        })} text="Ajouter une mesure" icone="plus" styleIcone ={styles.iconDossier}/>
                    </View>

                </View>
            </Pressable>
        </View>
    )

}

export default DosMedIndicateurPres

const styles = StyleSheet.create({
    item: {
        fontSize: 16,
        alignSelf:"center"
    },
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
    textAjout: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#fff",
        alignSelf:"center",
    },
    scrollView:{
        borderWidth: 5,
        borderColor:"#1EA584",
        borderRadius:15,
    },
    nouvelIndicateurBtn: {
        width: "70%",
        flexDirection:"row",
        borderRadius: 20,
        height: "60%",
        alignItems: "center",
        alignSelf:"center",
        justifyContent: "space-evenly",
        backgroundColor: "#1EA584",
        marginTop:"6%",
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: "#1EA584",
        alignSelf:"center"
    },
    textCourbe:{
        textDecorationLine:"underline",
        fontSize: 22,
        fontWeight: 'bold',
        color: "#1EA584",
        alignSelf:"center"
    },
    textMes:{
        textDecorationLine:"underline",
        fontSize: 22,
        fontWeight: 'bold',
        color: "#1EA584",
        alignSelf:"center",
        marginTop:"3%",
        marginBottom:"7%"
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
        width: "80%",
        flexDirection:"row",
        borderRadius: 25,
        height: "50%",
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