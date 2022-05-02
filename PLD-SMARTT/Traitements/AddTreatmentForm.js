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
    Pressable
} from 'react-native';
import Header from "../Util/Header";



const AddTreatmentForm = ({route,navigation})=> {

    return (

        <View>
            <Header navigation={navigation} title = {"Traitement"} color={"#2DB142"}/>
            <Text> Nouveau Traitement </Text>
        </View>


    );

}

export default AddTreatmentForm;