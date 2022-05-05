import React, {Component, useEffect, useState} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Pressable, Modal
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../Style/styleHome'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import {useIsFocused} from "@react-navigation/native";
import {Picker} from "@react-native-picker/picker";
import FormField from "../Util/FormField";



const Notes2 =({route,navigation})=>{
    const[author,setAuthor] = useState(route.params.author);
    const[allAuthor, setAllAuthor] = useState([]);
    const[newAuthor, setNewAuthor] = useState("");
    const[titre,setTitre]=useState(route.params.title);
    const[note,setNote]=useState(route.params.note);
    const[toggleNote, setToggleNote] = useState(false);
    const[state, setState] = useState(route.params.state);
    const[disabled,setDisabled] = useState(false);
    const isFocused = useIsFocused();
    const [modalVisible, setModalVisible] = useState(false);

    //Get all the notes
    useEffect(async () => {
        if (isFocused) {
            if (route.params.id == -1) {
                setDisabled(false);
            } else {
                setDisabled(true);
            }

            const jsonAuthor = await AsyncStorage.getItem("authors")
            if(jsonAuthor != null) {
                let jsonAuthorArray = JSON.parse(jsonAuthor);
                setAllAuthor(jsonAuthorArray);
            }

        }
    },[isFocused]);


    const deleteNote = () => {
        const params = {
            method:"DELETE",
        }

        fetch(route.params.url+"/notes/id/"+route.params.id,params)
            .then(response => navigation.navigate('BlocNotes'))
    }

    const changePicker = (value) => {
        if(value == "add"){
            setModalVisible(!modalVisible);
        }
        else{
            setAuthor(value);
        }
    }

    const addAuthor = async () => {
        const jsonAuthor = await AsyncStorage.getItem("authors")
        if (jsonAuthor != null) {
            let jsonAuthorArray = JSON.parse(jsonAuthor);
            jsonAuthorArray.push(newAuthor);
            AsyncStorage.setItem("authors", JSON.stringify(jsonAuthorArray));
            setAllAuthor(jsonAuthorArray);
        }
        else{
            let arr = [newAuthor];
            AsyncStorage.setItem("authors",JSON.stringify(arr));
            setAllAuthor(arr);

        }

        setModalVisible(false);
    }

    const addOrChange = () => {

        const params = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "author": author,
                "title": titre,
                "note": note,
                "id": route.params.id,
                "date":route.params.date,
                "state":state,
            })
        }

        AsyncStorage.getItem('token')
            .then((token) => {
                fetch(route.params.url+'/notes/user/'+token,params)
                    .then(response => navigation.navigate('BlocNotes'))
            });
    }

    return(
        <View style={style.container}>
        
            <TouchableOpacity style={style.headerBtn} onPress={() =>  navigation.navigate('Accueil')}>
            <Text style={styles.text2}>
             Mon Bloc Notes
             </Text>
             <MaterialCommunityIcons style={styles.iconDossier}  name='home' color="#fff" size={30}/>
            </TouchableOpacity>


            <View style={style.inputView}>
                {route.params.id == -1 ?
                    <Picker
                        selectedValue={author}
                        style={style.picker}
                        onValueChange={(itemValue, itemIndex) => changePicker(itemValue)}
                    >
                        <Picker.Item label="Vous" value={"vous"}/>
                        {allAuthor.map(auth =>(
                            <Picker.Item key={auth} label={auth} value={auth}/>
                        ))}
                        <Picker.Item label="Ajouter un auteur" value="add"/>
                    </Picker>
                    :
                    <Text style={style.auteur}>
                        {author}
                    </Text>

                }

            </View>


            <View style={style.inputView}>

                <TextInput
                    editable={!disabled}
                    style={style.TextInput}
                    placeholder="Titre"
                    placeholderTextColor="#003f5c"
                    onChangeText={(titre) => setTitre(titre)}
                >
                    {titre}
                </TextInput>
            
            </View>


            <View style={{display:"flex",alignItems:"center"}}>
                <View style={style.stateFilters}>
                    <Radio disabled={disabled} label={"Alarmant"} value={"alarmant"} radioAttr={state} setRadioAttr={setState}/>
                    <Radio disabled={disabled} label={"Mauvais"} value={"mauvais"} radioAttr={state} setRadioAttr={setState}/>
                    <Radio disabled={disabled} label={"Bon"} value={"bon"} radioAttr={state} setRadioAttr={setState}/>
                </View>

                { route.params.id == -1 ?
                        <Checkbox toggleCheck={toggleNote} setToggleCheck={setToggleNote} label ="Ajouter une note"/>
                    :
                        null
                }

            </View>


            {
                toggleNote || route.params.id != -1?
                    <ScrollView style={{marginTop:20,textAlign:'left',width: "80%",height:"40%",borderWidth: 5,borderColor:"#ffd700",borderRadius:15}}>
                        <TextInput
                            style={style.TextInput}

                            placeholder="Écrire ma nouvelle note"
                            placeholderTextColor="#003f5c"
                            onChangeText={(note) => setNote(note)}
                        >
                            {note}
                        </TextInput>

                    </ScrollView>
                    :
                    null
            }


             {
                 route.params.id == -1 ?
                     <View style={style.BtnView}>
                         <TouchableOpacity  style={[style.btn, style.AjouterBtn]} onPress={addOrChange} >
                             <Text>
                                 Ajouter
                             </Text>
                         </TouchableOpacity>

                         <TouchableOpacity style={[style.btn, style.AnnulerBtn]} onPress={()=>navigation.navigate('BlocNotes')}>
                             <Text>
                                 Annuler
                             </Text>
                         </TouchableOpacity>
                     </View>
                 :
                     <View style={style.BtnView}>
                         <TouchableOpacity  style={[style.btn, style.AjouterBtn]} onPress={addOrChange} >
                             <Text>
                                 Modifier
                             </Text>
                         </TouchableOpacity>

                         <TouchableOpacity style={[style.btn, style.AnnulerBtn]} onPress={()=>navigation.navigate('BlocNotes')}>
                             <Text>
                                 Précédent
                             </Text>
                         </TouchableOpacity>


                     </View>
             }


            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <Text style={style.titleModal}> Ajouter un auteur </Text>
                        <TextInput
                            style={style.input}
                            value={newAuthor}
                            placeholder={""}
                            onChangeText={setNewAuthor}
                        />

                        <View style={style.modalButtonView}>
                            <Pressable onPress={() => addAuthor()} style={style.modalButton}>
                                <Text>Ajouter</Text>
                            </Pressable>
                            <Pressable style={style.modalButton} onPress={() => {setModalVisible(false)}}>
                                <Text>Annuler</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>

            </Modal>

        
        </View>


    )
}

