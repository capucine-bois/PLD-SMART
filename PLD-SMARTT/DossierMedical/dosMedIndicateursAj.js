import {React,useState} from 'react';
import {StyleSheet, Text, ScrollView, View, TouchableOpacity, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StatusBar} from "expo-status-bar";
import {Picker} from "@react-native-picker/picker"

function Bouton(props){
    return (
        <TouchableOpacity style={props.styleButton} onPress={props.onPress}>
            <Text style={props.styleText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

function DosMedIndicateursAj({navigation}) {
    const prenom = "Gérard"
    const nom = "Dupont".toUpperCase()

    return(
        <View style={styles.container}>

        </View>
    )

}

export default DosMedIndicateursAj

const styles = StyleSheet.create({

})