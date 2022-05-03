import React, { useState,useEffect } from 'react';
import {
    FlatList,
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Pressable,
    KeyboardAvoidingView, Platform
} from 'react-native';
import Header from "../Util/Header";
import FormField from "../Util/FormField";
import DateTimePickerModal from "react-native-modal-datetime-picker";



const AddTreatmentForm = ({route,navigation})=> {

    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [remark, setRemark] = useState("");
    const [dateFormateDebut,setDateFormateDebut]=useState("");
    const [dateFormateFin,setDateFormateFin]=useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isHourPickerVisible, setHourPickerVisibility] = useState(false);

    const showDatePicker = () => {
     setDatePickerVisibility(true);
    };

    const handleConfirmDebut = (date) => {
      setDate(date);
      var dd = date.getDate();
      var mm = date.getMonth() + 1; //January is 0!
      var yyyy = date.getFullYear();

      if (dd < 10) {
          dd = '0' + dd;
      }
      if (mm < 10) {
          mm = '0' + mm;
      }
      setDateFormateDebut( dd+"/"+mm+"/"+yyyy);


      hideDatePicker();
    };

    const handleConfirmEnd = (date) => {
      setDate(date);
      var dd = date.getDate();
      var mm = date.getMonth() + 1; //January is 0!
      var yyyy = date.getFullYear();

      if (dd < 10) {
          dd = '0' + dd;
      }
      if (mm < 10) {
          mm = '0' + mm;
      }
      setDateFormateFin( dd+"/"+mm+"/"+yyyy);


      hideDatePicker();
    };

    return (

        <View style={style.container}>
            <KeyboardAvoidingView
                behavior="position"
                style={style.container}>

                <Header navigation={navigation} title = {"Traitement"} color={"#2DB142"}/>
                <Text style={style.title}> Nouveau Traitement </Text>
                <FormField label = {"Titre"} color={"#2DB142"} field={title} setField={setTitle}/>
                <FormField placeholder={dateFormateDebut} label = {"Début"} color={"#2DB142"} onPress={showDatePicker(parent)} field={start} setField={setStart} onPress/>
                <FormField placeholder={dateFormateFin} label = {"Fin"} color={"#2DB142"} onPress={showDatePicker(parent)} field={end} setField={setEnd}/>
                <DateTimePickerModal
                    isVisible={isDatePickerBeginVisible}
                    mode="datetime"
                    locale="fr"
                    onConfirm={handleConfirmEnd}
                    onCancel={hideDatePicker}
                />
                <DateTimePickerModal
                    isVisible={isDatePickerEndVisible}
                    mode="datetime"
                    locale="fr"
                    onConfirm={handleConfirmEnd}
                    onCancel={hideDatePicker}
                />
                <Text style={style.title2}> Commentaire </Text>

                <TextInput
                    style={style.remarkInput}
                    value={remark}
                    multiline={true}
                    onChangeText={setRemark}
                />

                <View style={style.btnView}>
                    <TouchableOpacity  style={[style.btn, style.suivantBtn]} >
                        <Text>
                            Sauvegarder
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[style.btn, style.annulerBtn]} onPress={()=>navigation.navigate('Traitements')}>
                        <Text>
                            Annuler
                        </Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>



        </View>



    )

}

export default AddTreatmentForm;

const style = StyleSheet.create({

    btn:{
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
    },

    suivantBtn: {
        backgroundColor: "#2DB142",
        color:"white",
        marginRight:30,
    },
    annulerBtn: {
        backgroundColor: "#9C9C9C",
    },

    btnView: {
        height:"20%",
        width:"80%",
        marginLeft:"auto",
        marginRight:"auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },

    container:{
        flex:1,
    },
    title:{
        marginLeft:"auto",
        marginRight:"auto",
        fontSize:35,
        marginBottom:25,
        color:"#2DB142",
        fontWeight:"bold",
    },
    title2:{
        fontSize:25,
        color:"#2DB142",
        fontWeight:"bold",
        marginLeft:20
    },
    remarkInput:{
        width:"95%",
        textAlignVertical:"top",
        height:"20%",
        borderStyle:"solid",
        paddingLeft:"5%",
        paddingTop:"5%",
        marginLeft:"auto",
        marginRight:"auto",
        borderColor:"#2DB142",
        borderRadius:10,
        borderWidth:5,
        marginTop:10
    }

});