export default Notes2;

const style = StyleSheet.create({
    modalButton:{
        borderRadius:5,
        backgroundColor:"gray",
        width:80,
        height:40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginRight:20,
    },
    auteur:{
      paddingLeft:25,
    },
    input:{
        borderStyle:"solid",
        width:"70%",
        paddingLeft:"5%",
        borderColor:"gray",
        borderRadius:10,
        borderWidth:5,
    },
    titleModal:{
        fontSize:25,
        fontWeight:"bold",
        marginTop:10,
    },
    modalButtonView:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width:"80%",
        height:"40%",
        display:"flex",
        justifyContent:"space-evenly",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    picker:{
        width: "80%",
        marginLeft:"auto",
        marginRight:"auto",
        color: "#000000",
    },
    pickerView:{

        paddingHorizontal:"10%",

    },

    headerBtn: {
        width: "100%",
        height: "11%",
        display:"flex",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingBottom:20,
        backgroundColor: "#ffd700",
        marginBottom:30,
        
      },

        stateFilters:{
            marginTop:20,
            display:"flex",
            flexDirection:"row",
        },

      container: {
        display:"flex",
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        height:"100%",
      },
      nouvelleNoteBtn: {
        width: "80%",
        display:"flex",
        flexDirection:"row",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#ffd700",
        marginBottom: 160,
      },
      text: {
        fontSize: 30,
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",
        
      
      },
      TextInput: {
        height: 40,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color: "#000000",
      },

    inputView: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: "#9C9C9C",
        borderRadius: 30,
        width: "80%",
        height: 50,
        alignItems: "center",
    },

    btn:{
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
    },

    AjouterBtn: {
        backgroundColor: "#ffd700",
    },
    AnnulerBtn: {
        backgroundColor: "#9C9C9C",
    },

    deleteBtn:{
        backgroundColor: "red",
    },

    BtnView: {
        height:"20%",
        width:"80%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },

});