import React, { Component, useState,useEffect } from 'react';
import { FlatList,Button,StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity, ScrollView, Slider } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from '../Style/styleHome'
import Header from "../Util/Header";
import ButtonMenu from "../Util/ButtonMenu";


  const Notifications = ({route,navigation}) =>{


    return (

        <View style={styles.container}>
            <Header navigation={navigation} title = {"Parametres"} color={"#4F4150"}/>
            <ButtonMenu text={"Notification"} color={"#4F4150"} icone={"bell"} styleText={styles.text} styleButton={styles.ParametreBtn}  onPress={() =>  navigation.navigate('ParametersNotification')} styleIcone ={styles.iconDossier}/>
        </View>

    )
  }

export default Notifications;