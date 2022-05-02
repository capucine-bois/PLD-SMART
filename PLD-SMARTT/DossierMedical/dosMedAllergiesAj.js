import {React,useState} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";

function DosMedAllergiesAj({navigation}) {
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()
    const[titre,setTitre]=useState('');
    const[severite,setSeverite]=useState('');
    const[note,setNote]=useState('');

    const[ajouterModifier,setAjouterModifier]=useState('Ajouter');
    const [bouton, setBouton] = useState(false);
    return(
        <View style={styles.container}>
            <View style={styles.headerBtn}>
                <Text style={styles.text2}>
                    Dossier Médical
                </Text>
                <TouchableOpacity>
                    <MaterialCommunityIcons style= {{marginRight:"5%"}} name='home' color="#fff" size={30} onPress={() =>  navigation.navigate('Accueil', {
                        prenom: prenom,
                        nom: nom,
                    })}/>
                </TouchableOpacity>
            </View>
            <View style = {styles.titre}>
                <Text style={styles.text}>
                    Nouvelle allergie
                </Text>
            </View>
            <View style={styles.inputView}>
                <StatusBar style="auto" />
                <TextInput
                    style={styles.TextInput}
                    placeholder="Titre"
                    placeholderTextColor="#000"
                    onChangeText={(titre) => setTitre(titre)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Séverité"
                    placeholderTextColor="#000"
                    onChangeText={(severite) => setSeverite(severite)}
                />

            </View>
            <Text style={{textAlign:'center',marginTop:40, color:"#1EA584",fontSize: 25, fontWeight: 'bold'}}>
                Descriptif
            </Text>
            <ScrollView style={{marginTop:20,textAlign:'left',width: "80%",height:"40%",borderWidth: 5,borderColor:"#1EA584",borderRadius:15, alignSelf:"center"}}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Décrire mon allergie"
                    placeholderTextColor="#000"
                    onChangeText={(note) => setNote(note)}
                />

            </ScrollView>

            <View style={{height:"15%"}}>


                <TouchableOpacity style={styles.ajoute}  >
                    <Text style={styles.text}>
                        Ajouter
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.annule} onPress={()=>navigation.navigate('DosMedAllergies', {
                    prenom: prenom,
                    nom: nom,
                })}>
                    <Text style={styles.text}>
                        Annuler
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )

}

export default DosMedAllergiesAj

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#fff",
        alignSelf:"center"
    },
    iconDossier: {
        marginRight:"5%"
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
        height: 40,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000000",
    },
    inputView: {
        alignSelf:"center",
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: "#B8E6DA",
        borderRadius: 30,
        width: "80%",
        height: 50,
        alignItems: "center",
    },
    titre:{
        alignSelf:"center",
        margin:"5%",
        color:"#000"
    },
})

